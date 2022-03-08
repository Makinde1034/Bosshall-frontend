import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { channel } from '../../types'



interface initialStateProps{
    randomChannels : channel[]
}


const initialState : initialStateProps = {

    randomChannels : []
}

const randomChannelsSlice = createSlice({
    name : "randomChannelSlice",
    initialState,
    reducers : {
        setRandomChannels(state,action:PayloadAction<channel[]>){
            state.randomChannels = action.payload
        }
    }
})

export const { setRandomChannels } = randomChannelsSlice.actions
export default randomChannelsSlice.reducer



