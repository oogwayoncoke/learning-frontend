const Search = () => {
  return (
    <div className="bg-blue-200 flex flex-col justify-center items-center  flex-1">
      <div className="text-6xl font-bold font-sans text-blue-500 my-4">
        Foogle
      </div>
      <div className="mx-1.5 flex w-2xl p-3 rounded-3xl border-blue-500 border-2 bg-blue-500 text-blue-300">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        search <input className="flex-1" type="text" />
      </div>
      <div className="m-2">
        <button className="bg-blue-500 m-1 text-blue-300 rounded-2xl p-3">
          Foogle search
        </button>
        <button className="bg-blue-500 m-1 text-blue-300 rounded-2xl p-3">
          image search
        </button>
      </div>
    </div>
  );
};
export default Search;
