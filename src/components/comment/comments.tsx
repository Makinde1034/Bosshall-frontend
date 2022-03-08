import React from 'react'
import style from './comment.module.scss'
import { timeSince } from '../../utils/date/getTimeAdded'
import like from '../../assets/img/like.png'


interface commentProps {
  comment : string,
  commentorImage : string
  time : Date
  commentorName : string
}

function Comments({comment, commentorImage, time, commentorName}:commentProps) {
  return (
    <div className={style.comment}>
      <img src={commentorImage} alt="" />
      <div className={style.comment__top}>
        <div>
          <p className={style.commentorName} >{commentorName}</p>
          <p className={style.date} >{timeSince( new Date(time) )} ago </p>
        </div>
        <p className={style.comment}>{comment}</p>
        <div className={style.actions}>
          <img data-tooltip="bla bla" src={like} alt="" />
          <img className={style.unlike} src={like} alt="" />
          <p>Reply</p>
        </div>
      </div>
      
    </div>
  )
}

export default Comments