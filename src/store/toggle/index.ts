import { createSlice,PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    uploadModal : false,
    sideNavActive : false,
    searchNav : false
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
        },
        toggleSearchNav(state,action:PayloadAction<boolean>){
            state.searchNav = action.payload
        }
    }
})

export const { setUploadModal, toggleSideNav, toggleSearchNav } = toggleSlice.actions

export default toggleSlice.reducer

