import React, { useState } from "react";
import RegistrationImg from "../../assets/regestration.png";
import { ToastContainer, toast,Bounce } from 'react-toastify';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import InputItem from "../../CommonComponet/InputItem";
import { FaEye } from "react-icons/fa";

import { FaEyeSlash } from "react-icons/fa";

const Registration = () => {
  //? ============ firebase useState start ================//
  const auth = getAuth();
  //? ============ firebase useState end ================//

  //? ============ useState start ================//
  const [Email, setEmail] = useState("");
  // console.log(Email);
  const [FullName, setFullName] = useState("");
  //console.log(FullName);
  const [Password, setPassword] = useState("");
  //console.log(Password);
  const [Eye, setEye] = useState(false);
  
  const [loading,setloading] = useState(false)

  //? ============ useState End ================//
  //? ============ Error useState End ================//
  const [EmailError, setEmailError] = useState("");
  const [FullNameError, setFullNameError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  //? ============ Error useState Start ================//

  // ============ handleEmail functionality start ================//
  // const handleEmail = (event)=>{
  //     setEmail(event.target.value)
  // }
  // ============ handleEmail functionality End ================//

  // ============ handleFullname functionality start ================//
  // const handleFullName = (event)=>{
  // setFullName(event.target.value)
  // }
  // ============ handleFullname functionality End ================//

  // ============ handlePassword functionality start ================//
  // const handlePassword =(event)=>{
  //     setPassword(event.target.value)
  // }

  // ============ handlePassword functionality End ================//
  //* ============ handleEye functionality Start ================//
  const handleEye = () => {
    setEye(!Eye);
  };
  //* ============ handleEye functionality End ================//
  //* ============ Email regex functionality End ================//
  const EmailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$/;
 // const mail="nishatmahmudur89@gmail.com"
  //console.log(EmailRegex.test(mail));
  //* ============ Email regex functionality End ================//

  //* ============ Password regex functionality End ================//
  const PasswordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.\-+*/])[A-Za-z\d@$!%*?&.\-+*/]{8,}$/;
  //const word = "SoftwareEngineer75@.com";
  //console.log(PasswordRegex.test(word));
  //* ============ Password regex functionality End ================//

  //* ============ handleSignUpBtn functionality Start ================//
  const handleSignUP = () => {
    if (!Email) {
      setEmailError("Email Credential Missing Or Wrong ⚠️");
    } else if (!EmailRegex.test(Email)) {
      setEmailError("Email Credential Missing Or Wrong ⚠️");
    } else if (!FullName) {
      setEmailError("");
      setFullNameError("FullName Credential Missing Or Wrong ⚠️");
    } else if (!Password) {
      setEmailError("");
      setFullNameError("");
      setPasswordError("Password Credential Missing Or Wrong ⚠️");
    }else if (!PasswordRegex.test(Password)){
      setPasswordError("Password Credential Missing Or Wrong ⚠️")
    } else {
      setloading(true)
      setEmail('')
      setFullName('')
      setPassword('')
      setEmailError("");
      setFullNameError("");
      setPasswordError("");
      //console.log("everything is oke");
    }
  };
  //console.log(EmailError,FullNameError,PasswordError);
  //* ============ handleSignUpBtn functionality Start ================//

  //?============ After Succesful SignUp New user data to firebase functionality Start================//
  createUserWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) => {
      console.log(userCredential);
      sendEmailVerification(auth.currentUser).then(() => {
        // use tostify to send alert when mail sent // start
        toast.success('Email Verification Mail sent', {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
          // use tostify to send alert when mail sent // end
        console.log("verification mail sent");
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setloading(false);
    });

  //? ============ After Succesful SignUp New user data to firebase functionality End ================//

  //! ============ prevent Reload ================//
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  //! ============ prevent Reload ================//

  return (
    <>
    <ToastContainer />
      <div className="flex justify-between items-center">
        <div className="w-1/2  h-fullvh flex justify-center items-center">
          <div>
            <h1 className="font-Nunito text-4xl text-dark-blue font-bold mb-3 pt-10">
              Get started with easily register
            </h1>
            <p className="font-Nunito text-xl text-black font-normal opacity-50 pb-5">
              Free register and you can enjoy it
            </p>
            <form onSubmit={handleSubmit}>
              {/* Email start */}
              <div className="my-3">
                <label
                  htmlFor="Email"
                  className="font-Nunito text-[13px] text-dark-blue font-semibold opacity-70 "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  value={Email}
                  placeholder="Ladushing691@gmail.com"
                  className=" font-Nunito text-xl text-dark-blue font-normal py-4 rounded-lg border-2 border-dark-blue opacity-30 w-full px-5"
                  autoComplete="off"
                  // ============ handleEmail functionality start ================//
                  onChange={(event) => setEmail(event.target.value)}
                  // ============ handleEmail functionality End ================//
                />
                {/* EmailError Start & its functionality start */}

                {EmailError && (
                  <div>
                    <span className="font-Nunito text-sm text-red-600 font-normal">
                      {EmailError}
                    </span>
                  </div>
                )}
                {/* EmailError Start & its functionality start */}

                {/* Email End */}
              </div>

              {/* NameInput start */}
              <div className="my-3">
                <label
                  htmlFor="FullName"
                  className="font-Nunito text-[13px] text-dark-blue font-semibold opacity-70"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="FullName"
                  id="FullName"
                  value={FullName}
                  placeholder="Ladushing GTG"
                  className=" font-Nunito text-xl text-dark-blue font-normal py-4 rounded-lg border-2 border-dark-blue opacity-30 w-full px-5"
                  autoComplete="off"
                  // ============ handleName functionality start ================//
                  onChange={(event) => setFullName(event.target.value)}
                  // ============ handleName functionality End ================//
                />

                {/* NameError Start & its functionality start */}

                {FullNameError && (
                  <div>
                    <span className="font-Nunito text-sm text-red-600 font-normal">
                      {FullNameError}
                    </span>
                  </div>
                )}
                {/* NameError Start & its functionality start */}

                {/* NameInput End */}
              </div>

              {/* PasswordInput start */}
              <div className="my-3 relative">
                <label
                  htmlFor="Password"
                  className="font-Nunito text-[13px] text-dark-blue font-semibold opacity-70"
                >
                  Password
                </label>
                <input
                  type={Eye ? "text" : "password"}
                  name="Password"
                  id="Password"
                  value={Password}
                  placeholder="123@asdfg"
                  className=" font-Nunito text-xl text-dark-blue font-normal py-4 rounded-lg border-2 border-dark-blue opacity-30 w-full px-5"
                  autoComplete="off"
                  // ============ handlePassword functionality start ================//
                  onChange={(event) => setPassword(event.target.value)}
                  // ============ handlePassword functionality End ================//
                />
                {/* Eye button start */}
                <div
                  className="absolute top-[54%] right-[3%] text-dark-blue opacity-30 cursor-pointer"
                  onClick={handleEye}
                >
                  {Eye ? <FaEye /> : <FaEyeSlash />}
                </div>
                {/* Eye button start */}

                {/* PasswordError Start & its functionality start */}

                {PasswordError && (
                  <div>
                    <span className="font-Nunito text-sm text-red-600 font-normal">
                      {PasswordError}
                    </span>
                  </div>
                )}
                {/* PasswordError Start & its functionality start */}
              </div>
              {/* PasswordInput End */}

              {/* button start */}
              <button
                type="submit"
                className="font-Nunito text-xl bg-[#5F35F5] rounded-[86px] text-white font-normal py-5 w-full mt-7 mb-5 relative"
                onClick={handleSignUP}
              >
               {loading && (
                 <div>
                 <div class="loader absolute top-[34%] left-[34%]"></div>
                 <div class="loader absolute  top-[34%] right-[34%]"></div>
                 </div>
               )}
                Sign up
              </button>
              
              {/* button end */}
            </form>

            {/* log in / sign up  */}
            <h4 className="text-center font-OpenSans text-sm text-[#03014C] font-normal ">
              {" "}
              Already have an account?
              <span className="text-[#EA6C00] cursor-pointer ml-1 hover:underline hover:decoration-[#ea6d00bb]">
                Sign in
              </span>
            </h4>
            {/* log in / sign up  */}
          </div>
        </div>
        <div className="w-1/2  h-fullvh">
          <img
            src={RegistrationImg}
            alt={RegistrationImg}
            className="h-screen min-w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Registration;
