import React,{useState} from 'react';
import style from './profileSetup.module.scss'
import CompleteButton from '../../components/buttons/completeButton/completeButton'
import banner from '../../assets/img/Rectangle.png'
import user from '../../assets/img/Avatar.png'
import api from '../../api/auth'
import { saveUserImage } from '../../helpers/storage'
import { setUser } from '../../store/user/index'
import { useAppDispatch,useAppSelector } from '../../store/hooks'

function ProfileSetup() {

  const [bannerImage,setBannerImage] = useState<any | null>();         
	const [userImage, setUserImage] = useState<any | null>()
	const [headline,setHeadline] = useState("")
	const [bio,setBio] = useState("")
	const [fullname,setFullname] = useState("") 
	const [country,setCountry] = useState("")
	const [address,setAddress] = useState("")
	const [email,setEmail] = useState("")
  const dispatch = useAppDispatch()
  // const userDetails = useAppSelector((state)=>state.userSlice.userDetails)
	




  function setBanner(e:any){
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onloadend=()=>{
      console.log(fileReader.result);
      setBannerImage(fileReader.result)
    }
  }

	function setImage(e:any){
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onloadend=()=>{
      console.log(fileReader.result);
      setUserImage(fileReader.result)
    }
  }

	const updateProfile = (e:any) =>{
		e.preventDefault()
		return new Promise((resolve)=>{
			const data = JSON.stringify({
				userImage : userImage,
				userBanner : bannerImage,
				headline,
				bio,
				fullname,
				email,
				country,
				address

			})
			api.updateProfile(data).then((res)=>{
				console.log(res);
        const data = {
          userImg : res.data.userImage
        }
        dispatch(setUser(data))
			}).catch(err=>{
				console.log(err)
			})
		})
	}




  return (
    <div style={{paddingBottom:"100px"}}>
      <form onSubmit={(e)=>{updateProfile(e)}} action="">
        <nav className={style.nav}>
          <CompleteButton text = "Finish" />
        </nav>

        <div className={style.body}>
          {/* banner */}
          <section   className={style.banner}>
            <nav className={style.banner__nav}>
              <label>
                <input onChange={(e)=>setBanner(e)} type="file" />
                <span>Upload banner</span>
              </label>
            </nav>
            <label className={style.user}>
              <img src={userImage} alt="" />
              <input onChange={(e)=>setImage(e)} type="file" />
              <span>Upload</span>
            </label>
            <img  className={style.banner__background} src={ bannerImage ? bannerImage : banner } alt="" />
          </section>

          {/* info */}
          <section className={style.profile__info}>
            <nav>
              <p>Profile Info</p>
            </nav>
            <div className={style.form}>
              <div className={style.input__wrap}>
                <label htmlFor="headline">Headline</label>
                <input onChange={(e)=>setHeadline(e.target.value)} value={headline} type="text" />
              </div>
              <div className={style.input__wrap}>
                <label htmlFor="headline">Bio</label>
                <textarea onChange={(e)=>setBio(e.target.value)} value={bio}  name="" id="" ></textarea>
              </div>
              <div className={style.input__wrap}>
                <label htmlFor="headline">Fullname</label>
                <input onChange={(e)=>setFullname(e.target.value)} value={fullname} type="text" />
              </div>
              <div className={style.input__wrap}>
                <label htmlFor="headline">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" />
              </div>
               <div className={style.input__wrap}>
                <label htmlFor="headline">Country</label>
                <input onChange={(e)=>setCountry(e.target.value)} value={country} type="text" />
              </div>
              <div className={style.input__wrap}>
                <label htmlFor="headline">Address</label>
                <input onChange={(e)=>setAddress(e.target.value)} value={address} type="text" />
              </div>
            </div>
          </section>
        </div>
      </form>
    </div>
  )
}

export default ProfileSetup;
