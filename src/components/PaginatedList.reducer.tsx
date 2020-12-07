import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaginatedListState, PayloadDataType, PayloadErrorType } from './PaginatedList.types';

const MAX_ROWS: number = 20;

const initialState: PaginatedListState = {
    rows: [],
    lastLoadedPage: 0,
    loaded: false,
    totalCount: 0,
    errorMessage: "",
    error: false
};

export const paginatedListSlice = createSlice({
    name: 'PaginatedListData',
    initialState,
    reducers: {
        onLoadPageSuccess: (state: any, action: PayloadAction<PayloadDataType>) => {
            state.rows = state.rows.concat(action.payload.rows);
            state.lastLoadedPage = action.payload.lastLoadedPage;
            state.totalCount = action.payload.totalCount;
            state.loaded = state.rows.length >= action.payload.totalCount || state.rows.length >= MAX_ROWS;
            state.error = false;
        },
        onLoadPageError: (state, action: PayloadAction<PayloadErrorType>) => {
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
