import React,{useState} from 'react'
import style from './comment.module.scss'
import { timeSince } from '../../utils/date/getTimeAdded'
import like from '../../assets/img/like.png'
import Arrow from '../../assets/img/downward-arrow.png'
import ArrowUpward from '../../assets/img/upward-arrow.png'
import CreateReply from '../createReply/createReply'
import commentApi from '../../api/coments'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setCommentReplies } from '../../store/replies'
import Reply from '../reply/reply'
// import { useSelector } from 'react-redux'


interface commentProps {
  comment : string,
  commentorImage : string
  time : Date
  commentorName : string,
  activeComment : string,
  setActiveComment : any
  commentId : string
  
}

function Comments({comment, commentorImage, time, commentorName, activeComment, setActiveComment, commentId}:commentProps) {


  // const [isReplyActive, setIsReplyActive] = React.useState(true)
  const dispatch = useAppDispatch();
  const replies = useAppSelector((state)=>state.replyReducer.replies);
  const isReplying = activeComment && activeComment === commentId

  

  const viewReplies = async () => {
    dispatch(setCommentReplies([]))
    setActiveComment(commentId )
    try{
      // dispatch( setCommentReplies([]) )
      const res= await commentApi.getCommentReplies(commentId);
      dispatch( setCommentReplies(res.data.data) );
      console.log(res)

    }catch(err){

      console.log(err)
    }
  }

  return (
    <div className={style.comment}>
      <img className={style.commentor__image} src={commentorImage} alt="" />
      <div className={style.comment__top}>
        <div className={style.div}>
          <p className={style.commentorName} >{commentorName}</p>
          <p className={style.date} >{timeSince( new Date(time) )} ago </p>
        </div>
        <p className={style.comment}>{comment}</p>
        <div className={style.actions}>
          <img className={style.img} src={like} alt="" />
          <img className={style.unlike} src={like} alt="" />
          <p onClick={()=>viewReplies()}  >View replies</p>
          <img className={style.arrow} src={ isReplying ? ArrowUpward : Arrow} alt="" />
        </div>
        { 
          isReplying && (
            <CreateReply />
          )
          
         
        }
        {
          replies.map((item,index)=>(
            isReplying && replies.length > 0 &&
            <Reply 
              key = {item._id} 
              time ={item.time} 
              userImage = {item.users.userImage} 
              user = {item.users.fullname} 
              reply={item.reply} 
           /> 
          ))
        }

      </div>
      
    </div>
  )
}

export default Comments