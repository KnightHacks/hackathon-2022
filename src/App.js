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
import Schedule from "./pages/Schedule";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

