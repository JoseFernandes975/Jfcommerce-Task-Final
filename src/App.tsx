import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Client from "./routes/Client";
import Catalog from "./routes/Client/Catalog";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Client />}> 
       <Route index element={<Navigate to={'catalog'} />} />
       <Route path="catalog" element={<Catalog />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App
