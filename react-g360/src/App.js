import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import Product from "./component/Product";

import {
  BrowserRouter as Router, 
  Routes, 
  Route,  
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<Product/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
