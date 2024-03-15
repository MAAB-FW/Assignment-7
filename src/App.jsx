import Header from "./components/Header/Header";
import OurRecipes from "./components/OurRecipes/OurRecipes";

const App = () => {

  return (
    <>
      <header className="max-w-[1600px] mx-auto">
        <Header />
      </header>
      <main className="max-w-[1600px] mx-auto my-12 lg:my-[100px]">
        <OurRecipes />
      </main>
    </>
  );
};

export default App;