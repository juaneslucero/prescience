export const ENEMY_HOUSES_NAMES = [
    'Bene Gesserit',
    'Emperor',
    'Fremen',
    'Harkonnen',
    'Spacing Guild',
    'Ixians',
    'Tleilaxu',
] as const;

export const ALL_HOUSES_NAMES = ['Atreides', ...ENEMY_HOUSES_NAMES] as const;
