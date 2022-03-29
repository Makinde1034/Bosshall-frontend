import React,{ useState } from 'react';
import style from "./video.module.scss"
import comment from '../../assets/img/chat.png'
import more from '../../assets/img/moree.png'
import { useNavigate } from 'react-router-dom'
import deletee from '../../assets/img/delete.png'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toggleDeleteModal,setVideoDeleteId } from '../../store/toggle'

interface videoProp {
	url : string,
	title : string,
	image : string,
	likes : number
	canDelete : boolean
	id : string
}

function Video({url,title,image, canDelete, id}:videoProp){
	
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	const openVideo = (id:string) => {

        navigate(`/video/${id}`);
    }

	const openDeleteModal = () => {
		dispatch(toggleDeleteModal(true))
		dispatch(setVideoDeleteId(id))
	}


  	return (
		<div  className={style.video}>
			<video onClick={()=>openVideo(id)} src={url}></video>
			<div className={style.video__details}>
				<p className={style.video__title}>{title}</p>
				{ canDelete && <img onClick={()=>setIsMenuOpen(!isMenuOpen)} src={more} alt="" /> }
				{ isMenuOpen && 
					<div className={style.menu}>
						<ul>
							<li onClick={()=>openDeleteModal()}>
								<img id={style.delete} src={deletee} alt="" />
								<p className={style.delete__text}>Delete</p>
							</li>
						</ul>
					</div>
				}
			</div>
		</div>
  	)
}

export default Video;
