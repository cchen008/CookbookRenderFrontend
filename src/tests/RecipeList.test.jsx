import { render, screen } from '@testing-library/react'
import RecipeList from '../components/RecipeList';

test("Example 1 renders successfully", () => {
    render(<RecipeList />);

    const element = screen.getByText(/first test/i);

    expect(element).toBeInTheDocument();
})