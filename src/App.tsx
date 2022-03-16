import React,{useState,Suspense} from 'react';
import {useRoutes, Navigate} from 'react-router-dom'
import Register from './views/register/register';
import { isAuthenticated } from './helpers/authentication';
import UserChannel from './views/userChannels/userChannels';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector, useAppDispatch } from './store/hooks';




const ProfileSetup  = React.lazy(()=>import("./views/profileSetup/profileSetup"))
const Dashboard  = React.lazy(()=>import("./views/dashboard/dashboard"))
const Channel = React.lazy(()=>import("./views/channel/channel"))
const CreateChannel = React.lazy(()=>import("./views/createChannel/createChannel"))
const SingleChannel = React.lazy(()=>import("./views/singleChannel/singleChannel"))
const MyChannel = React.lazy(()=>import("./views/userChannels/userChannels"))
const Home = React.lazy(()=>import("./views/home/home"))
const Video = React.lazy(()=>import("./views/video/video"))
const SearchPage = React.lazy(()=>import("./views/searchPage"))
const Notifications = React.lazy(()=>import("./views/notifications/notifications"))

function App() {

  
  const isAuth = useAppSelector((state)=>state.authReducer.isAuth)
  

  const routes = (isAuth:boolean) => [  
    {
      path : "*",
      element : <Register />
    },

    {
      path : "dashboard",
      element : <Dashboard />  ,
      children: [
        {
          path : "",
          element :  <Home />
        },
        {
          path : "search",
          element : <SearchPage />
        },
        { 
          path: 'profile-setup', 
          element: isAuth  ? <ProfileSetup /> : <Navigate to="/" /> 
        
        },

        {
          path : "channel",
          element : isAuth ? <Channel /> : <Navigate to="/" /> ,
          
        },

        {
          path : "create-channel",
          element : isAuth ? <CreateChannel /> : <Navigate to="/" /> ,
          
        },
        {
          path : "single-channel/:id",
          element : isAuth ? <SingleChannel /> : <Navigate to="/" />
        },
        {
          path : "my-channel/:id",
          element : isAuth ? <UserChannel /> : <Navigate to="/" />
        },
        {
          path : "video/:id",
          element :  <Video /> 
        },
        {
          path : "notifications",
          element : isAuth ?   <Notifications /> : <Navigate to="/" />
        }
      ]
    },
   
    
  ]

  function Route(){
    const routing = useRoutes(routes(isAuth))

    return routing
  }

 

  return (
    <div className="App">
      <Suspense fallback={<p>Loading</p>}>
        <Route />
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
