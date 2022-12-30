import React from "react";
import insta from "../../assets/logo-instagram.svg";
import twitter from "../../assets/logo-twitter_3.svg";
import discord from "../../assets/logo-discord.svg";
import facebook from "../../assets/logo-facebook_1.svg";

import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContentBox(props) {
  return (
    <div className="bg-zinc-700 opacity-90 h-5/6 w-2/3 object-center mx-auto self-center rounded-3xl p-10">
      {/*rounded box*/}
      <div>
        {/* logo*/}
        <img></img>
      </div>
      <div className="overflow-y-auto h-5/6">
        {/* text box*/}
        {props.children}
      </div>
      <div className="flex flex-row justify-center pt-12 ">
        {/* footer social icons*/}
        <div className="px-6">
          <button>
            <FaInstagram color="white" size={"40px"} />
          </button>
        </div>
        <div className="px-6">
          <button>
            <FaTwitter color="white" size={"40px"} />
          </button>
        </div>
        <div className="px-6">
          <button>
            <FaFacebook color="white" size={"40px"} />
          </button>
        </div>
        <div className="px-6">
          <button>
            <FaDiscord color="white" size={"40px"} />
          </button>
        </div>
      </div>
    </div>
  );
}

