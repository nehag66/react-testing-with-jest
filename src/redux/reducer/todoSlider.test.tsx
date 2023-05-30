import reducer, { addToDo, deleteToDo } from './todoSlider'

test('should return the initial state', () => {
	expect(reducer(undefined, { type: undefined })).toEqual({"todoList": [
		{"content": "Learn React Testing", "id": 1},
		{"content": "Have a meeting", "id": 2}
	]})
})

test('should handle a todo being added to an empty list', () => {
	const previousState = {"todoList": [
	]}

	expect(reducer(previousState, addToDo('Run the tests'))).toEqual(
		{"todoList": [
			{"content": undefined, "id": 0}]
		}
	)
})

test('should handle a todo being added to an existing list', () => {
	const previousState = {"todoList": [
		{"content": "Learn React Testing", "id": 1},
		{"content": "Have a meeting", "id": 2}
	]}

  expect(reducer(previousState, addToDo('Use Redux'))).toEqual(
	{"todoList": [
		{"content": "Learn React Testing", "id": 1},
		{"content": "Have a meeting", "id": 2},
		{"content": undefined, "id": 3},
	]}
)
})