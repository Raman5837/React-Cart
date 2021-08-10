import React from 'react'
import { useHistory } from 'react-router-dom';
const SingleProduct = () => {


    const history = useHistory()

    return (
        <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold" onClick={() => { history.goBack() }}>Back</button>

            <div className="flex items-center justify-evenly">
                <img src="/Images/peproni.png" alt="Product Image" />
                <div className="">
                    <h1 className="text-xl font-bold">Veg Loaded Pizza</h1>
                    <div className="text-md">Small</div>
                    <div className="font-bold mt-2">Rs. 299</div>
                    <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
