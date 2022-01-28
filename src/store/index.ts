import { configureStore }from '@reduxjs/toolkit'
import userSlice from './user/index'


const store = configureStore({
    reducer : {
        userSlice
    }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store