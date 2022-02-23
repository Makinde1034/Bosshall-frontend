import React from 'react';
import style from './randomVideo.module.scss'
import play from '../../assets/img/play.png'



interface randomVid {
    url : string,
    title : string,
    channelImage : string
}

function RandonVideos({url,title, channelImage} : randomVid) {

  return (
    <div className={style.randomVideo}>
        <video src={url}></video>
        <div className={style.details}>
            <img src={channelImage} alt="" />
            <div className={style.details__text}>
                <p className={style.title}>{title}</p>
                <p className={style.views}>200 views</p>
            </div>
        </div>
        <img className={style.play} src={play} alt="" />
    </div>
  )
}

export default RandonVideos;
