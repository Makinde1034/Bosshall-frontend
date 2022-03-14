import { createSlice,PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    uploadModal : false,
    sideNavActive : false
}

const toggleSlice = createSlice({
    name : "uploadSlice",
    initialState,
    reducers : {
        setUploadModal(state,action:PayloadAction<boolean>){
            state.uploadModal = action.payload
        },

        toggleSideNav(state,action:PayloadAction<boolean>){
            state.sideNavActive = action.payload
        }
    }
})

export const { setUploadModal, toggleSideNav } = toggleSlice.actions

export default toggleSlice.reducer

