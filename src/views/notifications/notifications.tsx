import React,{ useState,useEffect } from 'react'
import style from './notifications.module.scss'
import notificationsApi from '../../api/notifications'
import { timeSince } from '../../utils/date/getTimeAdded'

function Notifications() {

    useEffect(()=>{
        getNotifications()
    },[])

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