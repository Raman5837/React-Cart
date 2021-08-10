import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
// import About from './Pages/About'
import ProductsPage from './Pages/ProductsPage'
import Cart from './Pages/Cart'
import Navigation from './Components/Navigation'
import SingleProduct from './Components/SingleProduct';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react'
const App = () => {

    const [cart, setCart] = useState({})
    // fetching cart from local storage
    useEffect(() => {
        const cart = window.localStorage.getItem('cart');

    }, []);
    useEffect(() => {
        window.localStorage.getItem('cart', JSON.stringify(cart));

    }, [cart]);


    return (

        <>
            <Router>
                <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
                    <Navigation />

                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        {/* <Route path="/about" component={About}></Route> */}
                        <Route path="/products" exact component={ProductsPage}></Route>
                        <Route path="/products/:_id" component={SingleProduct}></Route>
                        <Route path="/cart" component={Cart}></Route>
                    </Switch>
                </CartContext.Provider>
            </Router>
        </>
    )
}

export default App;