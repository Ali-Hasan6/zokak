import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

function App() {
  return <div>
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="  flex flex-col justify-center items-center w-[80%] md:w-[50%] h-[50%] bg-[#D3D0C3]/90 rounded-md  shadow-lg shadow-black outline-none ring-1 ring-slate-50 ">

        <div className=" flex flex-col justify-center items-center space-y-9">
          {/* Phone */}
          <div className=" flex relative right-1" >
            <a className="flex relative right-4 justify-center items-center space-x-3" href="tel:07510508670">
              <BsFillTelephoneFill className=" block" size={30} />
            </a>
            <p className=" text-lg font-medium">Phone</p>
          </div>

          {/* Insta */}
          <div >
            <a className="flex  justify-center items-center space-x-3"
              href="https://instagram.com/zuqaq.91?igshid=MzRlODBiNWFlZA==">
              <BsInstagram size={30} />
              <p className=" text-lg font-medium">Instagram</p>
            </a>

          </div>

          {/* Face */}
          <div className="flex justify-center items-center space-x-3" >
            <a className="flex justify-center items-center space-x-3" href="#">
              <BsFacebook size={30} />
            </a>
            <p className=" text-lg font-medium">Facebook</p>
          </div>
        </div>

      </div>
    </div>
  </div>;
}

export default App;

/*


 <div> 
          <a className="  hover:cursor-pointer hover:scale-105 duration-200  hover:text-[#f7b05e] hover:font-medium bg-black/20 " href="tel:07510508670">
          <p className=" px-4 py-1 ">📞 : 07510508670</p>
        </a>
        </div>

        <div>
        
        <a className=" " href="https://instagram.com/zuqaq.91?igshid=MzRlODBiNWFlZA==">
        <BsInstagram size={30} />
          </a>
        </div>
        <div></div>
        <div></div>
        <div></div>


       
      </div>*/ 