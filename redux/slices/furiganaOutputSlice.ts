import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../../features/FuriganaGenerator";

interface furiganaOutputState {
    furiganaOutput: string;
}

export const fetchFurigana = createAsyncThunk(
    "furiganaOutput/fetchData",
    async (query: string) => {
        try {
            const res = await fetchData(query);
            return res
        } catch (error) {
            return "There was an error"
        }
    }
)

export const furiganaOutputSlice = createSlice({
    name: "furiganaOutput",
    initialState: {
        value: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFurigana.fulfilled, (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        });
        builder.addCase(fetchFurigana.rejected, (state, action) => {
            state.value = "error"
        })
    }
})

// export const { setFuriganaOutput } = furiganaOutputSlice.actions
export default furiganaOutputSlice.reducer
export type {furiganaOutputState}