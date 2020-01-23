import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ListProduct = ({ product, setrechargeProducts }) => {

    const deleteProduct = id => {
        console.log("deleting...", id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.value) {
                try {
                    const url = `http://localhost:4000/restaurant/${id}`;
                    console.log(url);
                    const response = await axios.delete(url);
                    if (response.status === 200) {
                        Swal.fire(
                            'Deleted!',
                            'The product has been deleted.',
                            'success'
                        )
                    }
                    setrechargeProducts(true);
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }

            }
        })
    }


    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" data-category={product.category}>
            <p >
                {product.plateName}
                <span className="font-weight-bold"> ${product.platePrice}</span>
            </p>
            <div>
                <Link to={`/products/edit/${product.id}`}
                    className="btn btn-success mr-2">Edit</Link>
                <button type="button" className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Eliminar &times;</button>
            </div>
        </li>

    );
}

export default ListProduct;