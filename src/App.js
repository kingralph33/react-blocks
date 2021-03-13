import Advertisement from "./components/Advertisement";
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import SubContent from "./components/SubContent";

function App() {
  return (
    <div className="flex bg-gray-100 h-screen justify-center items-center space-x-2">
      <Header />
      <Navigation />
      <Main>
        <SubContent />
        <SubContent />
        <SubContent />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
