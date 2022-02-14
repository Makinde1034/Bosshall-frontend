import React from 'react';
import style from "./video.module.scss"
import comment from '../../assets/img/chat.png'

interface videoProp {
	url : string,
	title : string,
	image : string,

}

function Video({url,title,image}:videoProp){
  	return (
		<div className={style.video}>
			<video controls src={url}></video>
			<div className={style.video__details}>
				<div className={style.image}>
					<img src={image} alt="" />
					<p>{title}</p>
				</div>
				<div className={style.comment}>
					<img src={comment} alt="" />
					<p>333</p>
				</div>
			</div>
		</div>
    
  )
}

export default Video;
