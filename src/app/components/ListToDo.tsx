import React from 'react';
import {  AiOutlineCloseCircle } from "react-icons/ai";
import { deleteToDo } from '@/redux/reducer/todoSlider';
import { useAppDispatch, useAppSelector } from '@/redux/store/redux-hooks';

const ListTodo = () => {

	const { todoList } = useAppSelector((state:any) => state.toDo);
	const dispatch = useAppDispatch();

	return <div>
		<ul className='todos'>
			{todoList &&
				todoList.map(({id, content}: any)=> {
					return <li className='grid' key={id}>
					<span className='content'>{content}</span>
					<span className='todo-action'>  
						<AiOutlineCloseCircle className="close" 
						onClick={() => dispatch(deleteToDo({id}))}
						/>
					</span>
				</li>
				})
			}
		</ul>
	</div>;
};

export default ListTodo;
