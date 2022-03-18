import React,{useState} from 'react';
import style from './navigation.module.scss'
import logo from '../../assets/img/logo.png'
import { useLocation } from 'react-router-dom'
import search  from '../../assets/img/Search.png'
import alarm from '../../assets/img/Notification.png'
import menu from '../../assets/img/list (1).png'
import more from '../../assets/img/more.png'
import { Link } from 'react-router-dom'
// import userImage from '../../assets/img/Avatar.png'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch,useAppSelector } from '../../store/hooks'
import { createSearchParams } from "react-router-dom";
import videoApi from '../../api/video'
import { toggleSideNav, toggleSearchNav } from '../../store/toggle'
import { logout } from '../../store/user';





function Navigation() {


	const id = useAppSelector((state)=>state.userSlice._id)
	const userImage = useAppSelector((state)=>state.userSlice.userImg)
	const isAuth = useAppSelector((state)=>state.authReducer.isAuth)
	

	const navigate = useNavigate()
	const location = useLocation();
	const dispatch = useAppDispatch()
	

	const [ searchParam, setSearchParams ] = useState({search_query : ""});
	const [ options, setOptions ] = useState(false)

	const isDisabled = searchParam.search_query.length === 0

	const goToChannels = () =>{
		navigate(`/my-channel/${id}`)
	}

    const goToSearchPage = (e:any) => {
		e.preventDefault();

        navigate({
            pathname: "search",
            search: `?${createSearchParams(searchParam)}`
        });

		
    }

	const logUserOut = () =>{

		navigate("")
		dispatch( logout(null) )
	}


	

	
  return (
    <div>
		<nav className={style.nav}>
			<div className={style.logo__routename}>  
				<img onClick={()=>navigate("")}  src={logo} alt="logo" />
				<span>|</span>
				{/* <p>{location.pathname.split("/").splice(2,1)}</p> */}
			</div>
			<div className={style.search}>
				<form onSubmit={(e)=>goToSearchPage(e)} action="">
					<input  onChange={(e)=>setSearchParams({search_query : e.target.value})} placeholder='Search hank, walter, birdie' type="text" />
					<button disabled={isDisabled} >Search</button>
				</form>
			</div>
			<div className={style.ul__wrap}>
				<ul className={style.ul1}>
					<Link to={""} >Home</Link>
					{ !isAuth && <li onClick={()=>navigate("/register")}  > Sign up</li>}
					{ isAuth && <li onClick={goToChannels} >My channels</li>}
				</ul>	
				<ul className={style.ul2}>
					<li onClick = { ()=> navigate('/notifications')} className={style.center}>
						<img src={alarm} alt="" />
					</li>
					<li onClick={()=>setOptions(!options)} className={style.userImg}>
						{ isAuth && <img className={style.userImage} src={userImage} alt="ima" />} 
						{ 	options &&
							<div className={style.logout}>
								<p onClick={()=>logUserOut()} >Logout</p>
								<p  onClick = { ()=> navigate('/profile-setup')} >Profile</p>
							</div>
						}
					</li>
				</ul>
			</div>
			<div  className={style.menu}>
				<img onClick={()=>dispatch( toggleSearchNav(true) )} className={style.searchImg} src={search} alt="" />
				<img onClick={()=>dispatch( toggleSideNav(true) )}src={more} alt="" />
			</div>
		</nav>
    </div>
  )
}

export default Navigation;
