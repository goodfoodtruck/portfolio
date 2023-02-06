import AOS from "aos";
import "aos/dist/aos.css"; 
import Home from './components/Home.component';
import About from './components/About.component';
import Work from './components/Work.component';
import Skills from "./components/Skills.component";

function App() {

  AOS.init();

  return (
    <div className="App">
      <main>
        <Home />
        <About />
        <Skills />
        <Work />
      </main>
    </div>
  );
}

export default App;
