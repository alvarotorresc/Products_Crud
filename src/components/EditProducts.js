import React, { useState, useRef } from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom'


const EditProducts = props => {

    const { product, history, setrechargeProducts } = props;

    const platePriceRef = useRef('');
    const plateNameRef = useRef('');
    const [error, seterror] = useState(false);
    const [category, setcategory] = useState('');


    const editProduct = async (e) => {
        e.preventDefault();

        const newNamePlate = plateNameRef.current.value,
            newPricePlate = platePriceRef.current.value;

        if (newNamePlate === '' || newPricePlate === '' || category === '') {
            seterror(true);
            return;
        }

        seterror(false);

        let categoryPlate = (category === '') ? product.category : category;
        console.log(categoryPlate)

        const plateEdit = {
            plateName: plateNameRef.current.value,
            platePrice: platePriceRef.current.value,
            category: categoryPlate
        }

        const url = `http://localhost:4000/restaurant/${product.id}`;

        try {
            const response = await axios.put(url, plateEdit);
            if (response.status === 200) {
                Swal.fire(
                    'Product edited!',
                    'Product edited succesfuly!',
                    'success'
                )
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
        history.push('/products');
        setrechargeProducts(true);

    }

    const readRadioValue = (e) => {
        setcategory(e.target.value);
    }


    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Edit Product</h1>
            {(error) ? <Error message='All fields is required'></Error> : null}
            <form
                className="mt-5"
                onSubmit={editProduct}
            >
                <div className="form-group">
                    <label>Plate Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        placeholder="Plate Name"
                        ref={plateNameRef}
                        defaultValue={product.plateName}
                    />
                </div>

                <div className="form-group">
                    <label>Plate Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="precio"
                        placeholder="Price Plate "
                        ref={platePriceRef}
                        defaultValue={product.platePrice}
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
                            defaultChecked={(product.category === "postre")}
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
                            defaultChecked={(product.category === "bebida")}
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
                            defaultChecked={(product.category === "sandwiches")}
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
                            defaultChecked={(product.category === "ensalada")}
                        />
                        <label className="form-check-label">
                            Salad
                    </label>
                    </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Edit Product" />
            </form>
        </div>
    )
}

export default withRouter(EditProducts);