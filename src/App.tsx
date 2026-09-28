import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import What from "./pages/What.tsx";
import Where from "./pages/Where.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
     <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what" element={<What />} />
        <Route path="/where" element={<Where />} />
      </Routes>
    </>
  );
}

export default App;