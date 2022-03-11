import React from 'react'
import style from './reply.module.scss'
import { timeSince } from '../../utils/date/getTimeAdded'
import like from '../../assets/img/like.png'
import Arrow from '../../assets/img/downward-arrow.png'
// import Reply from '../createReply/createReply'
import commentApi from '../../api/coments'

interface replyProp {
    reply : string,
    user : string
    time : Date
    userImage : string
}

function Reply({reply, user, time, userImage} : replyProp) {
  return (
    <div className={style.comment}>
      <img className={style.commentor__image} src={userImage} alt="userimage" />
      <div className={style.comment__top}>
        <div className={style.div}>
          <p className={style.commentorName} >{user}</p>
          <p className={style.date} >{timeSince( new Date(time) )} </p>
        </div>
        <p className={style.comment}>{reply}</p>
        <div className={style.actions}>
          <img className={style.img} src={like} alt="" />
          <img className={style.unlike} src={like} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Reply