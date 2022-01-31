import React,{useState,Suspense} from 'react';
import {useRoutes, Navigate} from 'react-router-dom'
import Register from './views/register/register';
import { isAuthenticated } from './helpers/authentication';




const ProfileSetup  = React.lazy(()=>import("./views/profileSetup/profileSetup"))
const Dashboard  = React.lazy(()=>import("./views/dashboard/dashboard"))
const Channel = React.lazy(()=>import("./views/channel/channel"))
const CreateChannel = React.lazy(()=>import("./views/createChannel/createChannel"))

function App() {

  
  const isLoggedIn = true

  const routes = (isAuth:boolean) => [  
    {
      path : "*",
      element : <Register />
    },
    {
      path : "dashboard",
      element : isAuth ? <Dashboard /> : <Navigate to="/" /> ,
      children: [
        { path: '', element: <ProfileSetup /> },
        {
          path : "channel",
          element : isAuth ? <Channel /> : <Navigate to="/" /> ,
          
        },
        {
          path : "create-channel",
          element : isAuth ? <CreateChannel /> : <Navigate to="/" /> ,
          
        },
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
