import { createSlice,PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    createChannelLoading : false,
    channel : {
        name : "",
        image : "",
        owner : ""
    }
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
        },
        // getChannel
        setChannel(state,action:PayloadAction<any>){
            state.channel = action.payload
        }
    }
})

export const { createChannelFailure, createChannelRequest, createChannelSuccess, setChannel } = channelSlice.actions

export default channelSlice.reducer