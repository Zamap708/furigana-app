import { configureStore } from '@reduxjs/toolkit';
import kanjiInputReducer from './slices/kanjiInputSlice'
import furiganaOutputReducer from './slices/furiganaOutputSlice';

interface RootState {
    kanjiInput: ReturnType<typeof kanjiInputReducer>
    furiganaOutput: ReturnType<typeof furiganaOutputReducer>
}

export const store = configureStore({
    reducer: {
        kanjiInput: kanjiInputReducer,
        furiganaOutput: furiganaOutputReducer
    }
})

export type { RootState }
export type AppDispatch = typeof store.dispatch