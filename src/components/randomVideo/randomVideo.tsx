import React from 'react';
import style from './randomVideo.module.scss'



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
    </div>
  )
}

export default RandonVideos;
