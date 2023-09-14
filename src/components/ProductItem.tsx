import { Card, Button } from "react-bootstrap";
import currencyFormat from "../utility/currencyFormat";

type ProductItemProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
};

const ProductItem = ({
  id,
  name,
  description,
  price,
  imgUrl,
}: ProductItemProps) => {
  const quantity = 0;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between mb-4">
          <div>{name}</div>
          <div className="ms-2 text-muted">{currencyFormat(price)}</div>
          {/* <div className="ms-2 text-muted">{price}</div> */}
        </Card.Title>
        <Card.Text>{description}</Card.Text>

        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">Add to Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button>-</Button>
                <div>{quantity}</div>
                <Button>+</Button>
              </div>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
