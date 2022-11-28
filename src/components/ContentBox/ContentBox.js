import React from "react";
import insta from "../../assets/logo-instagram.svg";
<<<<<<< HEAD
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

=======
import twitter from '../../assets/logo-twitter_3.svg';
import discord from '../../assets/logo-discord.svg';
import facebook from '../../assets/logo-facebook_1.svg';

export default function ContentBox(props) {
  return (
  <div className="bg-white h-5/6 w-1/2 object-center mx-auto self-center rounded-[36px] p-10">{/*rounded box*/}
    <div>{/* logo*/}
        <img></img>
    </div>
    <div className="overflow-y-auto h-5/6">{/* text box*/}
    {props.children}
    </div>
    <div className='flex flex-row justify-center pt-20 pt-3'>{/* footer social icons*/} 
        <div className="px-6">
          <button><img src={insta} className='h-12 w-12 flex-initial'></img></button>
        </div>
        <div className="px-6">
          <button><img src={twitter} className='h-12 w-12 flex-initial'></img></button>
        </div>
        <div className="px-6">
          <button><img src={facebook} className='h-12 w-12 flex-initial'></img></button>
        </div>
        <div className="px-6">
          <button><img src={discord} className='h-12 w-12 flex-initial'></img></button>
        </div>
    </div>
  </div>
  );
}
>>>>>>> c99d03cbaa96b58af6d07bcb1d3d6d7cd92fcdf7
