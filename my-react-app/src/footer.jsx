const Footer = () => {
  return (
    <div className=" p-2 flex justify-between bg-blue-300 text-blue-800">
      <div className="ml-4">(this site is not real)</div>
      <div>
        Made with{" "}
        <a
          className="text-blue-900 mx-0.5 underline"
          target="_blank"
          href="https://tailwindcss.com/"
        >
          Tailwind CSS
        </a>
      </div>
      <div className="mr-4">Created by oogwayoncoke</div>
    </div>
  );
};
export default Footer;
