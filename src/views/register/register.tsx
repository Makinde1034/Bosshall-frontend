import React from 'react';
import style from './register.module.scss'
import LandingLeft from '../../components/landingLeft/landingLeft';
import SignUp from '../signUp/signUp'
import SignIn from '../signIn/signIn';
import { Routes,Route,Link } from 'react-router-dom'


function Register() {
  return (
    <div>
			<div className={style.register}>
        <div className={style.register__left}>
          <LandingLeft />
        </div>
        <div className={style.register__right}>
          <nav className={style.register__right__nav}>
            <Link to={"/"}>
              <button className={style.button1}>Sign up</button>
            </Link>
            <Link to={"/signin"}>
              <button className={style.button2}>Sign in</button>
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="*" element={<SignIn />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Register;
