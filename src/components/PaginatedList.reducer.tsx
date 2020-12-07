import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const paginatedListSlice = createSlice({
    name: 'PaginatedListData',
    initialState: {
        rows: [],
        lastLoadedPage: 0,
        loaded: false,
        totalCount: 0,
        errorMessage: "",
        error: false
    },
    reducers: {
        onLoadPageSuccess: (state: any, action: PayloadAction<any>) => {
            state.rows = state.rows.concat(action.payload.rows);
            state.lastLoadedPage = action.payload.lastLoadedPage;
            state.totalCount = action.payload.totalCount;
            state.loaded = action.payload.loaded;
            state.error = false;
        },
        onLoadPageError: (state, action: PayloadAction<any>) => {
            state.errorMessage = action.payload.errorMessage;
            state.loaded = true;
            state.error = true;
        },
        onListReset: state => {
            state.rows = [];
            state.lastLoadedPage = 0;
            state.totalCount = 0;
            state.loaded = false;
            state.error = false;
            state.errorMessage = "";
        }
    },
});

export const { onLoadPageSuccess, onLoadPageError, onListReset } = paginatedListSlice.actions;

export default paginatedListSlice.reducer;
