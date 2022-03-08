import React,{useState,Suspense} from 'react';
import {useRoutes, Navigate} from 'react-router-dom'
import Register from './views/register/register';
import { isAuthenticated } from './helpers/authentication';
import UserChannel from './views/userChannels/userChannels';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




const ProfileSetup  = React.lazy(()=>import("./views/profileSetup/profileSetup"))
const Dashboard  = React.lazy(()=>import("./views/dashboard/dashboard"))
const Channel = React.lazy(()=>import("./views/channel/channel"))
const CreateChannel = React.lazy(()=>import("./views/createChannel/createChannel"))
const SingleChannel = React.lazy(()=>import("./views/singleChannel/singleChannel"))
const MyChannel = React.lazy(()=>import("./views/userChannels/userChannels"))
const Home = React.lazy(()=>import("./views/home/home"))
const Video = React.lazy(()=>import("./views/video/video"))

function App() {

  
  

  const routes = (isAuth:boolean) => [  
    {
      path : "*",
      element : <Register />
    },

    {
      path : "dashboard",
      element : isAuth ? <Dashboard /> : <Navigate to="/" /> ,
      children: [
        {
          path : "home",
          element : isAuth ? <Home /> : <Navigate to="/" />
        },
        { 
          path: '', 
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
          element :  isAuth ? <Video /> : <Navigate to="/" />
        }
      ]
    },
   
    
  ]

  function Route(){
    const routing = useRoutes(routes(isAuthenticated()))

    return routing
  }

 

  return (
    <div className="App">
      <Suspense fallback={<p>Loading</p>}>
        <Route />
      </Suspense>
      
    </div>
  );
}

export default App;
