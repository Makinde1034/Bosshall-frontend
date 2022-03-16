import React,{useState} from 'react'
import style from './mobileSearch.module.scss'
import search from '../../assets/img/Search.png'
import cancel from '../../assets/img/x.png'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toggleSearchNav } from '../../store/toggle'
import { createSearchParams, useNavigate } from 'react-router-dom'


function MobileSearch() {

    const isSearchNavOpen = useAppSelector((state)=>state.toggleSlice.searchNav)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const [ searchParam, setSearchParams ] = useState({search_query : ""})

    const goToSearchPage = (e:any) => {
		e.preventDefault();

        navigate({

            pathname: "search",
            search: `?${createSearchParams(searchParam)}`
        });

    

		
    }

  return (
    <div className={ isSearchNavOpen ? `${style.mobileSearch} ${style.mobileSearch__active}` : `${style.mobileSearch}` }>
        <nav>
            <form onSubmit={(e)=>goToSearchPage(e)} action="">
                <img onClick={()=>dispatch( toggleSearchNav(false) )} className={style.cancel} src={cancel} alt="" />
                <input  onChange={(e)=>setSearchParams({search_query : e.target.value})} type="text" />
                <img src={search} alt="" />
            </form>
        </nav>
    </div>
  )
}

export default MobileSearch