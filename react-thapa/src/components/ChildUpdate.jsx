export const ChildUpdate = (currCart) => {
  console.log(currCart);

  return <h1 onClick={currCart.onClick}>{currCart.currCart}</h1>;
};
