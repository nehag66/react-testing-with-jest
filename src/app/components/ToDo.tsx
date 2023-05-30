import React, { useState } from 'react';
import { addToDo } from '@/redux/reducer/todoSlider';
import { Button, TextField } from '@mui/material';
import { useAppDispatch } from '@/redux/store/redux-hooks';

const AddTodo = () => {
	const dispatch = useAppDispatch();
	const [ state, setState ] = useState({
		content: '',
		contentError: ''
	});
	const handleChange = (e: any) =>{
		setState({...state,
			[e.target.name]: e.target.value,
			[`${e.target.name}Error`]: null });
	}
	const add = () =>{
		if(content === ''){
		setState({...state, 
			contentError: 'You must write something!'});
		return;
		}
		dispatch(addToDo({newContent: content}));
		setState({...state, content: ''});
	}
  	const { content, contentError } = state;

   	return <div className='form'>
		<h2>What is your plan for today?</h2>
		<TextField
			type='text'
			id="standard-basic"
			label="Todo"
			value={content}
			name='content' 
			onChange={handleChange}
			variant="standard"
		/>
		<Button variant="contained" type='button' className='button' onClick={add}>Add Todo</Button>
		{contentError ? 
			<div className='error'>{contentError}</div>: null}
    </div>;
};

export default AddTodo;
