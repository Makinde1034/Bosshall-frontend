import { createSlice,PayloadAction } from '@reduxjs/toolkit'

interface videos{
    url : string,
    title : string
}
interface channel{
    name : string,
    image : string,
    owner : string,
    _id : string,
    videos :videos[]
}
interface channelProps{
    createChannelLoading : boolean,
    channel : channel
}


const initialState : channelProps = {
    createChannelLoading : false,
    channel : {
        name : "",
        image : "",
        owner : "",
        _id : "",
        videos : []
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