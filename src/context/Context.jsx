import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";
import peppers from "../peppers";
const Cart = createContext();

const Context = ({ children }) => {
  const cartPeppers = peppers.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    price: item.price,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    peppers: cartPeppers,
    cart: localStorage.getItem("saveCart")
      ? JSON.parse(localStorage.getItem("saveCart"))
      : [],
  });

  localStorage.setItem("saveCart", JSON.stringify(state.cart));

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};
export const CartState = () => {
  return useContext(Cart);
};
export default Context;
