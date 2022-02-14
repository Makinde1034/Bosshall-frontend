import React,{useState} from 'react';
import style from './createChannel.module.scss'
import logo from '../../assets/img/clarity_image-outline-badged.png'
import upload from '../../assets/img/upload.png'
import api from '../../api/channel'
import { createChannelFailure, createChannelRequest, createChannelSuccess } from '../../store/channel/index'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Preloader from '../../components/prealoder/preloader';
import { useNavigate } from 'react-router-dom'

function CreateChannel() {

	const [image, setImage] = useState<any | null>();
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [about, setAbout] = useState("");
	const [websiteLink, setWebsiteLink] = useState("");
	const dispatch = useAppDispatch()
	const loading = useAppSelector((state)=>state.ChannelSlice.createChannelLoading);
	const navigate = useNavigate()
	

	const getImage = (e:any) =>{
		
		const file = e.target.files[0]
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);

		fileReader.onloadend=()=>{
			setImage(fileReader.result);
		}
	}

	const createChannel = (e:any) =>{
		e.preventDefault();
		return new Promise((resolve)=>{
			dispatch( createChannelRequest(true) )
			const data = {image,name,address,about,websiteLink}
			api.createChannel(data).then((res)=>{
				dispatch( createChannelSuccess(false) )
				console.log(res)
				const id = res.data._id
				navigate(`/dashboard/single-channel/${id}`)
				console.log(res)
			}).catch(err=>{
				console.log(err)
				dispatch( createChannelFailure(false) )
			})
		})
	}

	const goto = () =>{
		navigate('/dashboard/single-channel/12345')
	}

  return (
    <div className={style.create} >
			<form onSubmit={(e)=>createChannel(e)}>
				<nav className={style.nav}>
					<button>
						{ loading ? <Preloader /> : <p>Finish</p>  }
					</button>
				</nav>

				<div className={style.channel}>
					<section className={style.channel__form}>
						<header>
							<h3>Channel profile</h3>
							<p>Set up your channels profile information.</p>
						</header>
						<div className={style.fields}>
							<div className={style.input__wrap}>
                <label htmlFor="headline">Channel logo</label>
								<label className={style.logoWrap} >
									<input onChange={(e)=>getImage(e)} type="file" />
									<img className={style.logo} src={image ? image : logo } alt="" />
									<img className={style.upload} src={upload} alt="" />
								</label> 
              </div>
							<div className={style.input__wrap}>
                <label htmlFor="headline">Name</label>
                <input onChange={(e)=>setName(e.target.value)}  type="text" />
              </div>
							<div className={style.input__wrap}>
                <label htmlFor="headline">Address</label>
                <input onChange={(e)=>setAddress(e.target.value)}  type="text" />
              </div>
							<div className={style.input__wrap}>
                <label htmlFor="headline">Tagline</label>
                <input   type="text" />
              </div>
              <div className={style.input__wrap}>
                <label htmlFor="headline">About</label>
                <textarea onChange={(e)=>setAbout(e.target.value)}  name="" id="" ></textarea>
              </div>
							<div className={style.input__wrap}>
                <label htmlFor="headline">Website link</label>
                <input  onChange={(e)=>setWebsiteLink(e.target.value)} type="text" />
              </div>
						</div>
					</section>
				</div>
			</form>
			<button onClick={goto}></button>
    </div>
  )
}

export default CreateChannel;
 