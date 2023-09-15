import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />}>
              Products
            </Route>
            {/* <Route path="/:id" element={<ProductDetails />}>
              ProductDetails
            </Route> */}
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
};

export default App;
