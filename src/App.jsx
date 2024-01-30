import Body from "./components/Body";
import { Header } from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="w-[90%] m-auto">
        <Header />
        <Hero />
        <Body />
      </div>
    </>
  );
}

export default App;
