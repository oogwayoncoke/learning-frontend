import { Children } from "react";
import Box from "./Box";

const App = () => {
  return (
    <div>
      <Box
        label="i am a box"
        bgColor="Cornflowerblue"
        color="white"
        large={true}
      >
        hello
      </Box>
      <Box
        label="i am another box"
        bgColor="lavender"
        color="black"
        large={false}
      ></Box>
      <Box
        label="i am another box"
        bgColor="green"
        color="black"
        height={200}
      ></Box>
    </div>
  );
};
export default App;
