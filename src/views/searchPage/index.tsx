import React,{useEffect} from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import videoApi from '../../api/video'
import style from './index.module.scss'
import filter from '../../assets/img/filter.png'
import { setSearchResults } from '../../store/search'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { timeSince  } from '../../utils/date/getTimeAdded'

function SearchPage() {

    const [ searchParams, setSearchParams ] = useSearchParams()

    const text =  searchParams.get("search_query")?.toString()
    const searchResult = useAppSelector((state)=>state.searchReducer.videos);
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    useEffect(()=>{
        search()

    },[text])

    const search = async () => {
        const data = { 
           text : text
        }
   
       const res = await videoApi.searchVideo(data)   
       dispatch( setSearchResults(res.data) ) 
       console.log(res)
    }

    const openVideo = (id:string) => {
        navigate(`/dashboard/video/${id}`);
    }


    return (
        <div className={style.search}>
            <nav>
                <img src={filter} alt="" />
            </nav>
            <div className={style.search__videos}>
                {   searchResult.length === 0 ? 
                    (<p>No results found</p>) :
                    searchResult.map((item, index)=>(
                        <div className={style.wrap}>
                            <div onClick={()=>openVideo(item._id)} className={style.video}>
                                <video src={item.url}></video>
                            </div>
                            <div className={style.text}>
                                <p onClick={()=>openVideo(item._id)} className={style.title}>{item.title}</p>
                                <p className={style.channel}>{item.channelName}</p>
                                <p className={style.time}>{timeSince(new Date(item.time))}  ago</p>
                                <p className={style.time}>{item.views} views</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchPage