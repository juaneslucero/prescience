import { configureStore } from '@reduxjs/toolkit';
import { gameReducer } from './Game';

export const store = configureStore({
    reducer: {
        game: gameReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispactch = typeof store.dispatch;
