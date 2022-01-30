import React from 'react';
import style from './channel.module.scss'
import channel from '../../assets/img/channel.png'
import CompleteButton from '../../components/buttons/completeButton/completeButton'

function Channel() {
  return (
    <div>
			<div className={style.channel}>
				<img src={channel} alt="" />
				<h3>Create your channel</h3>
				<p>Sharing content and reaching a wider range of audience <br /> is just a click away</p>
				<CompleteButton text="Create channel" />
			</div>
    </div>
  )
}

export default Channel;
