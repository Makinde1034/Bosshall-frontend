import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import api from '../../api/auth'
import { userStateAction } from '../../types'
import { saveUserImage } from '../../helpers/storage'

const initialState = {
    userImg :localStorage.getItem("img") || "",
    token : localStorage.getItem("token"),
    errMsg : "",
    loading  : false,
    updateProfileLoading : false,
    _id : localStorage.getItem("userId") || ""
    
}

const userSlice = createSlice({
    name : "user",
    initialState : initialState,
    reducers : {
        setUser(state,action:PayloadAction<any>){
            state.userImg =  action.payload.userImg
            state.token = action.payload.token
            state._id = action.payload._id
            saveUserImage(action.payload.userImg)
            state.loading = false
        },
        setUserId(state,action:PayloadAction<string>){ //temporary
            state._id = action.payload
        },
        setError(state,action:PayloadAction<string>){
            state.errMsg = action.payload
            
        },
        authRequest(state,action:PayloadAction<boolean>){
            state.loading = action.payload
        },
        authFailure(state,action:PayloadAction<boolean>){
            state.loading = action.payload
        },
        authSuccess(state, action:PayloadAction<boolean>){
            state.loading = action.payload
        },

        // update user profile
        updateProfileRequest(state,action:PayloadAction<boolean>){
            state.updateProfileLoading = action.payload
        },
        updateProfileSuccess(state,action:PayloadAction<boolean>){
            state.updateProfileLoading = action.payload
        },
        updateProfileFailure(state,action:PayloadAction<boolean>){
            state.updateProfileLoading = action.payload
        }
        
    }
})

export const { setUser,
    setError,
    authRequest,
    authFailure,
    authSuccess,
    updateProfileRequest,
    updateProfileFailure,
    updateProfileSuccess, 
    setUserId 
} = userSlice.actions

export default userSlice.reducer