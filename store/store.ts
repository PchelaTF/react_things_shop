import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import userReducer from "./slices/userReducer";

const mainReducer = combineReducers({
    userReducer,
})

const makeStore = () => {
    return configureStore({
        reducer: {
            mainReducer
        },
        devTools: true
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<typeof mainReducer>
export type AppDispatch = AppStore["dispatch"]
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export const wrapper = createWrapper<AppStore>(makeStore)