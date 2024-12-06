import SkipContent from "@/components/SkipContent";
import Header from "@/components/Header";
import Tabbar from "./components/Tabbar";
import Block from "@/components/Block";

const App = () => {
  return (
    <>
      <SkipContent />
      <Header />
      <main role="main" id="main">
        <Block />
        <h1>Welcome to our website!</h1>
        <h2>Ocean Animals (h2)</h2>
        <Tabbar />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
