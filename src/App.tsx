import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import CV from "./pages/CV";
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
     <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;