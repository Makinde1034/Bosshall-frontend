import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { comment } from '../../types'



interface commentsProps {
    comments : comment[]
}

const initialState : commentsProps = {
    comments : []
}

const commentSlice = createSlice({
    name : "commentSlice",
    initialState,
    reducers : {
        setVideoComments(state, action:PayloadAction<comment[]>){
            state.comments = action.payload
        }
    }
})

export const { setVideoComments } = commentSlice.actions
export default commentSlice.reducer