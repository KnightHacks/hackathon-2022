import React from "react";
import "./RegisterButton.css";

export default function RegisterButton() {
  return (
    <div>
      <a href="https://knighthacks.org">
        <div class="flex justify-center flex-col bg-black w-96 h-48 border-8 border-yellow-200 border-solid top-2/4 left-2/4 font-medium tracking-widest cursor-pointer neon-container flicker-slower">
          <h1 class="text-4xl text-center text-white neon" data-text="U">
            <span class="flicker-fast">R</span>EG
            <span class="flicker-slow">I</span>S
            <span class="flicker-fast">T</span>ER
            <br />N<span class="flicker-slow">O</span>
            <span class="flicker-fast">W</span>
          </h1>
        </div>
      </a>
    </div>
  );
}

