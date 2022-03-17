import React from 'react'
import logo from '../../assets/img/logo.png'
import style from './fallback.module.scss'

function Fallback() {
  return (
    <div className={style.fallback}>
        <img src={logo} alt="" />
    </div>
  )
}

export default Fallback