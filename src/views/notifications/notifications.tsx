import React,{ useState,useEffect } from 'react'
import style from './notifications.module.scss'
import notificationsApi from '../../api/notifications'
import { timeSince } from '../../utils/date/getTimeAdded'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setAuth } from '../../store/auth'
import { isAuthenticated } from '../../helpers/authentication'

function Notifications() {

    useEffect(()=>{
        // getNotifications()
        Promise.all([checkAuth(),getNotifications()])
    },[])


    const dispatch = useAppDispatch()

    const [ notificationsData, setNotificationsData ] = useState([
        {
            channelName : "",
            subscriberName : "",
            subscriberImage : "",
            time : ""
        }
    ])



    const getNotifications = async () => {

        const res = await notificationsApi.getNotifications()
        console.log(res)
        setNotificationsData( res.data.notifications )
    }

    const checkAuth = async () => {

        try{
            const res = await isAuthenticated()
            console.log(res, "checkauthhh")
            dispatch( setAuth(res.data.auth) )
        }catch(err){
            console.log(err)
        }
    }

    return (

        <div className={style.notifications} >
            <div className={style.nots} >
                {
                    notificationsData.map((item,index)=>(
                        <div className={style.nots__row}>
                            <div className={style.nots__msg}>
                                <img src={item.subscriberImage} alt="" />
                                <div>
                                    <p> <span>{item.subscriberName}</span> subscribed to your channel <span>({item.channelName})</span> </p>
                                    <p className={style.time}>{timeSince(new Date(item.time))} ago</p>
                                </div>
                            </div>
                            {/* <div></div> */}
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Notifications