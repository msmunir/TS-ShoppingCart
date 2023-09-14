import { useShoppingCart } from "../context/shoppingCartContext";
import storeItems from "../db/products.json";
import { Button, Stack } from "react-bootstrap";
import currencyFormat from "../utility/currencyFormat";

type CartItemProps = {
  id: number;
  quantity: number;
};
const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeItem } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={3} className="d-flex align-itmes-center">
      <img
        src={item.imgUrl}
        style={{ width: "120px", height: "80px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {""}
          {quantity > 1 && <div>x {quantity}</div>}
        </div>
        <div>{currencyFormat(item.price)}</div>
        <div>{currencyFormat(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeItem(item.id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  );
};

export default CartItem;
