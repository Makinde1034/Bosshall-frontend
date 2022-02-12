import { createSlice,PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    uploadModal : false
}

const toggleSlice = createSlice({
    name : "uploadSlice",
    initialState,
    reducers : {
        setUploadModal(state,action:PayloadAction<boolean>){
            state.uploadModal = action.payload
        }
    }
})

export const { setUploadModal } = toggleSlice.actions

export default toggleSlice.reducer

