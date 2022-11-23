import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Logo from "../assets/logo.png";
import RegisterButton from "../components/RegisterButton/RegisterButton";
import Stats from "../components/Stats/Stats";

export default function Home() {
  return (
    <div className="h-screen bg-store-background bg-cover bg-center bg-fixed">
      <div className="flex justify-center w-full">
        <img src={Logo} className="h-20 mt-2" />
      </div>
      <div className="flex mt-52 justify-end w-full">
        <RegisterButton />
      </div>
      <div className="flex mt-0 justify-end w-full pr-64">
        <Stats />
      </div>
    </div>
  );
}

