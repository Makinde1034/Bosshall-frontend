import React from 'react';
import style from './channel.module.scss'
import channel from '../../assets/img/channel.png'
import CompleteButton from '../../components/buttons/completeButton/completeButton'
import { Navigate, useNavigate, Link } from 'react-router-dom'

function Channel() {

	

  return (
    <div>
		<div className={style.channel}>
			<img src={channel} alt="" />
			<h3>Create your channel</h3>
			<p>Sharing content and reaching a wider range of audience <br /> is just a click away</p>
			<Link to={"/dashboard/create-channel"}>
				<button className={style.create}>Create channel</button>
			</Link>
		</div>
    </div>
  )
}

export default Channel;
