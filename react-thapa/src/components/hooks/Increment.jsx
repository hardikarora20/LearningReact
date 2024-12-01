import { useState } from "react";

export const Increment = () => {
  console.log("increment rendered");
  const [count, setCount] = useState(0);
  const handleIncrementClick = () => {
    setCount((count) => count + 1);
  };
  const handleDecrementClick = () => {
    setCount((count) => {
      return count <= 0 ? 0 : count - 1;
    });
  };
  return (
    <>
      <button onClick={handleIncrementClick}>Increment</button>
      <h1>{count}</h1>
      <button onClick={handleDecrementClick}>Decrement</button>
    </>
  );
};
