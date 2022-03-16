import React from 'react';
import style from "./video.module.scss"
import comment from '../../assets/img/chat.png'
import more from '../../assets/img/delete.png'
import { useNavigate } from 'react-router-dom'

interface videoProp {
	url : string,
	title : string,
	image : string,
	likes : number
	canDelete : boolean
	id : string

}

function Video({url,title,image, canDelete, id}:videoProp){

	const navigate = useNavigate()

	const openVideo = (id:string) => {

        navigate(`/dashboard/video/${id}`);
    }


  	return (
		<div onClick={()=>openVideo(id)} className={style.video}>
			<video  src={url}></video>
			<div className={style.video__details}>
				<p>{title}</p>
				{ canDelete && <img src={more} alt="" /> }
			</div>
		</div>
    
  	)
}

export default Video;
