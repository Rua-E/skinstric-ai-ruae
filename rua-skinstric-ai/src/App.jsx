import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layer000 from "./components/Pages/Layer000";
import NavBar from "./components/NavBar";
import Layer002 from "./components/Pages/Layer002";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Layer000 />} />
          <Route path="/testing" element={<Layer002 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
