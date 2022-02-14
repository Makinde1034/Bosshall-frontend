import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom'
import style from './singleChannel.module.scss'
import rectangle from '../../assets/img/Rectangle.png'
import image from '../../assets/img/Avatar.png'
import api from '../../api/channel'
import userApi from '../../api/auth'
import { setChannel } from '../../store/channel/index'
import { setUserId } from '../../store/user/index'
import { setUploadModal } from '../../store/toggle/index'
import { useAppDispatch,useAppSelector } from '../../store/hooks'
import { useSelector } from 'react-redux';
import UploadVideo from '../../components/uploadVideo/uploadVideo';
import Video from '../../components/video/video';

function SignChannel() {
	const { id } = useParams();
	const dispatch = useAppDispatch()

	const channelDetails = useAppSelector((state)=>state.ChannelSlice.channel)
	const userId = useAppSelector((state)=>state.userSlice._id)
	const isModalOpen = useAppSelector((state)=>state.toggleSlice.uploadModal)


	useEffect(()=>{
		getChannel();
		getUser()
	},[])

	const getChannel = () =>{
		api.getChannel(id).then((res)=>{
			console.log(res,"got channel")
			dispatch( setChannel(res.data) )
		}).catch((err)=>{
			console.log(err)
		})
	}

	const getUser = ()=>{
		userApi.getUser().then((res)=>{
			dispatch( setUserId(res.data._id) )
			console.log(res,"got user")
		}).catch((err)=>{
			console.log(err)
		})
	}

	const openModal = () =>{
		dispatch( setUploadModal(true) )
	}


  return (
    <div>
		<div className={style.channel}>
			<div className={style.channel__banner}>
				<nav className={style.channel__nav}>
					<div className={style.owner}>
						<img src={channelDetails.image} alt="userimage" />
						<div className={style.owner__text}>
							<h3>{channelDetails.name}</h3>
							<p>58950 subscribers</p>
						</div>
					</div>
					{ channelDetails.owner === userId ? <button onClick={openModal} >Upload video</button> : <button  >Subscribe</button> }
				</nav>
			</div>

			<section className={style.videos} >
				{/* {	
					
				} */}
				{
					channelDetails.videos.length === 0 ? ( <div>No vidoes yet</div> )  : 
					channelDetails.videos.map((item,index)=>(
						<div className={style.video} key={index}>
							<Video title = {item.title} url={item.url} image={channelDetails.image}    />
						</div>
					))
				}
			</section>
		</div>
		{ isModalOpen && <UploadVideo />}
    </div>
  )
}

export default SignChannel;
