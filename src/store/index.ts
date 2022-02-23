import { configureStore }from '@reduxjs/toolkit'
import userSlice from './user/index'
import ChannelSlice from './channel/index'
import toggleSlice from './toggle/index'
import randomVideos from './randomVideos'


const store = configureStore({
    reducer : {
        userSlice,
        ChannelSlice,
        toggleSlice,
        randomVideos
    }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store