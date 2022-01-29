import React from 'react';
import style from './completeButton.module.scss'

interface button {
  text : string
}

function SmallNutton({text}:button) {
  return (
    <button className={style.finish}>{text}</button>
  )
}

export default SmallNutton;
