import { BrowserRouter,Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Products from "./Products";
import Product from "./Product";
import AddProduct from "./AddProduct";
// import Navbar from "./Navbar";

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <BrowserRouter>
      <Routes>
          <Route index element ={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/newproduct" element={<AddProduct />} />
        </Routes>

      </BrowserRouter>
        
      
    </div>
  );
}

export default App;