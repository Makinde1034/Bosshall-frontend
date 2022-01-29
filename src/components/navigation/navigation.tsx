import React from 'react';
import style from './navigation.module.scss'
import logo from '../../assets/img/logo.png'
import { useLocation } from 'react-router-dom'
import search  from '../../assets/img/Search.png'
import alarm from '../../assets/img/Notification.png'
import userImage from '../../assets/img/Avatar.png'

function Navigation() {

	const location = useLocation()
  return (
    <div>
			<nav className={style.nav}>
				<div className={style.logo__routename}>
					<img src={logo} alt="logo" />
					<span>|</span>
					<p>{location.pathname.split("/")}</p>
				</div>
				<div className={style.ul__wrap}>
					<ul className={style.ul1}>
						<li>Home</li>
						<li>Profile</li>
						<li>My channels</li>
						<li></li>
					</ul>	
					<ul className={style.ul2}>
						<li>
							<img src={search} alt="" />
						</li>
						<li className={style.center}>
							<img src={alarm} alt="" />
						</li>
						<li>
							<img className={style.userImage} src={userImage} alt="" />
						</li>
					</ul>
				</div>
				
			</nav>
    </div>
  )
}

export default Navigation;
