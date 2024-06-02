import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const LoginLeft = () => {
  //* ============= useState Hook Start ================//
  //? firebase hook //
  const auth = getAuth();
  
  // ? eye state //
  const [eye, seteye] = useState(false);

  //? nesting state for all input //
  const [inputValue, setinputValue] = useState({
    Email: "",
    Password: "",
  });
  //? loading state //
  const [loading,setloading] = useState(false)

  //* ============= useState Hook End ================//

  //* ============= Error useState Hook End ================//
  const [Error, setError] = useState({
    EmailError: "",
    PasswordError: "",
  });
  //* ============= Error useState Hook End ================//

  //? ============ Email regex functionality start ================//
  const EmailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$/;
  //? ============ Email regex functionality End ================//

  //? ============ Password regex functionality start ================//
  const PasswordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.\-+*/])[A-Za-z\d@$!%*?&.\-+*/]{8,}$/;
  //? ============ Password regex functionality End ================//

  //? ============= Handle Eye functionality Start ================//
  const handleEye = () => {
    seteye(!eye);
  };
  //? ============= Handle Eye functionality End ================//

  //? ============= HandleInputField  functionality Start ================//
  const HandleInputField = (event) => {
    setinputValue({
      ...inputValue,
      [event.target.id]: event.target.value, // ja input e lekba ta tar value
      //[Password] : nishat745
    });
    //console.log(event.target.id); //1st e aage aeta korba then setinput value dea start korba
  };
  //? ============= HandleInputField functionality End ================///
   //* ============// user input dibe // functionality Start ================//
  
  const handleLogIn = () => {
    if (!inputValue.Email) {
      setError({
        ...Error,
        EmailError : "Email Credential Missing Or Wrong ⚠️"
      });
    }else if (!EmailRegex.test(inputValue.Email)){
      setError({
        ...Error,
        EmailError : "Email Credential Missing Or Wrong ⚠️'"
      });
    }else if (!inputValue.Password){
      setError({
        ...Error,
        PasswordError : "Password Credential Missing Or Wrong ⚠️"
      });
    }else if (!PasswordRegex.test(inputValue.Password)){
      setError({
        ...Error,
        PasswordError : "Password Credential Missing Or Wrong ⚠️'"
      });
    }else{
      setloading(true)
      setinputValue({
        Email: "",
        Password: "",
      })
      setError({
        EmailError: "",
        PasswordError: "",
      })
      //console.log("everything is oke");
      //?======= User jodi registration kora mail and pass dei then seta jabe firebase e start ========//
      signInWithEmailAndPassword(auth,inputValue.Email,inputValue.Password).then((userinfo)=>{
        console.log(userinfo);
      }).catch((error)=>{
        console.log(error.message);
      }).finally(()=>{
        setloading(false)
      })
     //?======= User jodi registration kora mail and pass dei then seta jabe firebase e start ========//
  
    }
    
  };
  //* ============// user input dibe // functionality End ================//
  

  //?======= User suceesfully input field jodi fill up kore then firebase functionality Start========//

  //? ============= prevent Reload functionality Start ================//
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  //? ============= prevent Reload functionality End ================//

  return (
    <div className=" flex justify-center items-center h-[100vh] w-[55%] py-3">
      <div className=" w-[75%]">
        <h1 className=" font-OpenSans text-[#03014C] font-bold text-[33px] mb-5">
          Login to your account!
        </h1>

        {/* google layout start */}
        <div className="flex justify-center items-center w-[200px] gap-2 py-4 border-2 border-[rgba(3,1,76,0.3)] rounded-lg mb-8">
          <span className=" text-xl">
            <FcGoogle />
          </span>
          <p className="font-OpenSans text-[#03014C] font-semibold text-sm tracking-wide">
            Login with Google
          </p>
        </div>
        {/* google layout End */}

        {/* form field start */}
        <form onSubmit={handleSubmit}>
          {/* Email start */}
          <div className="">
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
              value={inputValue.Email}
              placeholder="Ladushing691@gmail.com"
              className=" font-Nunito text-xl text-dark-blue font-normal py-4  border-b-2 border-dark-blue opacity-30 w-full "
              autoComplete="off"
              // ============ handleEmail functionality start ================//
              onChange={HandleInputField}
              // ============ handleEmail functionality End ================//

              
            />
            {/* EmailError Start & its functionality start */} 
            {Error.EmailError && ( // object er key dorte objectname.key bolte hoi
              <div>
              <span className="font-Nunito text-sm text-red-600 font-normal">
                {Error.EmailError}
              </span>
            </div>
            )}
            {/* EmailError Start & its functionality start */}

            {/* Email End */}
          </div>

          {/* PasswordInput start */}
          <div className="mt-12 relative">
            <label
              htmlFor="Password"
              className="font-Nunito text-[13px] text-dark-blue font-semibold opacity-70"
            >
              Password
            </label>
            <input
              type={eye ? "text" : "password"}
              name="Password"
              id="Password"
              value={inputValue.Password}
              placeholder="123@asdfg"
              className=" font-Nunito text-xl text-dark-blue font-normal py-4  border-b-2 border-dark-blue opacity-30 w-full"
              autoComplete="off"
              // ============ handlePassword functionality start ================//
              onChange={HandleInputField}
              // ============ handlePassword functionality End ================//
              
            />

            {/* Eye button start */}
            <div
              className="absolute top-[54%] right-[3%] text-dark-blue opacity-30 cursor-pointer"
              onClick={handleEye}
            >
              {eye ? <FaEye /> : <FaEyeSlash />}
            </div>
            {/* Eye button End */}

          </div>
          {/* PasswordError functionality start */}
          {Error.PasswordError && (
              <div>
              <span className="font-Nunito text-sm text-red-600 font-normal">
                {Error.PasswordError}
              </span>
            </div>
            )}
            {/* PasswordError Start & its functionality start */}
          {/* PasswordInput End */}

          {/* button start */}
          <button
            type="submit"
            className="font-Nunito text-xl bg-[#5F35F5] rounded-lg text-white font-normal py-4 w-full mt-7 mb-4 relative"
            onClick={handleLogIn}
            // onClick={handleRegestration}
          >
            {/* loading start */}
          {loading && (
             <div>
             <div class="loader absolute top-[28%] left-[17%]"></div>
             <div class="loader absolute  top-[28%] right-[17%]"></div>
             </div>
          )}
          {/* loading end */}

            Login to Continue
          </button>

          {/* button end */}
        </form>

        {/* log in / sign up  */}
        <h4 className="text-start font-OpenSans text-sm text-[#03014C] font-normal ml-3">
          {" "}
          Don’t have an account ?
          <span className="text-[#EA6C00] cursor-pointer ml-1 hover:underline hover:decoration-[#ea6d00bb]">
            <Link to={"/"}>Sign up</Link>
          </span>
        </h4>
        {/* log in / sign up  */}
        {/* form field End */}
      </div>
    </div>
  );
};

export default LoginLeft;
