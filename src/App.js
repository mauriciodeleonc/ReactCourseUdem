import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import CustomNavbar from "./CustomNavbar";

const App = () => {
	return (
		<>
			<CustomNavbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="project/:projectId" element={<Project />} />
			</Routes>
		</>
	);
}

export default App;