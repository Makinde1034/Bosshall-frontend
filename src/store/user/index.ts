import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import api from '../../api/auth'
import { userStateAction } from '../../types'
import { saveUserImage } from '../../helpers/storage'

const initialState = {
    userImg :localStorage.getItem("img") || "",
    token : localStorage.getItem("token"),
    errMsg : "",
    loading  : false
}

const userSlice = createSlice({
    name : "user",
    initialState : initialState,
    reducers : {
        setUser(state,action:PayloadAction<any>){
            state.userImg =  action.payload.userImg
            state.token = action.payload.token
            saveUserImage(action.payload.userImg)
        },
        setError(state,action:PayloadAction<string>){
            state.errMsg = action.payload
            
        },
        authRequest(state,action:PayloadAction<boolean>){
            state.loading = action.payload
        },
        authFailure(state,action:PayloadAction<boolean>){
            state.loading = action.payload
        }
        
    }
})

export const { setUser,setError,authRequest,authFailure } = userSlice.actions

export default userSlice.reducer