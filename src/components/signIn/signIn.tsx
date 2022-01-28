import React from 'react';
import style from './signIn.module.scss'
import message from '../../assets/img/Vector.png'

function SignIn() {
  return (
    <div className={style.signup}>
			<h3>Welcome back !</h3>
			<form className={style.form} action="">
					<div className={style.inputWrap}>
							<input placeholder='makinde1034@gmail.com' type="text" />
							<img src={message} alt="" />
					</div>
					<div className={style.inputWrap}>
							<input placeholder='*******'  type="password" />
					</div>
					<button>Sign in</button>
			
			</form>
    </div>
  
  )
}

export default SignIn;
