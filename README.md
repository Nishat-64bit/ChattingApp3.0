

# 🚀🚀 Chatting App 3.0 🚀🚀
# React + vite + TailwindCss + FireBase


Hello viewers, This is Actually a ChattingApp based on React,Tailwaind,FireBase.
in this project I have learned many things

- useState Hook
- Tailwaind Css 
- FireBase
- handle event funtionality nesting onchange
- handle eye funtionality
- handle signup funtionality - 1.empty signup prevent 2.Error show on browser (span) 3.1ta input er error solve hole next input e gele 1st error chole jabe And Next ==>

- form validation with 1.Email regex (kew jate invaid email na dite pare) 
- very Important email regex // const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$/; // copy it 
                    //  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;// alernative

- form validation with 2.password (kew jate weak password na dei )  
- very important password ==>
- regex  = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.\-+*/])[A-Za-z\d@$!%*?&.\-+*/]{8,}$/  copy  
- install firebase in terminal
- make folder databaseconfiguration ==> FirebaseConnect.js
- paste sdk firebaseconnect.js
- import main.jsx app
- log firebase 
- go to firbase doc ==> build
- sign up for new user => import registration
- copy firebase hook 
- make signup for new user. copy from firebase
- then make a successful sign up inspect chrom
- loader layout and functionality
- after successful signup delete data from state and input field
- sent verification mail using firebase
- use tostify to show that the verification mail link is sent 
- use a function when use successfully input all field and successfully this data goes to firebase use all things in a function when sign up or regestration btn click it.
- make a pages folder under src and make file name regestrationPages then import the component named regestration . so now the main pages is regestrationpages , now import it to the app.jsx and remove the older one named regestration component . 

- oke now we make login page , so make login folder under component and make file login.jsx and import it to the login page and import login page to the app.jsx file 
- so now we have multiple pages , so how should we navigate them ==> React Router Dom ==> next class
- first install npm of react router dom 
- then configure react router dom frm react router dom utilities ==> createRouteFromElements
- make layout of login page 
- make eyebtn functionality
- make useState Nesting format for all input like email,password,fullname
- industry level e kaj hoi erokom e ekta state dorba . function niba . event nibe target korba . id nibe = value te assign koba ses. 

        const HandleInputField =(event)=>{
        setinputValue({
            ...inputValue,
            [event.target.id] : event.target.value // ja input e lekba ta tar value
            // ja dicci ta new value [Email] = "nishat@gmail.com" aeta newly set hocce set e ==> input e
            //[Password] : nishat745
        })
        }
- generic massage for password error and email error
- Email Credential Missing Or Wrong ⚠️ / Password Credential Missing Or Wrong ⚠️
- error Always baire rakba  all input div er
- next connect firebase when user sucessfully give all data 
- go to firebase signed in existing user
- local storage e id token rakbo kibabe 
- aebar google auth er kaj - div ta te onclick = {handleLoginWithGoogle}
- remember   const provider = new GoogleAuthProvider(); and google jodi firebase e enable na koren taile kintu kaj korbe na


                
                //? firebase hook //
                const auth = getAuth();

                // google hook
                const provider = new GoogleAuthProvider();
                
                // promise dia korlam google popup with sign in //
                const handleLoginWithGoogle = ()=>{
                signInWithPopup(auth, provider).then((result)=>{
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                //console.log(user,credential);
                }).catch((error)=>{
                console.log(error.message);
                })
            }
                 // async dia korlam google popup with sign in //
                 // ? optional way  :  aysnc dia kibabe korbo ?
                //   const handleLoginWithGoogle = async ()=>{
                //     try{
                //       const result = await signInWithPopup(auth, provider)
                //       const credential = GoogleAuthProvider.credentialFromResult(result);
                //       const token = credential.accessToken;
                //       const user = result.user;
                //       console.log(user,credential )
                //    }catch(error){
                //     console.log(error.message);
                //    }
                //  }

  - now create home page when user succesfully login go to home page
  - Usenavigate hook to navigate router to router (page to page) and use navigate = usenavigate()
  -but ami cie reg theke login e navigate korte 3s somoy lage aar ae somoy e tostify ta dakak
  - just navigate('/login') ke settimeout function e den aetar time 3000s , tostify autoclose : 2000 den
  - - user verify link e na click kore o home page e chole jacce ta kora jabe na 
  - jodi tar verify kora na hoi tobe take email verify korate hobe 
  - aejonno amke chole jete hobe firebase er currently signed in user e to home page asve tai na
  - useeffect() hook use korte hobe ==> [reload hoaar agger check korbe user sokol info thik babe dise kina]
  -- aejonno firebase get a user provided specific info te chole jabo ==> home page
  -- and then usestate nesting hook nite hobe sob info er jonno 
  -- and jodi emailverified hoi tahole seta true dekabe and false hole emailverified page e nea jabe
  -- oke aeta return er div er bitore pass koren 
  -- now email verified page design koren img hisebe {gif nen} and text nen : sob center e hobe main div
  -- and btn nen ==> btn e link koren gmail inbox ke react link dea and target{_blank}
  -- ekon email jodi verified na hoi tahole btn theke email e click korle inbox e nea jacce ,,
  -- ekon email verified holo, kintu email je verfied holo seta to homepage ke janate hobe
  -- mane home page jokon janbe email verified tokon se homepage e dokte dibe
  -- seta korar jonno homepage er useeffect hook er dependeci [userinfo.emailverified] chole jaba
  -- now aebar kaj holo homepage er design er

And Stay with me , Many thing will coming . This is a Big Project . 👁️ Keep Watching 👁️.
