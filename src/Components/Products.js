import { React, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product';
import { CartContext } from '../CartContext';
const Products = () => {

    // const { name } = useContext(CartContext);

    return (

        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products</h1>

            <div className="grid grid-cols-5 my-8 gap-24">
                <Link to="/products/randomId">
                    <Product />
                </Link>
                <Link to="/products/randomId">
                    <Product />
                </Link>
                <Link to="/products/randomId">
                    <Product />
                </Link>
                <Link to="/products/randomId">
                    <Product />
                </Link>
                <Link to="/products/randomId">
                    <Product />
                </Link>
                <Link to="/products/randomId">
                    <Product />
                </Link>
                <Link to="/products/randomId">
                    <Product />
                </Link>
                <Link to="/products/randomId">
                    <Product />
                </Link>
                <Link to="/products/randomId">
                    <Product />
                </Link>
                <Link to="/products/randomId">
                    <Product />
                </Link>


            </div>
        </div>
    )
}

export default Products
