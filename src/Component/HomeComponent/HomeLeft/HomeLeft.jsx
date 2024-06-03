import React from "react";
import Profile from "../../../assets/HOmeLeft/profile.png";
import home from "../../../assets/HOmeLeft/home.gif";
import message from "../../../assets/HOmeLeft/message.gif";
import logout from '../../../assets/HOmeLeft/logout.gif'
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

const HomeLeft = ({active}) => {
  return (
    <div>
      <div className="bg-[#5F35F5] h-[95vh] px-7  py-[23px] ">
        <picture>
          <img src={Profile} alt={Profile} />
        </picture>

        <div className="mt-7">
          <ul className="flex flex-col justify-center items-center gap-y-10">

            <li className={active === "home"?" custom-border cursor-pointer bg-white w-[143%] flex justify-center items-center py-3 ml-3 rounded-l-lg":"cursor-pointer"}>
              <img src={home} alt={home} className="w-[50px] h-[50px] cursor-pointer" />
            </li>
            <li>
              <img src={message} alt={message} className="w-[50px] h-[50px] cursor-pointer " />
            </li>
            <li>
           <div className="relative cursor-pointer">
           <div>
                <IoNotificationsOutline className="w-[45px] h-[45px] text-orange-400 " />
              </div>

              <div className="absolute right-[19%] top-[0%]">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
              </div>

           </div>

             
            </li>
            <li>
              <IoSettingsOutline className="animate-spin w-[45px] h-[45px] cursor-pointer text-orange-400 " />
            </li>
            <li>
              <img src={logout} alt={logout} className="w-[54px] h-[54px] mt-5 cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
