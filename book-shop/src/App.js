import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Store from './pages/Store'
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {

    const [itemsInCart, setItemsInCart] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    console.log(itemsInCart);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home cartItemCount={cartItemCount}/>} />
                    <Route path="/store" element={<Store cartItemCount={cartItemCount}/>} />
                    <Route
                        exact
                        path='/store/:name'
                        element={<Product
                            itemsInCart={itemsInCart}
                            cartItemCount={cartItemCount}
                            setItemsInCart={setItemsInCart}
                            setCartItemCount={setCartItemCount}
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
                        />}
                    />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
