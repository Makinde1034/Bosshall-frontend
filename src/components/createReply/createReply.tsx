import React from 'react'
import style from './createReply.module.scss'
import user from '../../assets/img/Avatar.png'
import { useAppDispatch, useAppSelector } from '../../store/hooks'


interface replyProps {
    isReplyActive : boolean
}

function Reply() {

    const userImage = useAppSelector((state)=>state.userSlice.userImg)

  return (
    <div className={style.reply} >
        <div className={style.reply__inside}>
          <img src={userImage} alt="user-image" />
          <form>
            <textarea name="" id="" ></textarea>
            <button>Reply</button>
          </form>
            
        </div>
    </div>
  )
}

export default Reply