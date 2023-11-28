import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import {authApi} from "@/redux/api/authApi";

export const store = configureStore({
    reducer: {
        auth: userReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;