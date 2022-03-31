interface BaseTreacheryCard {
    name: string;
    kind: TreacheryCardKind;
}

export type TreacheryCardKind =
    | 'Weapon'
    | 'Weapon/Defence'
    | 'Defence'
    | 'Useless'
    | 'Special';

export interface WeaponTreacheryCard extends BaseTreacheryCard {
    kind: 'Weapon';
    type: WeaponTreacheryCardType;
}

export type WeaponTreacheryCardType =
    | 'Projectile'
    | 'Poison'
    | 'Lasgun'
    | 'Artillery Strike'
    | 'Poison Tooth'
    | 'Poison Blade';

export interface WeaponDefenceTreacheryCard extends BaseTreacheryCard {
    kind: 'Weapon/Defence';
    type: WeaponDefenceTreacheryCardType;
}

export type WeaponDefenceTreacheryCardType = 'Weirding Way' | 'Chemistry';

export interface DefenceTreacheryCard extends BaseTreacheryCard {
    kind: 'Defence';
    type: DefenceTreacheryCardType;
}

export type DefenceTreacheryCardType = 'Shield' | 'Snooper' | 'Shield Snooper';

export interface UselessTreacheryCard extends BaseTreacheryCard {
    kind: 'Useless';
}

export interface SpecialTreacheryCard extends BaseTreacheryCard {
    kind: 'Special';
    type: SpecialTreacheryCardType;
}

export type SpecialTreacheryCardType =
    | 'Truthtrance'
    | 'Tleilaxu Ghola'
    | 'Karama'
    | 'Cheap Hero'
    | 'Hajr'
    | 'Weather Control'
    | 'Family Atomics'
    | 'Harvester'
    | 'Thumper'
    | 'Amal';

export type TreacheryCard =
    | WeaponTreacheryCard
    | WeaponDefenceTreacheryCard
    | DefenceTreacheryCard
    | UselessTreacheryCard
    | SpecialTreacheryCard;
