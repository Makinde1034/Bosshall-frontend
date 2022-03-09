import React,{useEffect, useState} from 'react'
import style from './videoPlay.module.scss'
import like from '../../assets/img/like.png'
import likeFill from '../../assets/img/like-fill.png'
import share from '../../assets/img/share.png'
import unlike from '../../assets/img/thumb-down.png'
import feelingsApi from '../../api/feelings'
import { useAppSelector } from '../../store/hooks'
import { toast,ToastOptions } from 'react-toastify'
import ToastMsg from '../../components/toastMsg/toastMsg'


interface videoPlayProps{
    videoId : any
    url : string,
    title : string,
    likes : number
}



const VideoPlay = ({videoId, url, title, likes}:videoPlayProps) => {

    const [isLike, setIsLike] = useState(null);         
    const [dummyLikeCount, setDummyLikeCount] = useState(0)

    const toastOptions: ToastOptions = {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // transition: Slide,
        rtl: false,
        closeButton: false,
    }

    useEffect(()=>{
        checkVideoLike()
    },[])


    const likeUnlikeVideo = async (status : string) => {

        try{
            const data = {
                reciever : videoId,
                status : status
            }
            const res = await feelingsApi.likeUnlikVideo(data);

            const checkFeelingStatus = await feelingsApi.checkVideoLike(data);
            setIsLike(checkFeelingStatus.data.alreadyLiked.status)

            // inc dummy like counter
            if(status === 'liked'){
                setDummyLikeCount(dummyLikeCount + 1)
            }
            toast(<ToastMsg />, toastOptions)
           console.log(res,"isviedolike")

            

            console.log(res)

        }catch(err){

            console.log(err)
            toast.error("An error occured while submitting your feedback",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }


    const checkVideoLike = async () =>{                

        const data = {
            reciever : videoId,
           
        }

        try{
           const res = await feelingsApi.checkVideoLike(data);
            setIsLike(res.data.alreadyLiked.status)
           console.log(res,"isviedolike")

        }catch(err){

            console.log(err)
        }
    }


  return (
    <div className={style.videoplay} >
        <video autoPlay controls src={url}></video>
        <div className={style.videoplay__actions}>
            <div className={style.title} >
                <p>{title}</p>
            </div>
            <div className={style.actions} >
                <span data-tooltip = "Hello" >
                    <img onClick={()=>likeUnlikeVideo("liked")} className={style.like} src={ isLike === "liked"  ? likeFill : like } alt="" />
                    <p>{likes + dummyLikeCount}</p>
                </span>
                <span>
                   <img onClick={()=>likeUnlikeVideo("unliked")} className={style.unlike} src={ isLike === "unliked" ? likeFill : like} alt="" /> 
                </span>
                <span>
                   <img src={share} alt="" /> 
                </span> 
            </div>
        </div>
    </div>
  )
}

export default VideoPlay
