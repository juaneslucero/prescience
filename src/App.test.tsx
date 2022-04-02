import { render, screen } from '@testing-library/react';
import App from './App';

it('Test renders iconic line', () => {
    render(<App />);
    const pElement = screen.getByText(/THE SPICE MUST FLOW/i);
    expect(pElement).toBeInTheDocument();
});

describe('Tests conditionally rendering if in development', () => {
    const OLD_ENV = process.env;

    beforeAll(() => {
        jest.resetModules();
        process.env = { ...OLD_ENV };
    });

    afterAll(() => {
        process.env = OLD_ENV;
    });

    it('Test renders if it is development view', () => {
        //@ts-ignore
        process.env.NODE_ENV = 'development';
        render(<App />);
        const pElement = screen.getByText(/This is the development view./i);
        expect(pElement).toBeInTheDocument();
    });

    it('Test it does not render if it is not development view', () => {
        //@ts-ignore
        process.env.NODE_ENV = 'production';
        render(<App />);
        const pElement = screen.queryByText('This is the development view.');
        expect(pElement).toBe(null);
    });
});
