import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Project from "./Project";

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="project/:projectId" element={<Project />} />
    </Routes>
    </>
  );
}

export default App;