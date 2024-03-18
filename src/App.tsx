import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Client from "./routes/Client";
import Catalog from "./routes/Client/Catalog";
import Details from "./routes/Client/Details";
import Cart from "./routes/Client/Cart";
import Login from "./routes/Client/Login";
import {  useEffect, useState } from "react";
import { ContextCartCount } from "./utils/context-cart";
import * as cartService from './services/cart-service';

function App() {
  
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  useEffect(() => {
    setContextCartCount(cartService.getCart().items.length);
  }, [])

  return (
    <ContextCartCount.Provider value={{contextCartCount, setContextCartCount}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Client />}> 
       <Route index element={<Navigate to={'catalog'} />} />
       <Route path="catalog" element={<Catalog />} />
       <Route path="details/:productId" element={<Details />} />
       <Route path="cart" element={<Cart />} />
       <Route path="login" element={<Login />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </ContextCartCount.Provider>
  );
}

export default App
