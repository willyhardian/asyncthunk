import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import logger from 'redux-logger'
import counterReducer from '../features/counter/counterSlice'
export const store = configureStore({
    reducer: {
        users: userReducer,
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})