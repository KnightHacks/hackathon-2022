import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import About from "./About";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import FAQ from "./FAQ";
import HackathonApplication from "./HackathonApplication";
import Register from "./Register";
import Schedule from "./Schedule";
import Sponsors from "./Sponsors";

export default function Content(props) {
  return (
    <div className="flex h-screen bg-content-background bg-cover bg-center bg-fixed">
      {props.page == "schedule" && <Schedule />}
      {props.page == "sponsors" && <Sponsors />}
      {props.page == "about" && <About />}
      {props.page == "faq" && <FAQ />}
      {props.page == "register" && <Register />}
      {props.page == "dashboard" && <Dashboard />}
      {props.page == "apply" && <HackathonApplication />}
      {props.page == "auth" && <Auth />}
    </div>
  );
}

