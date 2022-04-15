import React,{useEffect,useState} from 'react'
import style from './video.module.scss'
import  VideoPlay  from '../../components/videoPlay/videoPlay'
import { useParams } from 'react-router-dom'
import videoApi from '../../api/video'
import commentApi from '../../api/coments'
import CreateComment from '../../components/createComment/createComment'
import { setVideoComments } from '../../store/comments'
import { setRelatedVideos } from '../../store/relatedVideos'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Comment from '../../components/comment/comments'
import RelatedVideos from '../../components/relatedVideos/relatedVideos'
import { Link, useNavigate } from 'react-router-dom'
import channelApi from '../../api/channel'





function Video() {

    const [activeComment, setActiveComment] = React.useState("")
    const [ isUserSubscribed, setIsUserSubscribed ] = React.useState(null)
    const token = useAppSelector((state)=>state.userSlice.token);
    const navigate = useNavigate()

    const canReply = Boolean(token); 

    // console.log(canReply)

    const [ videoData, setVideoData ] = useState({      
        url : "",
        title : "",
        channelImage : "",
        channelId : "",
        id : "",
        likes : 0,
        time :"",
        channelName : ""
        
    });

    const { id } = useParams();
    const dispatch = useAppDispatch();
    const comments = useAppSelector((state)=>state.commentReducer.comments);
    const relatedVids = useAppSelector((state)=>state.RelatedVideosReducer.relatedVideos);
    

    useEffect(()=>{
        Promise.all([getVideo(), getVideoComments()]);  
    },[id])

    

    const getVideo = async () =>{

        try{
            // get video with id params
            const res = await videoApi.getVideo(id);
            console.log(res)
            setVideoData({ 
                url : res.data.vid.url, 
                title:res.data.vid.title, 
                channelImage : res.data.vid.channelImage, 
                channelId : res.data.vid.channelId,
                id : res.data.vid._id, 
                likes : res.data.vid.likes,
                time : res.data.vid.time,
                channelName : res.data.vid.channelName
            });
            loadRelatedVideos( res.data.vid.channelId)

            // check if user is subscribed to channel
            isSubscibed(res.data.vid.channelId)

            window.scrollTo(0, 0);
            


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

    // get related videos
    const loadRelatedVideos = async (channelId : string) =>{

        try{
            

            const relatedVideos = await videoApi.getRelatedVideos(channelId);
            // filter related videos to ensure that it deos not contain recent video playing.
            const filteredRelatedVideos = relatedVideos.data.videos.filter((i:any)=>i._id !== id)

            dispatch( setRelatedVideos(filteredRelatedVideos) )
            console.log(filteredRelatedVideos, "filtered")

            console.log(relatedVideos,"this are related videos")

        }catch(err){

            console.log(err)
        }
        
    }

    // createSubscription

    const subscribe = async ( ) => {

        if(!canReply){
            return navigate("")
        }

        try{

            const data = {
                channelId : videoData.channelId
            }
            const res = await channelApi.createSubscription(data)

            isSubscibed(videoData.channelId)
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

    // check user subscription
    const isSubscibed  = async (id : string) => {

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

    const goToChannel = (id:string) =>{
        navigate(`/single-channel/${id}`)
    }
    



    return (
        <div className={style.vid__wrap}>

            
            <div className={style.video} >
                <div className={style.video__left}>
                    <div className={style.video__play}>
                        <VideoPlay 
                            videoId = {id}
                            url = {videoData.url}
                            title = {videoData.title} 
                            likes = {videoData.likes} 
                            time = {videoData.time} 
                        />  
                    </div>
                    <div className={style.video__channel}>
                        <div onClick={()=>goToChannel(videoData.channelId)} className={style.channel__image}>
                            <img src={videoData.channelImage} alt="" />
                            <p>{videoData.channelName}</p>
                        </div>
                        <button onClick={()=>subscribe()} > { isUserSubscribed ? "Unsubscribe" : "Subscribe" }</button>
                    </div>
                    <div className={style.create__comment}>
                    { canReply 
                        ? 
                        <CreateComment id = {id} />
                        : 
                        <div className={style.cant__comment} > <Link to="/register">Sign up</Link> or <Link to="/register">sign in</Link> to leave a comment</div>
                        }
                    </div>
                    <div className={style.comment}>
                        {
                            comments.map((item,index)=>(
                                <Comment 
                                    key = {item._id}
                                    activeComment={activeComment} 
                                    setActiveComment = {setActiveComment}
                                    comment = {item.comment} 
                                    commentorImage = {item.users.userImage} 
                                    time = {item.time} 
                                    commentorName = {item.users.fullname} 
                                    commentId = {item._id}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={style.video__right}>
                    <h2 style={{fontSize:"18px",marginBottom:"30px"}}>Related videos</h2>
                    {
                        relatedVids.map((item,index)=>(
                            <RelatedVideos date = {item.time} channelName = {item.channelName} title={item.title} id = {item._id} url={item.url} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Video 