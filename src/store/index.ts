import { configureStore }from '@reduxjs/toolkit'
import userSlice from './user/index'
import ChannelSlice from './channel/index'
import toggleSlice from './toggle/index'
import randomVideos from './randomVideos'
import randomChannels from './randomChannels'
import commentReducer from './comments/'
import RelatedVideosReducer from './relatedVideos'
import authReducer from './auth'
import replyReducer from './replies'


const store = configureStore({
    
    reducer : {
        userSlice,
        ChannelSlice,
        toggleSlice,
        randomVideos,
        randomChannels,
        commentReducer,
        RelatedVideosReducer,
        authReducer,
        replyReducer
    }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store