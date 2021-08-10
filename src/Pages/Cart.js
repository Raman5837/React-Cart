import React from 'react'

const Cart = () => {
    return (

        <div className="container mx-auto lg: w-1/2 w-full pb-24">
            <h1 className="title mt-8">Cart Items</h1>
            <ul>
                <li className="mt-8">
                    <div className="flex items-center justify-evenly">
                        {/* image and name */}
                        <div className="flex items-center">
                            <img className="h-16" src="/Images/peproni.png" alt="Product Image" />
                            <span className="font-bold ml-4 w-48">Veg Loaded Pizza</span>
                        </div>

                        {/* quantity changing button */}
                        <div>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none"><b>-</b></button>
                            <b className="px-4">1</b>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none"><b>+</b></button>
                        </div>

                        {/* pricce */}
                        <span className="font-bold">Rs. 299</span>

                        {/* delete button */}
                        <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white font-bold">DELETE</button>


                    </div>
                </li>
                <li className="mt-8">
                    <div className="flex items-center justify-evenly">
                        {/* image and name */}
                        <div className="flex items-center">
                            <img className="h-16" src="/Images/peproni.png" alt="Product Image" />
                            <span className="font-bold ml-4 w-48">Veg Loaded Pizza</span>
                        </div>

                        {/* quantity changing button */}
                        <div>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none"><b>-</b></button>
                            <b className="px-4">1</b>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none"><b>+</b></button>
                        </div>

                        {/* pricce */}
                        <span className="font-bold">Rs. 299</span>

                        {/* delete button */}
                        <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white font-bold">DELETE</button>


                    </div>
                </li>
                <li className="mt-8">
                    <div className="flex items-center justify-evenly">
                        {/* image and name */}
                        <div className="flex items-center">
                            <img className="h-16" src="/Images/peproni.png" alt="Product Image" />
                            <span className="font-bold ml-4 w-48">Veg Loaded Pizza</span>
                        </div>

                        {/* quantity changing button */}
                        <div>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none"><b>-</b></button>
                            <b className="px-4">1</b>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none"><b>+</b></button>
                        </div>

                        {/* pricce */}
                        <span className="font-bold">Rs. 299</span>

                        {/* delete button */}
                        <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white font-bold">DELETE</button>


                    </div>
                </li>
                <li className="mt-8">
                    <div className="flex items-center justify-evenly">
                        {/* image and name */}
                        <div className="flex items-center">
                            <img className="h-16" src="/Images/peproni.png" alt="Product Image" />
                            <span className="font-bold ml-4 w-48">Veg Loaded Pizza</span>
                        </div>

                        {/* quantity changing button */}
                        <div>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none"><b>-</b></button>
                            <b className="px-4">1</b>
                            <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none"><b>+</b></button>
                        </div>

                        {/* pricce */}
                        <span className="font-bold">Rs. 299</span>

                        {/* delete button */}
                        <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white font-bold">DELETE</button>


                    </div>
                </li>
            </ul>
            <hr className="my-4"></hr>
            <div className="text-right">
                <b>Grand Total : Rs. 1196</b>
            </div>
            <div className="text-right mt-10">
                <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">Order Now</button>
            </div>
        </div>
    )
}

export default Cart
