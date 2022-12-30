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
      <div className="flex w-full justify-center sm:justify-end sm:-ml-48 mt-32">
        <RegisterButton />
      </div>
      <div className="flex w-full justify-center sm:justify-end mt-12 sm:-ml-48">
        <Stats />
      </div>
      <div className="flex justify-center w-full"></div>
    </div>
  );
}

