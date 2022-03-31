import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { filterReducer } from './filterReducer';
import { сontactsApi } from './contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [сontactsApi.reducerPath]: сontactsApi.reducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(сontactsApi.middleware);
    },
    devTools: process.env.NODE_ENV !== 'production', // true
});
setupListeners(store.dispatch)