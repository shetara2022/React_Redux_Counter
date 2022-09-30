import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import todoReducer from './features/todoSlice'

export const store = configureStore({
    reducer: counterReducer,
    todo: todoReducer
})
