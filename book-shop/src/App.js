import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Store from './pages/Store'
import Product from "./pages/Product";
function App() {

    const [itemsInCart, setItemsInCart] = useState([])
    const [cartItemCount, setCartItemCount] = useState(0)
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route>exact
                    path='/shop/:id'
                    render={(props)=> (
                        <Product
                            {...props}
                            itemsInCart={itemsInCart}
                            cartItemCount={cartItemCount}
                            setItemsInCart={setItemsInCart}
                            setCartItemCount={setCartItemCount}
                        />
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
