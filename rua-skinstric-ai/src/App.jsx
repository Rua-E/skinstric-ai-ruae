import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layer000 from "./components/Pages/Layer000";
import NavBar from "./components/NavBar";
import Layer002 from "./components/Pages/Layer002";
import Layer005 from "./components/Pages/Layer005";
import Layer011 from "./components/Pages/Layer011";
import Layer012 from "./components/Pages/Layer012";
import Layer013 from "./components/Pages/Layer013";
import Layer009 from "./components/Pages/Layer009";
import Layer007 from "./components/Pages/Layer007";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Layer000 />} />
          <Route path="/testing" element={<Layer002 />} />
          <Route path="/loading" element={<Layer011 />} />
          <Route path="/select" element={<Layer012 />} />
          <Route path="/result" element={<Layer005 />} />
          <Route path="/camera" element={<Layer007 />} />
          <Route path="/camera/capture" element={<Layer009 />} />
          <Route path="/summary" element={<Layer013 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
