import "./index.css";
import Nav from "./pages/Nav";
import Content from "./pages/content";

function App() {
  return (
    <div className="App ">
      <div className="  fixed top-0 left-0 bg-white z-10 ">
        <Nav />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
}

export default App;
