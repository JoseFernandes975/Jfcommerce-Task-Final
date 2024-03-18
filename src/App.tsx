import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Client from "./routes/Client";
import Catalog from "./routes/Client/Catalog";
import Details from "./routes/Client/Details";
import Cart from "./routes/Client/Cart";
import Login from "./routes/Client/Login";
import {  useEffect, useState } from "react";
import { ContextCartCount } from "./utils/context-cart";
import * as cartService from './services/cart-service';
import * as authService from './services/auth-service';
import { AccessTokenPayloadDTO } from "./models/token";
import { ContextToken } from "./utils/context-token";

function App() {
  
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  useEffect(() => {
    setContextCartCount(cartService.getCart().items.length);
    setContextTokenPayload(authService.getAccessTokenPayload());
  }, [])

  return (
    <ContextToken.Provider value={{ contextTokenPayload, setContextTokenPayload}}>
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
    </ContextToken.Provider>
  );
}

export default App
