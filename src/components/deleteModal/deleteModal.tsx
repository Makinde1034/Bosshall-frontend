import React from 'react'
import style from './deleteModal.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toggleDeleteModal } from '../../store/toggle'
import videoApi from '../../api/video'


function DeleteModal() {

    const deleteModelActive = useAppSelector((state)=>state.toggleSlice.deleteModal);
    const videoDeleteId = useAppSelector((state)=>state.toggleSlice.videoDeleteId)
    const dispatch = useAppDispatch()

    const closeDeleteModal = () => {
		dispatch(toggleDeleteModal(false))
	}

    // delete video

    const deleteVideo = async () => {
        try{
            const res = await videoApi.deleteVideo(videoDeleteId);
            dispatch(toggleDeleteModal(false))
            window.location.reload();
            console.log(res);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className={ deleteModelActive ? `${style.delete} ${style.delete__active}` : `${style.delete}` }>
            <p>Are you sure you want to delete this video ?</p>
            <div className={style.button__wrap}>
                <button onClick={()=>closeDeleteModal()}>Cancel</button>
                <button onClick={()=>deleteVideo()}>Delete</button>
            </div>
        </div>
    )
}

export default DeleteModal