import {configureStore} from '@reduxjs/toolkit'
import tasksReducer from './components/slices/tasksSlice'

export const store = configureStore({
    reducer:{
        tasks:tasksReducer
    }
})