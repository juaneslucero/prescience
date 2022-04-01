import { ALL_HOUSES_NAMES, ENEMY_HOUSES_NAMES } from 'data/Houses';

export type EnemyHouseName = typeof ENEMY_HOUSES_NAMES[number];

export type AllHouseName = typeof ALL_HOUSES_NAMES[number];

export type EnabledHouses = Record<EnemyHouseName, boolean>;

export interface GameState {
    expansionCards: boolean;
    deckTracking: boolean
    houses: EnabledHouses;
}
