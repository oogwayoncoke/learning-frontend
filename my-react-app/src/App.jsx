import Header from "./header";
import Search from "./search";
import Footer from "./footer";
const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header></Header>
      <Search></Search>
      <Footer></Footer>
    </div>
  );
};

export default App;
