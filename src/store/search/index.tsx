import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    videos : [],
    loading : false
}

const searchSlice = createSlice({
    name : "searchSlice",
    initialState,
    reducers : {
        setSearchResults(state,action:PayloadAction<any>){
            state.videos = action.payload
        }
    }
})

export const { setSearchResults } = searchSlice.actions
export default searchSlice.reducer