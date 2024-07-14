import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name:'todo',
    initialState:{
        value:"",
        todoList:["task 1", "task 2"]
    },
    reducers:{
        setValue(state, action){
            console.log("Action", action)
            state.value = action.payload
        },
        addTask(state){
            state.todoList.push(state.value)
            state.value = ""
        }
    }
})


export default todoSlice.reducer
export const {setValue, addTask} = todoSlice.actions