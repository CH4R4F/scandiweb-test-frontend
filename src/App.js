import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
