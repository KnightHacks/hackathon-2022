import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  useLocation,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Sponsors from "./pages/Sponsors";
import About from "./pages/About";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sponsors" element={<Sponsors />} />
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

