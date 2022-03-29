import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import reducer from './contactsReducer';
import { contactsApi } from '';

// const contactsLogger = (store) => (next) => (action) {
//     next(action)
// }

// const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
    reducer: {
        contacts: reducer.сontactsReducer,
        filter: reducer.filterReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(contactsApi.middleware)
    },
    devTools: process.env.NODE_ENV !== 'production', // true
});