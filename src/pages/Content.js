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
import ContentBox from "../components/ContentBox/ContentBox";
import ModifyProfile from "./ModifyProfile";

export default function Content(props) {
  return (
    <div className="flex h-screen bg-content-background bg-cover bg-center bg-fixed">
      {props.page == "schedule" && <Schedule />}
      {props.page == "sponsors" && <Sponsors />}
      {props.page == "about" && <About />}
      {props.page == "faq" && <FAQ />}
      {props.page == "register" && <Register />}
      {props.page == "modifyuser" && <ModifyProfile />}
      {props.page == "dashboard" && <Dashboard />}
      {props.page == "apply" && <HackathonApplication />}
      {props.page == "auth" && <Auth />}
      {props.page == "notfound" && (
        <ContentBox>
          <h1 className="text-center w-full text-white font-bold text-8xl mt-20">
            404
          </h1>
          <h1 className="text-center w-full text-white font-bold text-2xl mt-10">
            We're Sorry! This page could not be found.
          </h1>
          <div className="w-full flex justify-center">
            <button
              class="w-3/4 mt-10 bg-wallcolor hover:bg-wallcolordark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                window.location.pathname = "/";
              }}
            >
              Go Home
            </button>
          </div>
        </ContentBox>
      )}
    </div>
  );
}

