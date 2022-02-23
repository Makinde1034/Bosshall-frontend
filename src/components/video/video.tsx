import React from 'react';
import style from "./video.module.scss"
import comment from '../../assets/img/chat.png'

interface videoProp {
	url : string,
	title : string,
	image : string,
	likes : number

}

function Video({url,title,image}:videoProp){
  	return (
		<div className={style.video}>
			<video  src={url}></video>
			<div className={style.video__details}>
				<p>It's fun outside</p>
			</div>
		</div>
    
  	)
}

export default Video;
