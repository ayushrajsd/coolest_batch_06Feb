import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"
import todoReducer from "./todoSlice"
import paginationSlice from './paginationSlice'
import userSlice from "./User/userSlice"

const store = configureStore({
    reducer:{
        counter: counterReducer,
        todo: todoReducer,
        pagination:paginationSlice.reducer,
        user:userSlice.reducer
    }
})

export default store