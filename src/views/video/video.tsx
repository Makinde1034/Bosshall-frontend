import React,{useEffect,useState} from 'react'
import style from './video.module.scss'
import  VideoPlay  from '../../components/videoPlay/videoPlay'
import { useParams } from 'react-router-dom'
import videoApi from '../../api/video'
import commentApi from '../../api/coments'
import CreateComment from '../../components/createComment/createComment'
import { setVideoComments } from '../../store/comments'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Comment from '../../components/comment/comments'
import { promises } from 'stream'



function Video() {

    const [ videoData, setVideoData ] = useState({
        url : "",
        title : "",
        channelImage : "",
        id : "",
        likes : 0
        
    });

    const { id } = useParams();
    const dispatch = useAppDispatch();
    const comments = useAppSelector((state)=>state.commentReducer.comments)
    

    useEffect(()=>{
        Promise.all([getVideo(), getVideoComments()]);
    },[])

    const getVideo = async () =>{

        try{
            const res = await videoApi.getVideo(id);
            console.log(res)
            setVideoData({ 
                url : res.data.vid.url, 
                title:res.data.vid.title, 
                channelImage : res.data.vid.channelImage, 
                id : res.data.vid._id, 
                likes : res.data.vid.likes
            });
        }catch(err){
            console.log(err);
        }

    }

    const getVideoComments = async () => {

        try{

            const res = await commentApi.getComments(id);
            console.log(res,"comments");

            dispatch(setVideoComments(res.data)) 

        }catch(err){

            console.log(err)
        }

        
    }
    



    return (

        <div className={style.video} >
            <div className={style.video__left}>
                <div className={style.video__play}>
                    <VideoPlay 
                        videoId = {id}
                        url = {videoData.url}
                        title = {videoData.title} 
                        likes = {videoData.likes}  
                    />  
                </div>
                <div className={style.video__channel}>
                    <div className={style.channel__image}>
                        <img src={videoData.channelImage} alt="" />
                        <p>Channel Name</p>
                    </div>
                    <button>Subscribe</button>
                </div>
                <div className={style.create__comment}>
                   <CreateComment id = {id} /> 
                </div>
                <div className={style.comment}>
                    {
                        comments.map((item,index)=>(
                            <Comment comment = {item.comment} commentorImage = {item.users.userImage} time = {item.time} commentorName = {item.users.fullname} />
                        ))
                    }
                </div>
            </div>
            <div className={style.video__right}></div>
        </div>
    )
}

export default Video