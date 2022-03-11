import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { reply } from '../../types'

interface initialStateProps  {
    replies : reply[]
}

const initialState : initialStateProps = {
    replies : []
}

const replySlice = createSlice({
    name : "replySlice",
    initialState,
    reducers : {
        setCommentReplies(state,action:PayloadAction<reply[]>){
            state.replies = action.payload
        }
    }

})

export const { setCommentReplies } = replySlice.actions
export default replySlice.reducer