import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const paginatedListSlice = createSlice({
    name: 'PaginatedListData',
    initialState: {
        rows: [],
        lastLoadedPage: 0,
        loaded: false,
        totalCount: 0
    },
    reducers: {
        onLoadPageSuccess: (state: any, action: PayloadAction<any>) => {
            state.rows = state.rows.concat(action.payload.rows);
            state.lastLoadedPage = action.payload.lastLoadedPage;
            state.totalCount = action.payload.totalCount;
            state.loaded = action.payload.loaded;
        },
        onLoadPageError: (state, action) => {
            state.totalCount = 0;
        },
        onListReset: state => {
            state.rows = [];
            state.lastLoadedPage = 0;
            state.loaded = false;
            state.totalCount = 0;
        }
    },
});

export const { onLoadPageSuccess, onLoadPageError, onListReset } = paginatedListSlice.actions;

export default paginatedListSlice.reducer;
