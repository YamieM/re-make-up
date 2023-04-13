import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import "./styles/main.scss";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
