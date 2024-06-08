import React from 'react'
import RegestrationPages from './Pages/RegestrationPages'
import LoginPages from './Pages/LoginPages';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage'
import NotificationPage from './Pages/NotificationPage'
import SettingPage from './Pages/SettingPage'
import EmailVerified from './Component/HomeComponent/EmailVerified';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<RegestrationPages/>}/>  {/* add to root RegestrationPages */}
    <Route path='reg' element={<RegestrationPages/>}/>
    <Route path='login' element={<LoginPages/>}/>
    <Route path='home' element={<Homepage/>}/>
    <Route path='chat' element={<Chatpage/>}/>
    <Route path='notification' element={<NotificationPage/>}/>
    <Route path='setting' element={<SettingPage/>}/>
    <Route path='email-verify' element={<EmailVerified/>}/>
    <Route path='*' element = {<h1>Error page</h1>}/>
    {/* suppose  jodi amr contact page na theke tar por navigate korle Erro page leka  dekabe  */}
    </>
  )
)


const App = () => {
  return (
    <RouterProvider router={router}> </RouterProvider>
  )
}

export default App
