import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ENEMY_HOUSES_NAMES } from 'data/Houses';
import { EnemyHouseName, Game, GameParams, Houses } from './Types';

const initiaEnemyHousesState: Houses = ENEMY_HOUSES_NAMES.reduce(
    (acc, house) => ({
        [house]: {
            name: house,
            cards: [],
            unknownCards: [],
            active: false,
            showCards: false,
        },
        ...acc,
    }),
    {} as Houses,
);

const initiaHousesState: Houses = {
    ...initiaEnemyHousesState,
    Atreides: {
        name: 'Atreides',
        cards: [],
        unknownCards: [],
        active: true,
        showCards: false,
    },
};

export const initialState: Game = {
    started: false,
    expansionCards: false,
    deckTracking: false,
    houses: initiaHousesState,
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        startGame: (state, gameParams: PayloadAction<GameParams>) => {
            const { expansionCards, deckTracking, activeHouses } =
                gameParams.payload;
            state.started = true;
            state.expansionCards = expansionCards;
            state.deckTracking = deckTracking;

            Object.entries(activeHouses).forEach(([house, active]) => {
                state.houses[house as EnemyHouseName].active = active;
            });
        },
        resetGame: () => initialState,
    },
});

export const { startGame, resetGame } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
