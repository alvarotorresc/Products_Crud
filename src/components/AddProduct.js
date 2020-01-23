import React, { useState } from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom'


const AddProduct = ({ history, setrechargeProducts }) => {

    const [plateName, setplateName] = useState('');
    const [platePrice, setplatePrice] = useState('');
    const [category, setcategory] = useState('');
    const [error, seterror] = useState(false);

    const readRadioValue = (e) => {
        setcategory(e.target.value);
    }

    const addProducts = async (e) => {
        e.preventDefault();

        if (plateName === '' || platePrice === '' || category === '') {
            seterror(true);
            return;
        }

        seterror(false);

        try {
            const response = await axios.post('http://localhost:4000/restaurant', {
                plateName,
                platePrice,
                category
            })
            console.log(response)
            if (response.status === 201) {
                Swal.fire(
                    'Product created!',
                    'Product added succesfuly!',
                    'success'
                )
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
        setrechargeProducts(true);
        history.push('/products')
    }



    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Add New Product</h1>
            {(error) ? <Error message='All fields is required'></Error> : null}
            <form
                className="mt-5"
                onSubmit={addProducts}
            >
                <div className="form-group">
                    <label>Plate Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        placeholder="Plate Name"
                        onChange={e => setplateName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Plate Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="precio"
                        placeholder="Price Name "
                        onChange={e => setplatePrice(e.target.value)}
                    />
                </div>

                <legend className="text-center">Category:</legend>
                <div className="text-center">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="categoria"
                            value="postre"
                            onChange={readRadioValue}
                        />
                        <label className="form-check-label">
                            Dessert
                    </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="categoria"
                            value="bebida"
                            onChange={readRadioValue}
                        />
                        <label className="form-check-label">
                            Drink
                    </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="categoria"
                            value="sandwiches"
                            onChange={readRadioValue}
                        />
                        <label className="form-check-label">
                            Sandwiches
                    </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="categoria"
                            value="ensalada"
                            onChange={readRadioValue}
                        />
                        <label className="form-check-label">
                            Salad
                    </label>
                    </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Add Product" />
            </form>
        </div>
    )
}

export default withRouter(AddProduct);