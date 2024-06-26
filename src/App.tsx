import { Navigate, Route, Routes } from "react-router-dom";
import Client from "./routes/Client";
import Catalog from "./routes/Client/Catalog";
import Details from "./routes/Client/Details";
import Cart from "./routes/Client/Cart";
import Login from "./routes/Client/Login";
import {  useEffect, useState } from "react";
import { ContextCartCount } from "./utils/context-cart";
import * as cartService from './services/cart-service';
import * as authService from './services/auth-service';
import { AccessTokenPayloadDTO } from "./models/auth";
import { ContextToken } from "./utils/context-token";
import Confirmation from "./routes/Client/Confirmation";
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import {history} from './utils/history';
import Admin from "./routes/Admin";
import Home from "./routes/Admin/Home";
import { PrivateRoute } from "./components/PrivateRoute";
import Products from "./routes/Admin/Products";
import ProductForm from "./routes/Admin/ProductForm";

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
    <HistoryRouter history={history}>
    <Routes>
      <Route path='/' element={<Client />}> 
       <Route index element={<Navigate to={'catalog'} />} />
       <Route path="catalog" element={<Catalog />} />
       <Route path="details/:productId" element={<Details />} />
       <Route path="cart" element={<Cart />} />
       <Route path="login" element={<Login />} />
       <Route path="orders/:orderId" element={<Confirmation />} />
      </Route>
      <Route path="/admin" element={<PrivateRoute roles={["ROLE_ADMIN"]}><Admin/></PrivateRoute>}>
       <Route index element={<Navigate to={'home'} />} />
       <Route path="home" element={<Home />} />
       <Route path="products" element={<Products />} />
       <Route path="products/:productId" element={<ProductForm />} />
      </Route>
    </Routes>
    </HistoryRouter>
    </ContextCartCount.Provider>
    </ContextToken.Provider>
  );
}

export default App