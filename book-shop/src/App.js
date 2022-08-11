import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Store from './pages/Store'
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
const App = () =>{

    const [itemsInCart, setItemsInCart] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    console.log(itemsInCart);

    const changeCart=() =>{
        setCartItemCount(itemsInCart.length)
        console.log(itemsInCart.length);
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home cartItemCount={cartItemCount}/>} />
                    <Route
                        exact
                        path='/store/'
                        element={<Store
                            itemsInCart={itemsInCart}
                            cartItemCount={cartItemCount}
                            setItemsInCart={setItemsInCart}
                            setCartItemCount={setCartItemCount}
                        />}
                    />
                    <Route
                        exact
                        path='/store/:name'
                        element={<Product
                            itemsInCart={itemsInCart}
                            cartItemCount={cartItemCount}
                            setItemsInCart={setItemsInCart}
                            setCartItemCount={setCartItemCount}
                            changeCart={changeCart}
                        />}
                    />
                    <Route
                        exact
                        path='/about'
                        element={<About
                            itemsInCart={itemsInCart}
                            cartItemCount={cartItemCount}
                            setItemsInCart={setItemsInCart}
                            setCartItemCount={setCartItemCount}
                            changeCart={changeCart}
                        />}
                    />

                    <Route
                        exact
                        path='/cart'
                        element={<Cart
                            itemsInCart={itemsInCart}
                            cartItemCount={cartItemCount}
                            setItemsInCart={setItemsInCart}
                            setCartItemCount={setCartItemCount}
                            changeCart={changeCart}
                        />}
                    />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
