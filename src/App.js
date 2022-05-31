import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}  />
         <Route path="/products/:id" element={<Product/>} />
         
      </Routes>
      
      
    </div>
  );
}

export default App;
