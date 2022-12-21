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
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useEffect } from "react";
import { gql, useLazyQuery, createHttpLink } from "@apollo/client";
import AuthRedirect from "./pages/AuthRedirect";
import HackathonApplication from "./pages/HackathonApplication";
import toast, { Toaster } from "react-hot-toast";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

function App() {
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("accessToken");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  // const uploadLink = createUploadLink({ uri: "http://localhost:4000" });

  const link = createHttpLink({
    uri: "http://localhost:4000",
    credentials: "include",
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link),
  });

  return (
    <ApolloProvider client={client}>
      <div className="overflow-hidden">
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
              {(localStorage.getItem("code") ||
                localStorage.getItem("state")) && (
                <div
                  onClick={() => {
                    localStorage.removeItem("code");
                    localStorage.removeItem("state");
                    window.location.reload();
                  }}
                >
                  <Link to="/register">
                    <button className="bg-eraser px-6 py-2 rounded-lg font-bold skew-y-0 hover:skew-y-2 eraserOne">
                      Sign Out
                    </button>
                  </Link>
                </div>
              )}
              {!(
                localStorage.getItem("code") || localStorage.getItem("state")
              ) && (
                <Link to="/register">
                  <button className="bg-eraser px-6 py-2 rounded-lg font-bold skew-y-0 hover:skew-y-2 eraserOne">
                    Register Now
                  </button>
                </Link>
              )}
              <Link to="/dashboard">
                <button className="bg-eraser px-6 py-2 rounded-lg font-bold -skew-y-0 hover:-skew-y-2 eraserTwo">
                  Hacker Dashboard
                </button>
              </Link>
            </div>
          </Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Schedule" element={<Content page="schedule" />} />
            <Route path="/Sponsors" element={<Content page="sponsors" />} />
            <Route path="/About" element={<Content page="about" />} />
            <Route path="/FAQ" element={<Content page="faq" />} />
            <Route path="/Register" element={<Content page="register" />} />
            <Route path="/ModifyUser" element={<Content page="modifyuser" />} />
            <Route path="/Dashboard" element={<Content page="dashboard" />} />
            <Route path="/Apply" element={<Content page="apply" />} />
            <Route path="/Auth" element={<Content page="auth" />} />
            <Route path="/auth_redirect" element={<AuthRedirect />} />
            <Route path="*" element={<Content page="notfound" />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </ApolloProvider>
  );
}

export default App;

