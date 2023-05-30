import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToDo from './ToDo';
import user from '@testing-library/user-event'

jest.mock("../../redux/store/redux-hooks");

test('renders the heading level 2', () => {
	render(<ToDo />)
		const sectionHeading = screen.getByRole('heading', {
			level: 2,
		})
		expect(sectionHeading).toBeInTheDocument()
	}
)

test('renders the TextFields', () => {
	render(<ToDo />)
	const contentElement = screen.getByRole('textbox')
		expect(contentElement).toBeInTheDocument()
})

test('renders Add Todo button', async () => {
	user.setup()
	render(<ToDo />)
	const addTodoButton = screen.getByRole('button', { name: 'Add Todo' })
	expect(addTodoButton).toBeInTheDocument()
	await user.click(addTodoButton)
})
