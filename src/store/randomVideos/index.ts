import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { video } from '../../types/index'

interface initialStateProps {
    randomVideos : video[],
    loading : Boolean
}


const initialState : initialStateProps  = {
    randomVideos : [],
    loading : false
    
}

const randomVideosSlice = createSlice({

    name : "randomVideosSlice",
    initialState,
    reducers : {
        randomVideosRequest(state,action:PayloadAction<boolean>){
            state.loading = action.payload
        },
        setRandomVideos(state,action:PayloadAction<video[]>){
            state.randomVideos = action.payload
            state.loading  = false
        }
    }
})

export const { setRandomVideos, randomVideosRequest } = randomVideosSlice.actions
export default randomVideosSlice.reducer