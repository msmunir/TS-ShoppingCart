import { Card, Button } from "react-bootstrap";
import currencyFormat from "../utility/currencyFormat";
import { useShoppingCart } from "../context/shoppingCartContext";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

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
  const { getItem, increaseItem, decreaseItem, removeItem } = useShoppingCart();
  const quantity = getItem(id);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
          </Card.Title>

          <div className="mt-auto">
            {quantity === 0 ? (
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "1rem" }}
              >
                <Button className="w-50" onClick={() => increaseItem(id)}>
                  Add to Cart
                </Button>
                <Button className="w-50" onClick={handleShow}>
                  Details
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                      {name}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      <img
                        src={imgUrl}
                        height="200px"
                        width="450px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    {description}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    {/* <Button variant="primary" onClick={() => increaseItem(id)}>
                      Add to Cart
                    </Button> */}
                  </Modal.Footer>
                </Modal>
              </div>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => decreaseItem(id)}>-</Button>
                  <div>{quantity}</div>
                  <Button onClick={() => increaseItem(id)}>+</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeItem(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductItem;
