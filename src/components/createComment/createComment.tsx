import React,{useState} from 'react'
import style from './createComment.module.scss'
import img from '../../assets/img/Avatar.png'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setVideoComments } from '../../store/comments'
import commentApi from '../../api/coments'
import { toast } from 'react-toastify'


interface createCommentProps {
  id : any
}



function CreateComment({ id }:createCommentProps) {


  const [comment,setComment] = useState("");  
  const dispatch = useAppDispatch();
  const userImg = useAppSelector((state)=> state.userSlice.userImg)

  const disabled = Boolean(comment.length < 0 )


  const createComment = async (e:any) =>{
    e.preventDefault()
    const data = {
      comment : comment,
      videoId : id
    }

    const res = await commentApi.createComment(data);
    toast.success("Your feed back has been submitted")
    setComment("")
    // get all video comment after comment haas been added
    const videoComments = await getVideoComments();
    console.log(res);
  }


  // get video coment 
  const getVideoComments = async () => {

    try{

        const res = await commentApi.getComments(id);
        console.log(res,"videeo comments after comment is added");

        dispatch(setVideoComments(res.data)) 

    }catch(err){

        console.log(err)
    }

        
    }



  

  return (
    <div className={style.comment}>
      <img src={userImg} alt="" />
      <form onSubmit={(e)=>createComment(e)} action="">
        <textarea required onChange={(e)=>setComment(e.target.value)} name="" id="" ></textarea>
        <button disabled={disabled} >Add comment</button>
      </form>
      
    </div>
  )
}

export default CreateComment