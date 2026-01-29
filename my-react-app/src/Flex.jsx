const Flex = () => {
  return (
    <div className="p-2 border-2 rounded-lg border-amber-400">
      <i className=" text-2xl text-amber-400"> hello</i>
    </div>
  );
};
const Flex1 = () => {
  return (
    <div>
      <div className="flex h-64 p-4 border 2 justify-center">
        <Flex></Flex>
        <Flex></Flex>
        <Flex></Flex>
      </div>
      <div className="flex h-64 p-4 border 2 justify-between">
        <Flex></Flex>
        <Flex></Flex>
        <Flex></Flex>
      </div>
      <div className="flex h-64 p-4 border 2 justify-center items-center">
        <Flex></Flex>
        <Flex></Flex>
        <Flex></Flex>
      </div>
      <div className="flex h-64 p-4 border 2 justify-around items-end">
        <Flex></Flex>
        <Flex></Flex>
        <Flex></Flex>
      </div>
      <div className="flex h-64 p-4 border 2 justify-between items-center">
        <Flex></Flex>
        <Flex></Flex>
        <Flex></Flex>
      </div>
    </div>
  );
};
const Flex2 = () => {
  return (
    <div>
      <div className="flex h-64 p-4 border 2 justify-center">
        <Flex></Flex>
        <Flex></Flex>
        <Flex></Flex>
      </div>
      <div className="flex flex-col h-64 p-4 border 2 justify-between items-center">
        <Flex></Flex>
        <Flex></Flex>
        <Flex></Flex>
      </div>
      <div className="flex flex-col h-64 p-4 border 2 justify-end items-center">
        <Flex></Flex>
        <Flex></Flex>
        <Flex></Flex>
      </div>
      <div className="flex h-64 p-4 border 2 justify-around items-end">
        <Flex></Flex>
        <Flex></Flex>
        <Flex></Flex>
      </div>
      <div className="flex flex-col h-64 p-4 border 2 justify-around items-end">
        <Flex></Flex>
        <Flex></Flex>
        <Flex></Flex>
      </div>
    </div>
  );
};
export default Flex;
