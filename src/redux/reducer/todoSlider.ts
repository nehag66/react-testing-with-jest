import { createSlice } from '@reduxjs/toolkit'

export const toDoSlider = createSlice({
	name: 'toDo',
	initialState: {
	todoList:   [
		{ id: 1, content: "Learn React Testing" },
		{ id: 2, content: "Have a meeting"}
	]
	},
	reducers: {
	addToDo: (state, action) => {
		let newTodoList = {
			id: state.todoList.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
			content: action.payload.newContent
		}
		state.todoList.push(newTodoList);
	},
	deleteToDo: (state, action) => {
		let { todoList } = state;
		state.todoList = todoList.filter((item) => 
			item.id !==action.payload.id);
	}
	},
})
// Action creators are generated for each case reducer function
export const { addToDo, deleteToDo } = toDoSlider.actions
export default toDoSlider.reducer;