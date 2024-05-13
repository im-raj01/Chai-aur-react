import {createSlice,nanoid} from '@reduxjs/toolkit';
// nanoid - generate unique id 

const initialState = {
    todos : [{id: 1, text: "Hello world"}]
}

// function sayHello(){
//     console.log("Hello World")
// }

export const todoSlice = createSlice({
    name: 'todo', // name jo h yhin property ka name hai 
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload // payload apne aap me ek obj hai.
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((temptodo) => temptodo.id !== action.payload)
        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer