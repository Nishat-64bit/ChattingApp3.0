import React from "react";
import EmailGif from "../../assets/email.gif";
import { Link } from "react-router-dom";
const EmailVerified = () => {
  return (
    <div className="flex justify-center items-center bg-blue-300 h-[100vh]">
      <div className=" flex flex-col justify-center items-center gap-y-5">
        <div>
          <img src={EmailGif} alt={EmailGif} className="  w-[90%] h-auto object-cover" />
        </div>
        <h2 className="font-Nunito font-bold text-4xl capitalize ">Please verify your Email</h2>
        <button className="px-14 py-3 bg-green-500  font-semibold text-base text-white rounded-md">
          <Link to={"https://mail.google.com/mail/u/0/#inbox"} target="_blank">Email</Link>
        </button>
      </div>
    </div>
  );
};

export default EmailVerified;
