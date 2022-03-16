import React from 'react'
import style from './sideNav.module.scss'
import menu from '../../assets/img/more.png'
import notification from '../../assets/img/Notification.png'
import channels from '../../assets/img/connect.png'
import home from '../../assets/img/home.png'
import logout from '../../assets/img/logout.png'
import profile from '../../assets/img/edit.png'
import { useAppSelector,useAppDispatch } from '../../store/hooks'
import { toggleSideNav } from '../../store/toggle'
import { useNavigate } from 'react-router-dom'

function SideNav() {

    const isSideNavActive = useAppSelector((state)=>state.toggleSlice.sideNavActive);
    const id = useAppSelector((state)=>state.userSlice._id)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const changeRoute = ( route : string ) =>{
        navigate(route);
        dispatch ( toggleSideNav(false) )
    }


    return (
    <div>
        <div className={ isSideNavActive ? `${style.sideNav} ${style.sideNav__active}` :`${style.sideNav}`  }>
            <nav>
                <img onClick={()=>dispatch( toggleSideNav(false) )} src={menu} alt="" />
            </nav>
            <ul>
                <li onClick={()=>changeRoute('')} className = {isSideNavActive ? `${style.list1} ${style.list1__active}` : `${style.list1}` } >
                    <img src={home} alt="" />
                    <p>Home</p>
                </li>
                <li  onClick = { ()=> changeRoute('/dashboard/notifications')} className = {isSideNavActive ? `${style.list2} ${style.list2__active}` : `${style.list2}` } >
                    <img src={notification} alt="" />
                    <p>Notifications</p>
                </li>
                <li onClick={()=>changeRoute(`/dashboard/my-channel/${id}`)} className = {isSideNavActive ? `${style.list3} ${style.list3__active}` : `${style.list3}` }>
                    <img src={channels} alt="" />
                    <p>Channels</p>
                </li>
                <li className = {isSideNavActive ? `${style.list4} ${style.list4__active}` : `${style.list4}` } >
                    <img src={profile} alt="" />
                    <p onClick={()=>changeRoute(`/dashboard/profile-setup`)} >Profile</p>
                </li>
                {/* logout */}
                <li className={style.logout}>
                    <img src={logout} alt="" />
                    <p>Logout</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideNav 