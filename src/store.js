import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './actions/action';

export default configureStore({
    reducer: {
        counter : counterReducer,
    },
})