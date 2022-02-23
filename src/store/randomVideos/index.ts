import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { video } from '../../types/index'

interface initialStateProps {
    randomVideos : video[]
}


const initialState : initialStateProps  = {
    randomVideos : []
    
}

const randomVideosSlice = createSlice({

    name : "randomVideosSlice",
    initialState,
    reducers : {
        setRandomVideos(state,action:PayloadAction<video[]>){
            state.randomVideos = action.payload
        }
    }
})

export const { setRandomVideos } = randomVideosSlice.actions
export default randomVideosSlice.reducer