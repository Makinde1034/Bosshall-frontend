import React from 'react';
import style from './landingLeft.module.scss'
import logo from '../../assets/img/logo.png'

function LandingLeft() {
  return (
		<div className={style.left}>
			<nav className={style.left__nav}>
				<img src={logo} alt="" />
			</nav>
			<div className={style.left__text}>
				<h3>With Bosshalls <br /> comes greater <br /> media experience</h3>
				<p>Bosshalls allows radio presenters to display videos/pictures that represent the message of their entertainment, sports review shows during broadcast.</p>
			</div>
		</div>
		
	)
}

export default LandingLeft;
