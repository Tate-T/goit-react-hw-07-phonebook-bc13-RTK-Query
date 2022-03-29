import { configureStore } from "@reduxjs/toolkit";
import { сontactsReducer, filterReducer, isLoadingReducer } from './contactsReducer';

// import logger from "redux-logger";
// const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
    reducer: {
        contacts: сontactsReducer,
        filter: filterReducer,
        isLoading: isLoadingReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
    },
    devTools: process.env.NODE_ENV !== 'production', // true
});