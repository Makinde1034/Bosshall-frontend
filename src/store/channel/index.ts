import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import type { video } from '../../types'

// interface videos{
//     url : string,
//     title : string
// }
interface channel{
    name : string,
    image : string,
    owner : string,
    _id : string,
    videos :video[],
    subscribers : number
}
interface channelProps{
    createChannelLoading : boolean,
    channel : channel
    channels : channel[]
}


const initialState : channelProps = {
    createChannelLoading : false,
    channel : {
        name : "",
        image : "",
        owner : "",
        _id : "",
        videos : [],
        subscribers : 0
    },
    channels : []
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
        // get Single Channel
        setChannel(state,action:PayloadAction<any>){
            state.channel = action.payload
        },
        // get channels fro a user
        setUserChannels(state,action:PayloadAction<any>){
            state.channels = action.payload
        }
        
    }
})

export const { createChannelFailure, createChannelRequest, createChannelSuccess, setChannel, setUserChannels } = channelSlice.actions

export default channelSlice.reducer