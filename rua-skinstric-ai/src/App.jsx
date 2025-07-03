import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layer000 from "./components/Layer000";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Layer000 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
