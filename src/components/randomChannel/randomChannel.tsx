import React from 'react'
import style from './randomChannel.module.scss'

interface randomChannelProps {
    id : string,
    image : string,
    name : string

}

function RandomChannel({id, image, name}:randomChannelProps) {
  return (
    <div className={style.channel} >
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p>12.3k followers</p>
        <button>Subscribe</button>
    </div>
  )
}

export default RandomChannel