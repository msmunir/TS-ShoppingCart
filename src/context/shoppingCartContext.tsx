import { createContext, ReactNode, useContext, useState } from "react";
// import currencyFormat from "../utility/currencyFormat";

// ReactNode: essential the type given to children property inside react.
type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

// ShoppingCartContext contains these values
type ShoppingCartContext = {
  getItem: (id: number) => number;
  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

// provided needs to have objects and children inside of it

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const increaseItem = (id: number) => {
    setCartItems((currentItmes) => {
      if (currentItmes.find((item) => item.id == id) == null) {
        return [...currentItmes, { id, quantity: 1 }];
      } else {
        return currentItmes.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseItem = (id: number) => {
    setCartItems((currentItmes) => {
      if (currentItmes.find((item) => item.id == id)?.quantity === 1) {
        return currentItmes.filter((item) => item.id !== id); //retunr current list
      } else {
        return currentItmes.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }; // same item decrement 1
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id: number) => {
    setCartItems((currentItmes) => {
      return currentItmes.filter((item) => item.id !== id);
    });
  };
  const getItem = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        getItem,
        increaseItem,
        decreaseItem,
        removeItem,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      {/* <useShoppingCart isOpen={isOpen} /> */}
    </ShoppingCartContext.Provider>
  );
};
