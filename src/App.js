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
import Sponsors from "./pages/Sponsors";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Attributions from "./pages/Attributions";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./pages/Content";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Sidebar>
          <div className="mt-6 ">
            <Link to="/">
              <h1 className="text-4xl text-white font-medium font-cursive hover:underline">
                Home
              </h1>
            </Link>
          </div>
          <div className="mt-6">
            <Link to="/about">
              <h1 className="text-4xl text-white font-medium font-cursive hover:underline">
                About
              </h1>
            </Link>
          </div>
          <div className="mt-6">
            <Link to="/sponsors">
              <h1 className="text-4xl text-white font-medium font-cursive hover:underline">
                Sponsors
              </h1>
            </Link>
          </div>
          <div className="mt-6">
            <Link to="/schedule">
              <h1 className="text-4xl text-white font-medium font-cursive hover:underline">
                Schedule
              </h1>
            </Link>
          </div>
          <div className="mt-6">
            <Link to="/faq">
              <h1 className="text-4xl text-white font-medium font-cursive hover:underline">
                FAQ
              </h1>
            </Link>
          </div>
          <div className="flex w-full justify-center gap-4 mt-8 border-chalkborder border-b-4 pb-1">
            <button className="bg-eraser px-6 py-2 rounded-lg font-bold skew-y-0 hover:skew-y-2 hover:drop-shadow-eraser">
              Register Now
            </button>
            <button className="bg-eraser px-6 py-2 rounded-lg font-bold -skew-y-0 hover:-skew-y-2 hover:drop-shadow-eraserTwo">
              Hacker Dashboard
            </button>
          </div>
        </Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Schedule" element={<Content page="schedule" />} />
          <Route path="/Sponsors" element={<Content page="sponsors" />} />
          <Route path="/About" element={<Content page="about" />} />
          <Route path="/FAQ" element={<Content page="faq" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

