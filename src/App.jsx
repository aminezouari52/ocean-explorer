import SkipContent from "@/components/SkipContent";
import Block from "@/components/Block";

const App = () => {
  return (
    <>
      <SkipContent />
      <header>HEADER CONTENT</header>
      <main>
        <Block />
        <button
          role="button"
          type="button"
          onClick={() => console.log("hello world")}
        >
          hello
        </button>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
