import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductList from "./components/products/ProductList"
import AddProduct from "./components/products/AddProduct"
import EditProduct from "./components/products/EditProduct"

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />}>
          </Route>
          <Route path="/add" element={<AddProduct />}>
          </Route>
          <Route path="/edit/:id" element={<EditProduct />}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
