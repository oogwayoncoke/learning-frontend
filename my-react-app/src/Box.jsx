const Box = (props) => {
  const { label } = props;

  const isError = false;

  return (
    <div className={isError ? "text-red-600" : "text-green-600"}>{label}</div>
  );
};

export default Box;
