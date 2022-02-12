import React from 'react';
import style from "./video.module.scss"

interface videoProp {
	url : string,
	title : string,
	image : string,

}

function Video({url,title,image}:videoProp){
  	return (
		<div className={style.video}>
			<video src={url}></video>
			<div className={style.video__details}>
				<img src={image} alt="" />
				<p>{title}</p>
			</div>
		</div>
    
  )
}

export default Video;
