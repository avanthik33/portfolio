import "./App.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
