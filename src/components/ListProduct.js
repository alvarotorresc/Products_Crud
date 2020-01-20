import React from 'react';
import { Link } from 'react-router-dom';

const ListProduct = ({ product }) => {

    const deleteProduct = i => {
        console.log("deleting...",i)
    }

    return (
        <li className="list-group-item d-flex justify-content-between aling-items-center" data-category={product.category}>
            <p >
                {product.plateName}
                <span className="font-weight-bold"> ${product.platePrice}</span>
            </p>
            <div>
                <Link to={`/productos/edit/:${product.id}`}
                    className="btn btn-success mr-2">Edit</Link>
                <button type="button" className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Eliminar &times;</button>
            </div>
        </li>

    );
}

export default ListProduct;