const Button = (props) => {
  const { large, children } = props;
  const isLarge = large ? "text-3xl " : "text-base";
  return (
    <button
      type="submit"
      className={` text-2xl m-8 border-4 bg-blue-200 text-blue-500 rounded-md hover:bg-blue-900 hover:text-white p-2 hover:rounded-full ${isLarge}`}
    >
      {children}
    </button>
  );
};
export default Button;
