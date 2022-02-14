import React from 'react';
import style from './navigation.module.scss'
import logo from '../../assets/img/logo.png'
import { useLocation } from 'react-router-dom'
import search  from '../../assets/img/Search.png'
import alarm from '../../assets/img/Notification.png'
import { Link } from 'react-router-dom'
// import userImage from '../../assets/img/Avatar.png'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch,useAppSelector } from '../../store/hooks'

function Navigation() {



	const id = useAppSelector((state)=>state.userSlice._id)
	const userImage = useAppSelector((state)=>state.userSlice.userImg)
	const navigate = useNavigate()
	const location = useLocation()
	

	const goToChannels = () =>{
		navigate(`/dashboard/my-channel/${id}`)
	}
	

	
  return (
    <div>
		<nav className={style.nav}>
			<div className={style.logo__routename}>  
				<img src={logo} alt="logo" />
				<span>|</span>
				<p>{location.pathname.split("/").splice(2,1)}</p>
			</div>
			<div className={style.ul__wrap}>
				<ul className={style.ul1}>
					<li>Home</li>
					<li>Profile</li>
					<li onClick={goToChannels} >My channel</li>
				</ul>	
				<ul className={style.ul2}>
					<li>
						<img src={search} alt="" />
					</li>
					<li className={style.center}>
						<img src={alarm} alt="" />
					</li>
					<li>
						<img className={style.userImage} src={userImage} alt="image" />
					</li>
				</ul>
			</div>
			
		</nav>
    </div>
  )
}

export default Navigation;
