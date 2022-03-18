import React,{useEffect} from 'react';
import style from './userChannel.module.scss'
import { setUserChannels } from '../../store/channel/index'
import api from '../../api/channel'
import { useParams,useNavigate } from 'react-router-dom'
import { useAppSelector,useAppDispatch } from '../../store/hooks'  
import image from '../../assets/img/bacimage.jpg'
import NoChannelYet from '../channel/channel'

function UserChannel() {

    const { id } = useParams()
    const dispatch = useAppDispatch()
    const channels = useAppSelector((state)=>state.ChannelSlice.channels);
    const navigate = useNavigate()

    const getUserChannels = async() =>{

        try{
            const userChannels = await api.getUserChannels(id);
            console.log(userChannels)
            dispatch( setUserChannels(userChannels.data.channels) )

        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{

        getUserChannels();

    },[])


    const goToChannel = (id:string) =>{
        navigate(`/single-channel/${id}`)
    }


    return (
    <div className={style.userchannel__wrap}>
        {   
            channels.length === 0 ? 
            <NoChannelYet /> : 
            <div className={style.userchannel}> 
                {  
                    channels.map((item,index)=>(
                        <div onClick={()=>goToChannel(item._id)} className={style.box}>
                            <img src={item.image} alt="" />
                            <h3 className={style.title}>{item.name}</h3>
                            <p className={style.sub}>12.3k subscribers</p>
                            <button>Delete</button>
                        </div>
                    ))
                }
            </div>
        }
    </div>
    
  )
}

export default UserChannel;
