import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import style from './singleChannel.module.scss'
import rectangle from '../../assets/img/Rectangle.png'
import image from '../../assets/img/Avatar.png'
import more from '../../assets/img/moree.png'
import api from '../../api/channel'
import userApi from '../../api/auth'
import { setChannel } from '../../store/channel/index'
import { setUserId } from '../../store/user/index'
import { setUploadModal } from '../../store/toggle/index'
import { useAppDispatch,useAppSelector } from '../../store/hooks'
import { useSelector } from 'react-redux';
import UploadVideo from '../../components/uploadVideo/uploadVideo';
import Video from '../../components/video/video';
import ModalBackdrop from '../../components/modalBackdrop/modalBackdrop'
import { useNavigate } from 'react-router-dom'
import channelApi from '../../api/channel'




function SignChannel() {
	const { id } = useParams();
	const dispatch = useAppDispatch()

	const [ isUserSubscribed, setIsUserSubscribed ] = useState(null)

	const channelDetails = useAppSelector((state)=>state.ChannelSlice.channel)
	const userId = useAppSelector((state)=>state.userSlice._id)
	const isModalOpen = useAppSelector((state)=>state.toggleSlice.uploadModal)
	const token = useAppSelector((state)=>state.userSlice.token)

	const canSubscribe = Boolean(token)
	const canDelete = channelDetails.owner === userId
	const navigate = useNavigate()


	useEffect(()=>{
		getChannel();
		getUser()
		// isSubscribed()
	},[])

	const getChannel = () =>{
		api.getChannel(id).then((res)=>{
			console.log(res,"got channel")
			dispatch( setChannel(res.data) )
			// check if present user is subcribed to channel
			isSubscribed(channelDetails._id)
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

	const subscribe = async ( ) => {

        if(!canSubscribe){
            return navigate("/register")
        }

        try{

            const data = {
                channelId : channelDetails._id
            }
            const res = await channelApi.createSubscription(data)

            isSubscribed(channelDetails._id)
			console.log(res)
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

	// check user subscription
    const isSubscribed  = async (id : string) => {

        try{
            const data = {
                channelId : id
            }
            const res = await channelApi.checkSubscription(data);
            setIsUserSubscribed(res.data.data)

            console.log(res, "check subscription")

        }catch(err){
            console.log(err)
        }
       
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
							<p>{channelDetails.subscribers} { channelDetails.subscribers > 1 ? "subscribers" : "subscriber" }</p>
						</div>
					</div>
					{ channelDetails.owner === userId ? 
						<button onClick={openModal} >Upload video</button> :
						<button onClick={()=>subscribe()}  >{ isUserSubscribed ? "Unsubscribe" : "subscribe"}</button> 
					}
				</nav>
			</div>

			<section className={style.videos} >
				{/* {	
					
				} */}
				{
					channelDetails.videos.length === 0 ? ( <div>No vidoes yet</div> )  : 
					channelDetails.videos.map((item,index)=>(
						<div className={style.video} key={index}>
							<Video id = {item._id} canDelete = {canDelete}  title = {item.title} url={item.url} image={channelDetails.image} likes={item.likes}    />
						</div>
					))
				}
			</section>
		</div>
		<UploadVideo />
		<ModalBackdrop />
    </div>
  )
}

export default SignChannel;
