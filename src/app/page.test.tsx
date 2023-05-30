import { render, screen } from '@testing-library/react';
import Home from './page';
import '@testing-library/jest-dom';
jest.mock("../redux/store/redux-hooks");
describe('Home', () => {
	test('renders a heading', () => {
		render(<Home />)
		const sectionHeading = screen.getByRole('heading', {
			level: 2,
		})
		expect(sectionHeading).toBeInTheDocument()
	})
});
