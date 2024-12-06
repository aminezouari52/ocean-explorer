import SkipContent from "@/components/SkipContent";
import Header from "@/components/Header";
import Tabbar from "./components/Tabbar";

const App = () => {
  return (
    <>
      <SkipContent />
      <Header />
      <main id="main">
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
