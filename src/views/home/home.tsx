import React,{ useEffect } from 'react';
import Slider from 'react-slick'
import style from './home.module.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import videoApi from '../../api/video'
import channelApi from '../../api/channel'
import { setRandomVideos, randomVideosRequest } from '../../store/randomVideos'
import { setRandomChannels } from '../../store/randomChannels';
import RandonVideo from '../../components/randomVideo/randomVideo';
import RandomChannel from '../../components/randomChannel/randomChannel';
import { isAuthenticated } from '../../helpers/authentication'
import { setAuth } from '../../store/auth';
import RandomVideosSkeleton from '../../components/skeletons/randomVideosSkeleton/randomVideosSkeleton'





function Home() {

    useEffect(()=>{
        Promise.all([getRandomVideos(), getRanadomChannels(), checkAuth()])
        
    },[])

    const dispatch = useAppDispatch();
    // select random channels and videos
    const videos = useAppSelector((state)=>state.randomVideos.randomVideos);
    const randomChannels = useAppSelector((state)=>state.randomChannels.randomChannels);
    const randomVideosLoading = useAppSelector((state)=>state.randomVideos.loading)
    const isDarkMode = useAppSelector((state)=>state.toggleSlice.darkMode)
    
    //  const [ref, inView] = useInView();

    // get random videos
    const getRandomVideos = async () => {

        try{
            dispatch( randomVideosRequest(true) )
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

    // check auth 

    const checkAuth = async () => {

        try{
            const res = await isAuthenticated()
            console.log(res, "checkauthhh")
            dispatch( setAuth(res.data.auth) )
        }catch(err){
            console.log(err)
        }
    }

 


    return (
        <div>
            <div className={style.home}>
                <p className={style.rand}  >Random videos</p>
                {   randomVideosLoading ? 
                    <RandomVideosSkeleton />
                    :
                    <div className={style.random__videos}>
                        {
                            videos.map((item,index) =>(
                                <div>
                                    <RandonVideo views = {item.views} url={item.url} title={item.title} channelImage={item.channelImage} id = {item._id}  />
                                </div>
                            ))
                        }
                    </div>
                }
                {/* <p className={style.rand}  >Random Channels</p> */}
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
