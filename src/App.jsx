import SkipContent from "@/components/SkipContent";
import Header from "@/components/Header";
import Tabbar from "./components/Tabbar";
import Block from "@/components/Block";

const App = () => {
  return (
    <>
      <SkipContent />
      <Header />
      <main id="main">
        <Block />
        <h1>Welcome to our website!</h1>
        <h2>Ocean Animals (h2)</h2>
        <Tabbar />
        <h3>subsection title</h3>
        <h2>section title 2</h2>
        <h3>subsection title</h3>
        <h2>section title 3</h2>
        <h3>subsection title</h3>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
