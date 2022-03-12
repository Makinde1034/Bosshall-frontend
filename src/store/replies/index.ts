import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { reply } from '../../types'

interface initialStateProps  {
    replies : reply[],
    loading : boolean
}

const initialState : initialStateProps = {
    replies : [],
    loading : false
}

const replySlice = createSlice({
    name : "replySlice",
    initialState,
    reducers : {
        setCommentReplies(state,action:PayloadAction<reply[]>){
            state.replies = action.payload
        },
        setCommentRepliesLoading(state,action : PayloadAction<boolean>){
            state.loading = action.payload
        }
    }

})

export const { setCommentReplies, setCommentRepliesLoading } = replySlice.actions
export default replySlice.reducer