import { cleanup, fireEvent, screen } from '@testing-library/react';
import { ENEMY_HOUSES_NAMES } from 'data/Houses';
import { store } from 'store/Store';
import { renderWithStore } from 'utils/TestUtils';
import { NewGame } from './NewGame';

describe('Tests new game page', () => {
    afterAll(cleanup);

    it('Test renders game parameters checkboxes and start/reset buttons', () => {
        renderWithStore(<NewGame />);

        const expansionCardsCheckbox = screen.getByLabelText(
            'Enable Expansion Cards',
        );
        expect(expansionCardsCheckbox).toBeInTheDocument();
        expect(expansionCardsCheckbox).not.toBeChecked();

        const deckTrackingCheckbox = screen.getByLabelText(
            'Enable Deck Tracking',
        );
        expect(deckTrackingCheckbox).toBeInTheDocument();
        expect(deckTrackingCheckbox).not.toBeChecked();

        ENEMY_HOUSES_NAMES.forEach((house) => {
            const houseCheckbox = screen.getByLabelText(house);
            expect(houseCheckbox).toBeInTheDocument();
            expect(houseCheckbox).not.toBeChecked();
        });

        const startGameButton = screen.getByText('Start Game');
        expect(startGameButton).toBeInTheDocument();

        const resetButton = screen.getByText('Reset');
        expect(resetButton).toBeInTheDocument();
    });

    it('Test start new game with expansion cards and deck tracking disabled', () => {
        renderWithStore(<NewGame />);

        const startGameButton = screen.getByText('Start Game');
        expect(startGameButton).toBeInTheDocument();

        fireEvent.click(startGameButton);

        const state = store.getState();
        expect(state.game.expansionCards).toBe(false);
        expect(state.game.deckTracking).toBe(false);
    });

    it('Test start new game with expansion cards enabled', () => {
        renderWithStore(<NewGame />);

        const expansionCardsCheckbox = screen.getByLabelText(
            'Enable Expansion Cards',
        );
        expect(expansionCardsCheckbox).toBeInTheDocument();

        fireEvent.click(expansionCardsCheckbox);
        expect(expansionCardsCheckbox).toBeChecked();

        const startGameButton = screen.getByText('Start Game');
        expect(startGameButton).toBeInTheDocument();

        fireEvent.click(startGameButton);

        const state = store.getState();
        expect(state.game.expansionCards).toBe(true);
        expect(state.game.deckTracking).toBe(false);
    });

    it('Test start new game with deck tracking enabled', () => {
        renderWithStore(<NewGame />);

        const deckTrackingCheckbox = screen.getByLabelText(
            'Enable Deck Tracking',
        );
        expect(deckTrackingCheckbox).toBeInTheDocument();

        fireEvent.click(deckTrackingCheckbox);
        expect(deckTrackingCheckbox).toBeChecked();

        const startGameButton = screen.getByText('Start Game');
        expect(startGameButton).toBeInTheDocument();

        fireEvent.click(startGameButton);

        const state = store.getState();
        expect(state.game.expansionCards).toBe(false);
        expect(state.game.deckTracking).toBe(true);
    });

    it('Test start new game with expansion cards and deck tracking enabled', () => {
        renderWithStore(<NewGame />);

        const expansionCardsCheckbox = screen.getByLabelText(
            'Enable Expansion Cards',
        );
        expect(expansionCardsCheckbox).toBeInTheDocument();

        fireEvent.click(expansionCardsCheckbox);
        expect(expansionCardsCheckbox).toBeChecked();

        const deckTrackingCheckbox = screen.getByLabelText(
            'Enable Deck Tracking',
        );
        expect(deckTrackingCheckbox).toBeInTheDocument();

        fireEvent.click(deckTrackingCheckbox);
        expect(deckTrackingCheckbox).toBeChecked();

        const startGameButton = screen.getByText('Start Game');
        fireEvent.click(startGameButton);

        const state = store.getState();
        expect(state.game.expansionCards).toBe(true);
        expect(state.game.deckTracking).toBe(true);
    });

    ENEMY_HOUSES_NAMES.forEach((house) => {
        it(`Test start new game with ${house} enabled`, () => {
            renderWithStore(<NewGame />);

            const houseCheckbox = screen.getByLabelText(house);
            expect(houseCheckbox).toBeInTheDocument();

            fireEvent.click(houseCheckbox);
            expect(houseCheckbox).toBeChecked();

            const startGameButton = screen.getByText('Start Game');
            fireEvent.click(startGameButton);

            const state = store.getState();
            expect(state.game.houses[house].active).toBe(true);
        });
    });
});
