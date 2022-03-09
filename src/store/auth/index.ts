import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    isAuth : true
}

const authSlice = createSlice({
    name : "authslice",
    initialState,
    reducers : {
        setAuth(state, action:PayloadAction<boolean>){
            state.isAuth = action.payload
        }
    }
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer
