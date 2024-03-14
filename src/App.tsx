import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Client from "./routes/Client";
import Catalog from "./routes/Client/Catalog";
import Details from "./routes/Client/Details";
import Cart from "./routes/Client/Cart";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Client />}> 
       <Route index element={<Navigate to={'catalog'} />} />
       <Route path="catalog" element={<Catalog />} />
       <Route path="details/:productId" element={<Details />} />
       <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App
