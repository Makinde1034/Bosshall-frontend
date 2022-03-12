import React,{useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import videoApi from '../../api/video'
import style from './index.module.scss'
import filter from '../../assets/img/filter.png'

function SearchPage() {

    const [ searchParams, setSearchParams ] = useSearchParams()

    const text =  searchParams.get("search_query")?.toString()

    useEffect(()=>{
        search()

    },[text])

    const search = async () => {
        const data = { 
           text : text
        }
       console.log(data)
       const res = await videoApi.searchVideo(data)     
       console.log(res)
    }


    return (
        <div className={style.search}>
            <nav>
                <img src={filter} alt="" />
            </nav>
            <div className={style.search__videos}>
                
            </div>
        </div>
    )
}

export default SearchPage