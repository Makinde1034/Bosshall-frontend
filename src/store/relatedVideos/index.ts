import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { video } from '../../types'

interface relatedVideosProps {
    relatedVideos : video[]
}

const initialState : relatedVideosProps = {
    relatedVideos : []
}

const relatedVideosSlice = createSlice({
    name : "relatedVideos",
    initialState,
    reducers : {
        setRelatedVideos(state, action:PayloadAction<any>){
            state.relatedVideos = action.payload
        }
    }

})

export const  { setRelatedVideos } = relatedVideosSlice.actions
export default relatedVideosSlice.reducer