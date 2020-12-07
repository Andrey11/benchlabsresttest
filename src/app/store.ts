import { configureStore } from '@reduxjs/toolkit';
import paginatedListReducer from '../components/PaginatedList.reducer';

const store = configureStore({
  reducer: {
    paginatedlist: paginatedListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;