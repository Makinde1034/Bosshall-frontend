import { configureStore }from '@reduxjs/toolkit'
import userSlice from './user/index'
import ChannelSlice from './channel/index'
import toggleSlice from './toggle/index'
import randomVideos from './randomVideos'
import randomChannels from './randomChannels'
import commentReducer from './comments/'


const store = configureStore({
    
    reducer : {
        userSlice,
        ChannelSlice,
        toggleSlice,
        randomVideos,
        randomChannels,
        commentReducer
    }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store