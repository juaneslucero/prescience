import {
    DefenceTreacheryCardType,
    TreacheryCard,
    TreacheryCardKind,
    WeaponTreacheryCardType,
} from 'data/TreacheryCard';

const treacheryCardPriority: Record<TreacheryCardKind, number> = {
    'Weapon/Defence': 0,
    Weapon: 1,
    Defence: 2,
    Special: 3,
    Useless: 4,
};

const weaponTreacheryCardPriority: Record<WeaponTreacheryCardType, number> = {
    'Artillery Strike': 0,
    Lasgun: 1,
    'Poison Tooth': 2,
    'Poison Blade': 3,
    Projectile: 4,
    Poison: 5,
};

const defenceTreacheryCardPriority: Record<DefenceTreacheryCardType, number> = {
    'Shield Snooper': 0,
    Shield: 1,
    Snooper: 2,
};

export const sortTreacheryCard = (a: TreacheryCard, b: TreacheryCard): number => {
    if (a.kind !== b.kind) {
        return treacheryCardPriority[a.kind] - treacheryCardPriority[b.kind];
    }

    if (a.kind === 'Weapon' && b.kind === 'Weapon') {
        if (a.type === b.type) return 0;

        return (
            weaponTreacheryCardPriority[a.type] -
            weaponTreacheryCardPriority[b.type]
        );
    }

    if (a.kind === 'Defence' && b.kind === 'Defence') {
        if (a.type === b.type) return 0;

        return (
            defenceTreacheryCardPriority[a.type] -
            defenceTreacheryCardPriority[b.type]
        );
    }

    return a.name.localeCompare(b.name);
};
