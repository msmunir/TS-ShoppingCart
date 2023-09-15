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

  // find the particular item. db
  const item = storeItems.find((i) => i.id === id);

  //  if we dont find item we return nothing
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={3} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "120px", height: "80px", objectFit: "cover" }}
      />

      <div className="me-auto">
        <div>
          {item.name}
          {""}
          {/* quantity more than one than shows up */}
          {quantity > 1 && <div>x {quantity}</div>}
        </div>
        <div>{currencyFormat(item.price)}</div>
      </div>

      <div>{currencyFormat(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeItem(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
