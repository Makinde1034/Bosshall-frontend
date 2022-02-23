import React,{ useEffect } from 'react';
import Slider from 'react-slick'
import style from './home.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import videoApi from '../../api/video'
import { setRandomVideos } from '../../store/randomVideos'
import RandonVideo from '../../components/randomVideo/randomVideo';


function Home() {

    useEffect(()=>{
        getRandomVideos()
    },[])

    const dispatch = useAppDispatch();
    const videos = useAppSelector((state)=>state.randomVideos.randomVideos)


    const getRandomVideos = async () => {

        try{
            const randomVideos = await videoApi.getRandomVideos();
            console.log(randomVideos)
            dispatch(setRandomVideos( randomVideos.data.videos) )
            
        }catch(err){
            console.log(err)
        }
    }



    return (
        <div>
            <div className={style.home}>
                <p className={style.rand}>Random videos</p>
                <div className={style.random__videos}>
                   {
                        videos.map((item,index) =>(
                           <div>
                               <RandonVideo url={item.url} title={item.title} channelImage={item.channelImage}  />
                           </div>
                        ))
                   }
                </div>
            </div> 
        </div>
    )
}

export default Home;
