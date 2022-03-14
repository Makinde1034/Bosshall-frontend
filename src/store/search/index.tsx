import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { video } from '../../types'

interface searchProps {
    videos : video[],
    loading : boolean
}

const initialState : searchProps = {
    videos : [],
    loading : false
}

const searchSlice = createSlice({
    name : "searchSlice",
    initialState,
    reducers : {
        setSearchResults(state,action:PayloadAction<any>){
            state.videos = action.payload
        }
    }
})

export const { setSearchResults } = searchSlice.actions
export default searchSlice.reducer