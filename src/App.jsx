import SkipContent from "@/components/SkipContent";

const App = () => {
  return (
    <>
      <SkipContent />
      <header>HEADER CONTENT</header>
      <main>
        <button
          role="button"
          type="button"
          onClick={() => console.log("hllo world")}
        >
          hello
        </button>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
