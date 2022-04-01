import { ENEMY_HOUSES_NAMES } from 'data/Houses';
import {
    gameReducer,
    initialState,
    toggleDeckTracking,
    toggleExpansionCards,
    toggleHouse,
} from './Game';
import { GameState } from './Types';

describe('Tests toggleExpansionCards reducer', () => {
    it('Test toggle expansion cards: false -> true', () => {
        const oldstate: GameState = { ...initialState, expansionCards: false };
        const newState: GameState = gameReducer(
            oldstate,
            toggleExpansionCards(),
        );
        expect(newState).toEqual({ ...oldstate, expansionCards: true });
    });

    it('Test toggle expansion cards: true -> false', () => {
        const oldstate: GameState = { ...initialState, expansionCards: true };
        const newState: GameState = gameReducer(
            oldstate,
            toggleExpansionCards(),
        );
        expect(newState).toEqual({ ...oldstate, expansionCards: false });
    });
});

describe('Tests toggleDeckTracking reducer', () => {
    it('Test toggle deck tracking: false -> true', () => {
        const oldstate: GameState = { ...initialState, deckTracking: false };
        const newState: GameState = gameReducer(oldstate, toggleDeckTracking());
        expect(newState).toEqual({ ...oldstate, deckTracking: true });
    });

    it('Test toggle deck tracking: true -> false', () => {
        const oldstate: GameState = { ...initialState, deckTracking: true };
        const newState: GameState = gameReducer(oldstate, toggleDeckTracking());
        expect(newState).toEqual({ ...oldstate, deckTracking: false });
    });
});

describe('Tests toggleHouse reducer', () => {
    ENEMY_HOUSES_NAMES.forEach((house) => {
        it(`Test toggle ${house}: false -> true`, () => {
            const oldstate: GameState = {
                ...initialState,
                houses: { ...initialState.houses, [house]: false },
            };
            const newState: GameState = gameReducer(
                oldstate,
                toggleHouse(house),
            );
            expect(newState).toEqual({
                ...initialState,
                houses: { ...initialState.houses, [house]: true },
            });
        });

        it(`Test toggle ${house}: true -> false`, () => {
            const oldstate: GameState = {
                ...initialState,
                houses: { ...initialState.houses, [house]: true },
            };
            const newState: GameState = gameReducer(
                oldstate,
                toggleHouse(house),
            );
            expect(newState).toEqual({
                ...initialState,
                houses: { ...initialState.houses, [house]: false },
            });
        });
    });
});
