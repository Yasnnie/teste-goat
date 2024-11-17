import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Roleta } from "./pages/Roleta";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roleta" element={<Roleta />} />
      </Routes>
    </Router>
  );
}

export default App;
