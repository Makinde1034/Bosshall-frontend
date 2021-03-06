import React from 'react';
import style from './randomVideo.module.scss'
import play from '../../assets/img/play.png'
import { useNavigate } from 'react-router-dom'



interface randomVid {
  url : string,
  title : string,
  channelImage : string,
  id : string
  views : number
}

function RandonVideos({url,title, channelImage, id, views} : randomVid) {

  const navigate = useNavigate();

  const openVideo = (id:string) => {
    navigate(`/video/${id}`);
  }

  return (
    <div onClick={()=>openVideo(id)} className={style.randomVideo}>
      <video src={url}></video>
      <div className={style.details}>
        <img src={channelImage} alt="" />
        <div className={style.details__text}>
          <p className={style.title}>{title}</p>
          <p className={style.views}>{views} views</p>
        </div>
      </div>
      <img className={style.play} src={play} alt="" />
    </div>
  )
}

export default RandonVideos;
