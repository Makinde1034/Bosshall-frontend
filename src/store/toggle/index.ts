import { createSlice,PayloadAction } from '@reduxjs/toolkit'

const initialState = {

    uploadModal : false,
    sideNavActive : false,
    searchNav : false,
    deleteModal : false,
    modalBackdrop : false,
    videoDeleteId : "",
    darkMode : false
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
        },
        toggleDeleteModal(state,action:PayloadAction<boolean>){
            state.deleteModal = action.payload
            state.modalBackdrop = action.payload
        },
        setVideoDeleteId(state,action:PayloadAction<string>){
            state.videoDeleteId = action.payload
        }
    }
})

export const { 
    setUploadModal,
    toggleSideNav, 
    toggleSearchNav, 
    toggleDeleteModal,
    setVideoDeleteId
} = toggleSlice.actions

export default toggleSlice.reducer

