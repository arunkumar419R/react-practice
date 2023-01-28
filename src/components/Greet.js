const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h3>
        Hello {props.name} city {props.city}
      </h3>
      {props.children}
    </div>
  );
};

export default Greet;
