import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import EmailVerified from '../Component/HomeComponent/EmailVerified'
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
      {userInfo.Emailverified ? <h2>email verified </h2> : <EmailVerified/>}
    </div>
  );
};
//
export default Homepage;
