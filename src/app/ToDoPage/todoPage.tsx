import React from 'react';
import AddTodo from '../components/ToDo';
import ListTodo from '../components/ListToDo';

const TodoPage = () => {
	return (
		<div>
			<AddTodo />
      		<ListTodo />
		</div>
	);
};

export default TodoPage;
