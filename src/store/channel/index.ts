import { createSlice,PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    createChannelLoading : false
}

const channelSlice = createSlice({
    name : "channelSlice",
    initialState,
    reducers : {
        createChannelSuccess(state,action:PayloadAction<boolean>){
            state.createChannelLoading = action.payload
        },
        createChannelFailure(state,action:PayloadAction<boolean>){
            state.createChannelLoading = action.payload
        },
        createChannelRequest(state,action:PayloadAction<boolean>){
            state.createChannelLoading = action.payload
        }
    }
})

export const { createChannelFailure, createChannelRequest, createChannelSuccess } = channelSlice.actions

export default channelSlice.reducer