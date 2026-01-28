const Box = (props) => {
  const { label, bgColor, color, large, children, height } = props;
  return (
    <div
      style={{
        background: bgColor,
        color: color,
        fontSize: large ? "40px" : "10px",
        height: height + "px",
      }}
    >
      <div>{children}</div>
      {label}
    </div>
  );
};
export default Box;
