import React from 'react'
import style from './randomChannel.module.scss'
import { useNavigate } from 'react-router-dom'

interface randomChannelProps {
    id : string,
    image : string,
    name : string

}

function RandomChannel({id, image, name}:randomChannelProps) {

  const navigate = useNavigate()

  const goToChannel = (id:string) =>{
    navigate(`/dashboard/single-channel/${id}`)
  }

  return (
    <div onClick={()=>goToChannel(id)} className={style.channel} >
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p>12.3k followers</p>
        <button>Subscribe</button>
    </div>
  )
}

export default RandomChannel