import React from "react";
import Profile from "../../../assets/HOmeLeft/profile.png";
import home from "../../../assets/HOmeLeft/home.gif";
import message from "../../../assets/HOmeLeft/message.gif";
import logout from "../../../assets/HOmeLeft/logout.gif";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link,useLocation } from "react-router-dom";
const HomeLeft = () => {
  //  location hook start // 

  const location = useLocation()
  const active = location.pathname.split("/")[1]
  //console.log(location.pathname.split("/")[1]); 
  //active ta ke amra dynamic korsi just use loction hook use kore. 

  // location hook end //
  return (
    <div>
      <div className="bg-[#5F35F5] h-[96vh] px-7 py-[13px] rounded-xl">
        <picture>
          <img src={Profile} alt={Profile} />
        </picture>

        <div className="mt-7">
          {/* parent list Start */}
          <ul className="flex flex-col justify-center items-center gap-y-11">
            {/* list one  start */}
            <li
              className={
                active === "home"
                  ? " cursor-pointer bg-white w-[143%] flex justify-center items-center py-3 ml-3 rounded-l-lg relative after:absolute after:top-0 after:right-0 after:w-3 after:h-full after:bg-[#5F35F5] after:rounded-l-lg"
                  : "cursor-pointer"
              }
            >
              <Link to={"/"}>
                <img
                  src={home}
                  alt={home}
                  className="w-[40px] h-[40px] cursor-pointer"
                />
              </Link>
            </li>
            {/* list one  End */}

            {/* list Two  start */}
            <li
              className={
                active === "chat"
                  ? " cursor-pointer bg-white w-[143%] flex justify-center items-center py-3 ml-3 rounded-l-lg relative after:absolute after:top-0 after:right-0 after:w-3 after:h-full after:bg-[#5F35F5] after:rounded-l-lg"
                  : "cursor-pointer"
              }
            >
              <Link to={"/chat"}>
                <img
                  src={message}
                  alt={message}
                  className="w-[41px] h-[41px] cursor-pointer "
                />
              </Link>
            </li>
            {/* list Two  End */}

            {/* list Three  Start */}
            <li
              className={
                active === "notification"
                  ? " cursor-pointer bg-white w-[143%] flex justify-center items-center py-3 ml-3 rounded-l-lg relative after:absolute after:top-0 after:right-0 after:w-3 after:h-full after:bg-[#5F35F5] after:rounded-l-lg"
                  : "cursor-pointer"
              }
            >
              <Link to={"/notification"}>
                <div className="relative cursor-pointer">
                  <div>
                    <IoNotificationsOutline className="w-[40px] h-[40px] text-[#C0C0C0] " />
                  </div>

                  <div className="absolute right-[19%] top-[0%]">
                    <span class="relative flex h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C0C0C0] opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-[#C0C0C0]"></span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            {/* list Three  End */}

            {/* list Four  Start */}
            <li
              className={
                active === "setting"
                  ? " cursor-pointer bg-white w-[143%] flex justify-center items-center py-3 ml-3 rounded-l-lg relative after:absolute after:top-0 after:right-0 after:w-3 after:h-full after:bg-[#5F35F5] after:rounded-l-lg"
                  : "cursor-pointer"
              }
            >
              <Link to={"/setting"}>
              <IoSettingsOutline className="animate-spin w-[40px] h-[40px] cursor-pointer text-[#C0C0C0] " /></Link>
             
            </li>
            {/* list Four  End */}

            {/* list Five  Start */}
            <li
              className={
                active === "logout"
                  ? " cursor-pointer bg-white w-[143%] flex justify-center items-center  ml-3 rounded-l-lg relative after:absolute after:top-0 after:right-0 after:w-3 after:h-full after:bg-[#5F35F5] after:rounded-l-lg"
                  : "cursor-pointer"
              }
            >
              <Link to={"/logout"} >
              <img
                src={logout}
                alt={logout}
                className="w-[49px] h-[49px] mt-5 cursor-pointer"
              />
              </Link>
              
            </li>
            {/* list Five  End */}
          </ul>
          {/* parent list End */}
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
