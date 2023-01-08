import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitialState {
    value: number
}

const initialState: IInitialState = {
    value: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        inc(state, action: PayloadAction<number>) {
            state.value += action.payload
        }
    },
})

export default userSlice.reducer