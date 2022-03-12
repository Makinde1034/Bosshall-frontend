import React,{ useEffect } from 'react';
import Slider from 'react-slick'
import style from './home.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import videoApi from '../../api/video'
import channelApi from '../../api/channel'
import { setRandomVideos } from '../../store/randomVideos'
import { setRandomChannels } from '../../store/randomChannels';
import RandonVideo from '../../components/randomVideo/randomVideo';
import RandomChannel from '../../components/randomChannel/randomChannel';



function Home() {

    useEffect(()=>{
        getRandomVideos();
        getRanadomChannels();
    },[])

    const dispatch = useAppDispatch();
    // select random channels and videos
    const videos = useAppSelector((state)=>state.randomVideos.randomVideos);
    const randomChannels = useAppSelector((state)=>state.randomChannels.randomChannels);


    // get random videos
    const getRandomVideos = async () => {

        try{
            const randomVideos = await videoApi.getRandomVideos();
            console.log(randomVideos)
            dispatch(setRandomVideos( randomVideos.data.videos) )
            
        }catch(err){
            console.log(err)
        }
    }

    // get random channels
    const getRanadomChannels = async () =>{
        try{

            const res = await channelApi.getRandomChannels();
            console.log(res,"raandom channels")
            dispatch( setRandomChannels(res.data.randomChannels) )
           

        }catch(err){
            console.log(err)
        }
    }




    return (
        <div>
            <div className={style.home}>
                <p className={style.rand}  >Random videos</p>
                <div className={style.random__videos}>
                    {
                        videos.map((item,index) =>(
                           <div>
                               <RandonVideo url={item.url} title={item.title} channelImage={item.channelImage} id = {item._id}  />
                           </div>
                        ))
                    }
                </div>
                <div className={style.random__channels}>
                    {
                        randomChannels.map((item,index)=>(
                            <div>
                                <RandomChannel id={item._id} image={item.image} name = {item.name} />
                            </div>
                        ))
                    }
                </div>
            </div> 
        </div>
    )
}

export default Home;
