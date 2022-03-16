import React,{useState} from 'react';
import style from './uploadVideo.module.scss'
import upload from '../../assets/img/action.png'
import { useAppDispatch,useAppSelector } from '../../store/hooks'
import { setUploadModal } from '../../store/toggle/index'
import videoApi from '../../api/video'
import channelApi from '../../api/channel';
import Preloader from '../prealoder/preloader';
import { toast,ToastOptions } from 'react-toastify'



function UploadVideo() {

	const [video,setVideo] = useState<any|null>();
	const [title,setTitle] = useState("")                          
	const [videoExist,setVideoExist] = useState(false)
	const [videoUploadInProgress, setVideoUploadInProgress] = useState(false)
	const [videoSelectLoading,setVideoSelectLoading] = useState(false)
	const dispatch = useAppDispatch()

	// get channel id from channel store
	const channel = useAppSelector((state)=>state.ChannelSlice.channel)
	
	const isModalOpen = useAppSelector((state)=>state.toggleSlice.uploadModal)
 
	const uploadVideo = (e:any) =>{
		const fileReader = new FileReader();
		const file = e.target.files[0]
		console.log(file.size/1000000, "this is the file");

		// ensure file size is not greater than 10mb
		if(file.size/1000000 > 30 ){
			return alert("file too large");
		}

		fileReader.readAsDataURL(file)
		setVideoExist(true)

		fileReader.onprogress =()=>{
			setVideoSelectLoading(true)
			console.log("uploading in progress")
		}

		fileReader.onloadend = ()=>{
			setVideo(fileReader.result)
			console.log("upload end");
			setVideoSelectLoading(false);
			
		}
	}

	const closeModal = (e:any) =>{
		e.preventDefault();
		dispatch( setUploadModal(false) ) 
	}

	const uploadVid = (e:any) =>{
		setVideoUploadInProgress(true);
		e.preventDefault();
		const data = {
			video :video,
			title : title,
			channelId : channel._id
		}
		videoApi.uploadVideo(data).then((res)=>{
			console.log(res)
			setVideoUploadInProgress(false)
			dispatch( setUploadModal(false) )
			window.location.reload();
			toast.success("Video succeessfully uploaded")

		}).catch((err)=>{
			console.log(err)
		})
	}

  return (
    <div>
		<div className={isModalOpen ? `${style.upload} ${style.upload__active}` : `${style.upload}`}>
			<nav>
				<p>Upload video</p>
			</nav>
			<form onSubmit={(e)=>uploadVid(e)}  action="">
				<div className={style.upload__video}>
					{	videoSelectLoading ? <p>Uploading</p> : 

						(videoExist ? 
						<video className={style.video} src={video}  ></video>
						
						:
						<label>
							<div >
								<img src={upload} alt="" />
								<p className={style.drag}>Drag & Upload</p>
								<p className={style.drag__upload}>Drag files or click here to upload</p>
							</div>
							<input onChange={(e)=>uploadVideo(e)} type="file" required accept="video/*" />
						</label> )
					}
					
				</div>
				<div className={style.upload__title}>
					<label htmlFor="">Title</label>
					<input onChange={(e)=>setTitle(e.target.value)} required value={title} type="text" />
				</div>
				<div className={style.buttons}>
					<button onClick={(e)=>closeModal(e)}  className={style.cancel}>Cancel</button>
					<button className={style.upload__btn} >{videoUploadInProgress ? "uploading..." : "upload" }</button>
				</div>
			</form>
			
		</div>
    </div>
  )
}

export default UploadVideo;
