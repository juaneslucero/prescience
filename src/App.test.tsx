import { render, screen } from '@testing-library/react';
import App from './App';

test('renders iconic line', () => {
    render(<App />);
    const pElement = screen.getByText(/THE SPICE MUST FLOW/i);
    expect(pElement).toBeInTheDocument();
});
