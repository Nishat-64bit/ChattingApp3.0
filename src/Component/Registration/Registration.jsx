import React, { useState } from "react";
import RegistrationImg from "../../assets/regestration.png";
import InputItem from "../../CommonComponet/InputItem";

const Registration = () => {
    // ============ useState start ================//
    const [Email,setEmail] = useState('')
   // console.log(Email);
   const [FullName,setFullName] = useState('')
   //console.log(FullName);
   const [Password,setPassword] = useState('')
   //console.log(Password);
    // ============ useState End ================//

    // ============ handleEmail functionality start ================//
    const handleEmail = (event)=>{
        setEmail(event.target.value)
    }
    // ============ handleEmail functionality End ================//

    // ============ handleFullname functionality start ================//
        const handleFullName = (event)=>{
            setFullName(event.target.value)
        }
    // ============ handleFullname functionality End ================//

        // ============ handlePassword functionality start ================//
        const handlePassword =(event)=>{
            setPassword(event.target.value)
        }
    
    // ============ handlePassword functionality End ================//

    // ============ prevent Reload ================//
    const handleSubmit = (event)=>{
        event.preventDefault()
    }
    // ============ prevent Reload ================//

  return (
    <>
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
                <label htmlFor="Email" className="font-Nunito text-[13px] text-dark-blue font-semibold opacity-70 ">Email Address</label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="Ladushing691@gmail.com"
                  className=" font-Nunito text-xl text-dark-blue font-normal py-4 rounded-lg border-2 border-dark-blue opacity-30 w-full px-5"
                  autoComplete="off"
                  onChange={handleEmail}
                />
              </div>
               {/* Email End */}

              {/* NameInput start */}
              <div className="my-3">
                <label htmlFor="FullName" className="font-Nunito text-[13px] text-dark-blue font-semibold opacity-70">Full Name</label>
                <input
                  type="text"
                  name="FullName"
                  id="FullName"
                  placeholder="Ladushing GTG"
                  className=" font-Nunito text-xl text-dark-blue font-normal py-4 rounded-lg border-2 border-dark-blue opacity-30 w-full px-5"
                  autoComplete="off"
                  onChange={handleFullName}
                />
              </div>
              {/* NameInput End */}

              {/* PasswordInput start */}
              <div className="my-3">
                <label htmlFor="Password" className="font-Nunito text-[13px] text-dark-blue font-semibold opacity-70">Password</label>
                <input
                  type="password"
                  name="Password"
                  id="Password"
                  placeholder="123@asdfg"
                  className=" font-Nunito text-xl text-dark-blue font-normal py-4 rounded-lg border-2 border-dark-blue opacity-30 w-full px-5"
                  autoComplete="off"
                  onChange={handlePassword}
                />
              </div>
              {/* PasswordInput End */}

              {/* button start */}
              <button type="submit" className="font-Nunito text-xl bg-[#5F35F5] rounded-[86px] text-white font-normal py-5 w-full mt-12 mb-5">Sign up</button>
               {/* button end */}

            </form>
            
            {/* sign in Start */}
            <h4 className="text-center font-OpenSans text-sm text-[#03014C] font-normal "> Already have an account?<span className="text-[#EA6C00] cursor-pointer ml-1 hover:underline hover:decoration-[#ea6d00bb]">Sign in</span></h4>
            {/* sign in End */}
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
