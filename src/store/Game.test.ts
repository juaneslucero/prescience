import { ENEMY_HOUSES_NAMES } from 'data/Houses';
import { gameReducer, initialState, resetGame, startGame } from './Game';
import { ActiveHouses, Game, GameParams } from './Types';

const initialGameParams: GameParams = {
    expansionCards: false,
    deckTracking: false,
    activeHouses: ENEMY_HOUSES_NAMES.reduce(
        (acc, house) => ({ [house]: false, ...acc }),
        {} as ActiveHouses,
    ),
};

describe('Tests startGame reducer', () => {
    it('Test set expansion cards to false', () => {
        const params: GameParams = {
            ...initialGameParams,
            expansionCards: false,
        };
        const newState: Game = gameReducer(initialState, startGame(params));
        expect(newState).toEqual({
            ...initialState,
            started: true,
            expansionCards: false,
        });
    });

    it('Test set expansion cards to true', () => {
        const params: GameParams = {
            ...initialGameParams,
            expansionCards: true,
        };
        const newState: Game = gameReducer(initialState, startGame(params));
        expect(newState).toEqual({
            ...initialState,
            started: true,
            expansionCards: true,
        });
    });

    it('Test set deck tracking to false', () => {
        const params: GameParams = {
            ...initialGameParams,
            deckTracking: false,
        };
        const newState: Game = gameReducer(initialState, startGame(params));
        expect(newState).toEqual({
            ...initialState,
            started: true,
            deckTracking: false,
        });
    });

    it('Test set deck tracking to true', () => {
        const params: GameParams = {
            ...initialGameParams,
            deckTracking: true,
        };
        const newState: Game = gameReducer(initialState, startGame(params));
        expect(newState).toEqual({
            ...initialState,
            started: true,
            deckTracking: true,
        });
    });

    it('Test set Atreides as active', () => {
        const newState: Game = gameReducer(
            initialState,
            startGame(initialGameParams),
        );
        expect(newState).toEqual({
            ...initialState,
            started: true,
            houses: {
                ...initialState.houses,
                Atreides: {
                    ...initialState.houses.Atreides,
                    active: true,
                },
            },
        });
    });

    ENEMY_HOUSES_NAMES.forEach((house) => {
        it(`Test set ${house} as inactive`, () => {
            const params: GameParams = {
                ...initialGameParams,
                activeHouses: {
                    ...initialGameParams.activeHouses,
                    [house]: false,
                },
            };
            const newState: Game = gameReducer(initialState, startGame(params));
            expect(newState).toEqual({
                ...initialState,
                started: true,
                houses: {
                    ...initialState.houses,
                    [house]: {
                        ...initialState.houses[house],
                        active: false,
                    },
                },
            });
        });

        it(`Test toggle ${house} as active`, () => {
            const params: GameParams = {
                ...initialGameParams,
                activeHouses: {
                    ...initialGameParams.activeHouses,
                    [house]: true,
                },
            };
            const newState: Game = gameReducer(initialState, startGame(params));
            expect(newState).toEqual({
                ...initialState,
                started: true,
                houses: {
                    ...initialState.houses,
                    [house]: {
                        ...initialState.houses[house],
                        active: true,
                    },
                },
            });
        });
    });
});

describe('Tests resetGame reducer', () => {
    it('Test reset game', () => {
        const oldState: Game = {
            ...initialState,
            expansionCards: true,
            deckTracking: true,
            started: true,
        };
        const newState = gameReducer(oldState, resetGame());
        expect(newState).toEqual(initialState);
    });
});
