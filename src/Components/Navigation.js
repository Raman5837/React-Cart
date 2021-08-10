import React from 'react'
import { Link } from 'react-router-dom';
const Navigation = () => {

    const cartStyle = {
        background: '#F59E0D',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '20px'
    }

    return (

        <nav className="container mx-auto flex items-center justify-between py-5">

            <Link to="/">
                <img src="/Images/logo.png" alt="logo" style={{ height: 45 }} />
            </Link>

            <ul className="flex items-center">
                <li><Link to="/">Home</Link></li>
                <li className="ml-6"><Link to="/products">Products</Link></li>
                <li className="ml-6">
                    <Link to="/cart">
                        <div style={cartStyle}>
                            <span className="text-white">10</span>
                            <img className="ml-2" src="/Images/cart.png" alt="Cart" />
                        </div>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

// F: \Learning React\Basics\react - cart >

export default Navigation
