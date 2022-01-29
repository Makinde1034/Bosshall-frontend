import React,{useState,Suspense} from 'react';
import {useRoutes, Navigate} from 'react-router-dom'
import Register from './views/register/register';



const ProfileSetup  = React.lazy(()=>import("./views/profileSetup/profileSetup"))
const Dashboard  = React.lazy(()=>import("./views/dashboard/dashboard"))

function App() {

  
  const isLoggedIn = true

  const routes = (test : boolean) => [  
    {
      path : "*",
      element : <Register />
    },
    {
      path : "dashboard",
      element : test ? <Dashboard /> : <Navigate to="/" /> ,
      children: [
        { path: '', element: <ProfileSetup /> },
    
      ]
    },
    
  ]

  function Route(){
    const routing = useRoutes(routes(isLoggedIn))

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
