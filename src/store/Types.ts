import { ALL_HOUSES_NAMES, ENEMY_HOUSES_NAMES } from 'data/Houses';
import { TreacheryCard } from 'data/TreacheryCard';

export type EnemyHouseName = typeof ENEMY_HOUSES_NAMES[number];

export type AllHouseName = typeof ALL_HOUSES_NAMES[number];

export type ActiveHouses = Record<EnemyHouseName, boolean>;

export interface GameParams {
    expansionCards: boolean;
    deckTracking: boolean;
    activeHouses: ActiveHouses;
}

export interface House {
    name: AllHouseName;
    cards: TreacheryCard[];
    unknownCards: TreacheryCard[];
    active: boolean;
    showCards: boolean;
}

export type Houses = Record<AllHouseName, House>;

export interface Game {
    started: boolean;
    expansionCards: boolean;
    deckTracking: boolean;
    houses: Houses;
}
