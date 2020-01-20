import React, { Fragment } from 'react';
import ListProduct from './ListProduct';


const Products = ({ products }) => {
    return (
        <Fragment>
            <h1 className="text-center">Products</h1>
            <ul className="list-group mt-5">
                {products.map(product => (
                    <ListProduct product={product} key={product.id}></ListProduct>
                ))}
            </ul>
        </Fragment>

    )
}

export default Products;