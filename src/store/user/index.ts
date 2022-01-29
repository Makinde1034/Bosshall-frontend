import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import api from '../../api/auth'
import { userStateAction } from '../../types'

const initialState = {
    email :"",
    token : localStorage.getItem("token"),
    errMsg : "",
    loading  : false
}

const userSlice = createSlice({
    name : "user",
    initialState : initialState,
    reducers : {
        setUser(state,action:PayloadAction<userStateAction>){
            state.email = action.payload.email
            state.token = action.payload.token
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