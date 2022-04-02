import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ENEMY_HOUSES_NAMES } from 'data/Houses';
import { EnabledHouses, EnemyHouseName, GameState } from './Types';

export const initialEnabledHouses: EnabledHouses = ENEMY_HOUSES_NAMES.reduce(
    (acc, house) => ({ [house]: false, ...acc }),
    {} as EnabledHouses,
);

export const initialState: GameState = {
    expansionCards: false,
    deckTracking: false,
    houses: initialEnabledHouses,
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        toggleExpansionCards: (state) => {
            state.expansionCards = !state.expansionCards;
        },
        toggleDeckTracking: (state) => {
            state.deckTracking = !state.deckTracking;
        },
        toggleHouse: (state, house: PayloadAction<EnemyHouseName>) => {
            state.houses[house.payload] = !state.houses[house.payload];
        },
        resetGame: () => initialState,
    },
});

export const {
    toggleExpansionCards,
    toggleDeckTracking,
    toggleHouse,
    resetGame,
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
