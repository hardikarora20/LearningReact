export const ProfileCard = (props) => {
  console.log(props);
  return (
    <>
      <h1>
        Hello {props.name}, {props.age}
      </h1>
      <h2>{props.greeting}</h2>
      <div>{props.children}</div>
    </>
  );
};
