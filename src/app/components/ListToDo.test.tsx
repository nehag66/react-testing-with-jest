import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListTodo from './ListToDo';
import { useAppSelector } from '@/redux/store/redux-hooks';
import { testUseAppSelector } from '@/redux/store/test-app-selector';

jest.mock("../../redux/store/redux-hooks");

describe('todo list', () => {
	beforeEach(() => {
		const appUseSelector: any = useAppSelector;
		appUseSelector.mockImplementation(testUseAppSelector)
	});

	it("should render list of todos", () => {
		render(<ListTodo />)
		const list = screen.getByRole("list")
		expect(list).toBeInTheDocument()
		const { queryAllByRole } = within(list)
		const items = queryAllByRole("listitem")
		items.forEach(a => expect(a).toBeInTheDocument())
		expect(items.length).toBe(0)
	  })

})
