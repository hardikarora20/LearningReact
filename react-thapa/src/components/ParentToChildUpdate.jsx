import { useState } from "react";
import { ChildUpdate } from "./ChildUpdate";

export const ParentChild = () => {
  const [cart, setCart] = useState(0);
  function updateCart() {
    setCart((cart) => cart + 1);
  }
  return <ChildUpdate onClick={updateCart} currCart={cart} />;
};
