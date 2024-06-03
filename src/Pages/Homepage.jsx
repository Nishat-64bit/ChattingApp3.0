import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import EmailVerified from "../Component/HomeComponent/EmailVerified";
import HomeLeft from "../Component/HomeComponent/HomeLeft/HomeLeft";
import HomeRight from "../Component/HomeComponent/HomeLeft/HomeRight/HomeRight";
const Homepage = () => {
  // ? use state hook //
  // const [isEmailVerified, setisEmailVerified] = useState("");
  // const [displayName, setdisplayName] = useState("");
  // const [Email, setEmail] = useState("");
  // ? use state hook //

  //* alternative Best Option
  // ? use Nesting State Hook //
  const [userInfo, setuserInfo] = useState({
    Emailverified: false,
    displayName: "",
    Email: "",
  });
  // ? use Nesting State Hook //

  // ? firebase hook
  const auth = getAuth();

  // ? reload hoaar aagei check korbe sob thik info user thik  dise kina ==>
  // *======================== useeffect Hook : reload er age sob check start  ========================//
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setuserInfo({
        ...userInfo,
        Emailverified: user.emailVerified,
        displayName: user.displayName,
        Email: user.email,
      });
      // setisEmailVerified(user.emailVerified);
      // setdisplayName(user.displayName);
      // setEmail(user.email);
    });
  }, [userInfo.Emailverified]);
  // *======================== useeffect Hook : reload er age sob check start  ========================//
  return (
    <div>
      {userInfo.Emailverified ? (
        <div className="flex py-4 px-4 ">
          <HomeLeft active ={"home"}/>
          <HomeRight />
        </div>
      ) : (
        <EmailVerified
          email={userInfo.Email}
          displayName={userInfo.displayName}
        />
      )}
    </div>
  );
};
//
export default Homepage;
