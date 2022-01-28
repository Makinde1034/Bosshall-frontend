import React,{useState,Suspense} from 'react';
import {useRoutes} from 'react-router-dom'
import SignUp from './views/register/register';



const ProfileSetup  = React.lazy(()=>import("./views/profileSetup/profileSetup"))

function App() {

  const routes = () => [  
    {
      path : "*",
      element : <SignUp />
    },
    {
      path : "/profile",
      element : <ProfileSetup />
    }
  ]

  function Route(){
    const routing = useRoutes(routes())

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
