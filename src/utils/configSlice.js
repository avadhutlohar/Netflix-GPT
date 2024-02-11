import { createSlice } from "@reduxjs/toolkit";


const condigSlice = createSlice({
    name: 'config',

    initialState: {
        lang : 'en',
    },

    reducers: {
        changeLang: (state, action) => {
            state.lang = action.payload;
        }
    }
});

export const { changeLang } = condigSlice.actions;
export default condigSlice.reducer;