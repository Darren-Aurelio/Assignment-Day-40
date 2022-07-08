import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import PostSection from './view';

test('renders test', async () => {
    render(<PostSection />);

    const clearElement = screen.getByTestId("link");
    expect(screen.queryByTestId("text-input")).toBeInTheDocument();
    userEvent.click(clearElement)
    await waitFor(() => {
        expect(screen.queryByTestId("text-input")).toBe(null)
    })
});