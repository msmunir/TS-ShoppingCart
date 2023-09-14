import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}>
            Products
          </Route>
          <Route path="/:id" element={<ProductDetails />}>
            ProductDetails
          </Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
