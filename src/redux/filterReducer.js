import { createReducer } from "@reduxjs/toolkit";
import { addToFilterState } from './filterActions';

export const filterReducer = createReducer('', {
    [addToFilterState]: (_, { payload }) => payload,
});
