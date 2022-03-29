import React from 'react';
import style from './modalBackdrop.module.scss'
import { useAppSelector } from '../../store/hooks'

function ModalBackdrop() {

  const isModalOpen = useAppSelector((state)=>state.toggleSlice.modalBackdrop)
 

  return  (
    <div className={isModalOpen ? `${style.modalbackdrop} ${style.modalbackdrop__active}` : `${style.modalbackdrop}` }></div>
  )
}

export default ModalBackdrop;
