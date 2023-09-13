import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface kanjiInputState {
    kanjiInput: string;
}

export const kanjiInputSlice = createSlice({
    name: "kanjiInput",
    initialState: {
        value: ""
    },
    reducers: {
        setKanjiInput(state, action: PayloadAction<string>) {
            state.value = action.payload
        }
    }
})

export const { setKanjiInput } = kanjiInputSlice.actions
export default kanjiInputSlice.reducer
export type {kanjiInputState}
