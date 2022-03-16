import React from 'react'
import style from './relatedVideos.module.scss'
import { timeSince } from '../../utils/date/getTimeAdded'
import { useNavigate } from 'react-router-dom'

interface realatedVideoProps {
    title : string,
    url : string
    date : Date,
    id : string
    channelName : string
}



function RelatedVideos({title, url, date, id, channelName}:realatedVideoProps) {

    const navigate = useNavigate()

    const openVideo = (id:string) => {
        navigate(`/dashboard/video/${id}`);
    }
    
  return (
    <div className={style.related} >
        <div onClick={()=>openVideo(id)} className={style.video}>
            <video src={url}></video>
        </div>
        <div className={style.video__info}>
            <p className={style.video__title}>{title}</p>
            <p className={style.video__channel}>{channelName ? channelName : "No Channel" }</p>
            <p className={style.video__date}>{timeSince( new Date(date) )} ago</p>
        </div>
    </div>
  )
}

export default RelatedVideos