import { Col, Row } from "react-bootstrap";
import storeItems from "../db/products.json";
// import StoreItem from "../components/StoreItem";
import ProductItem from "../components/ProductItem";

const Home = () => {
  return (
    <>
      <h1>Store Products</h1>
      <Row md={2} xs={1} lg={3} className="g-4">
        {storeItems.map((item) => (
          <Col key={item.id}>
            {/* <StoreItem {...item} /> */}
            <ProductItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
