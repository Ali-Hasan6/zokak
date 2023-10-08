import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";

import backImage from "../src/assets/backgoundDark.webp";

function App() {
  return <div>
    <div className=" w-screen h-screen flex justify-center items-center relative">
      <img src={backImage} className=" absolute -z-10 top-0 h-screen object-cover  " alt="" />
      {/* Content Container */}
      <div className="  bg-opacity-30  flex flex-col justify-center items-center w-[80%] md:w-[50%] h-[50%] bg-gray-400 rounded-md  shadow-xl shadow-black/50 outline-none ring-2 ring-slate-500 animate-flip-down animate-ease-in-out ">

        <div className=" flex flex-col justify-center items-center space-y-9">
          {/* Phone */}
          <div className=" text-white flex relative right-5 hover:scale-105 duration-150 hover:text-teal-300" >
            {/* You have to add the country serial number for whatsapp */}
            <a className="flex justify-center items-center space-x-3" href="https://wa.me/+9647510508670">
              <BsWhatsapp className=" block" size={30} />
              <p className=" text-2xl font-medium">Whatsapp</p>
            </a>
          </div>

          {/* Instagram */}
          <div >
            <a className="flex text-white  justify-center items-center space-x-3 hover:scale-105 duration-150 hover:text-teal-300"
              href="https://instagram.com/zuqaq.91?igshid=MzRlODBiNWFlZA==">
              <BsInstagram size={30} />
              <p className=" text-2xl font-medium">Instagram</p>
            </a>

          </div>

          {/* Face */}
          <div className=" text-white flex justify-center items-center space-x-3 hover:text-teal-300 cursor-pointer hover:scale-105 duration-150" >
            <a className="flex justify-center items-center space-x-3" href="https://www.facebook.com/people/%D8%B2%D9%82%D8%A7%D9%82-%D9%A9%D9%A1/61552121961818/?mibextid=LQQJ4d">
              <BsFacebook size={30} />
              <p className=" text-2xl font-medium">Facebook</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>;
}

export default App;