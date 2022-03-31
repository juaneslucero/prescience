import { sortTreacheryCard } from './TreacheryCard';
import { TreacheryCard } from '../data/TreacheryCard';

describe('Tests treachery card sorting', () => {
    it('Test weapon treachery sorting', () => {
        const unstorted: TreacheryCard[] = [
            { name: 'Projectile', kind: 'Weapon', type: 'Projectile' },
            { name: 'Poison', kind: 'Weapon', type: 'Poison' },
            { name: 'Lasgun', kind: 'Weapon', type: 'Lasgun' },
            {
                name: 'Artillery Strike',
                kind: 'Weapon',
                type: 'Artillery Strike',
            },
            { name: 'Poison Tooth', kind: 'Weapon', type: 'Poison Tooth' },
            { name: 'Poison Blade', kind: 'Weapon', type: 'Poison Blade' },
        ];

        const sorted: TreacheryCard[] = [
            {
                name: 'Artillery Strike',
                kind: 'Weapon',
                type: 'Artillery Strike',
            },
            { name: 'Lasgun', kind: 'Weapon', type: 'Lasgun' },
            { name: 'Poison Tooth', kind: 'Weapon', type: 'Poison Tooth' },
            { name: 'Poison Blade', kind: 'Weapon', type: 'Poison Blade' },
            { name: 'Projectile', kind: 'Weapon', type: 'Projectile' },
            { name: 'Poison', kind: 'Weapon', type: 'Poison' },
        ];

        const actual: TreacheryCard[] = [...unstorted].sort(sortTreacheryCard);

        expectToBeSorted(actual, sorted);
    });

    it('Test defence treachery sorting', () => {
        const unstorted: TreacheryCard[] = [
            { name: 'Shield', kind: 'Defence', type: 'Shield' },
            { name: 'Snooper', kind: 'Defence', type: 'Snooper' },
            {
                name: 'Shield Snooper',
                kind: 'Defence',
                type: 'Shield Snooper',
            },
        ];

        const sorted: TreacheryCard[] = [
            {
                name: 'Shield Snooper',
                kind: 'Defence',
                type: 'Shield Snooper',
            },
            { name: 'Shield', kind: 'Defence', type: 'Shield' },
            { name: 'Snooper', kind: 'Defence', type: 'Snooper' },
        ];

        const actual: TreacheryCard[] = [...unstorted].sort(sortTreacheryCard);

        expectToBeSorted(actual, sorted);
    });

    it('Test weapon/defence treachery sorting', () => {
        const unstorted: TreacheryCard[] = [
            {
                name: 'Weirding Way',
                kind: 'Weapon/Defence',
                type: 'Weirding Way',
            },
            { name: 'Chemistry', kind: 'Weapon/Defence', type: 'Chemistry' },
        ];

        const sorted: TreacheryCard[] = [
            { name: 'Chemistry', kind: 'Weapon/Defence', type: 'Chemistry' },
            {
                name: 'Weirding Way',
                kind: 'Weapon/Defence',
                type: 'Weirding Way',
            },
        ];

        const actual: TreacheryCard[] = [...unstorted].sort(sortTreacheryCard);

        expectToBeSorted(actual, sorted);
    });

    it('Test special treachery sorting', () => {
        const unstorted: TreacheryCard[] = [
            { name: 'Truthtrance', kind: 'Special', type: 'Truthtrance' },
            { name: 'Tleilaxu Ghola', kind: 'Special', type: 'Tleilaxu Ghola' },
            { name: 'Karama', kind: 'Special', type: 'Karama' },
            { name: 'Cheap Hero', kind: 'Special', type: 'Cheap Hero' },
            { name: 'Hajr', kind: 'Special', type: 'Hajr' },
            {
                name: 'Weather Control',
                kind: 'Special',
                type: 'Weather Control',
            },
            { name: 'Family Atomics', kind: 'Special', type: 'Family Atomics' },
            { name: 'Harvester', kind: 'Special', type: 'Harvester' },
            { name: 'Thumper', kind: 'Special', type: 'Thumper' },
            { name: 'Amal', kind: 'Special', type: 'Amal' },
        ];

        const sorted: TreacheryCard[] = [
            { name: 'Amal', kind: 'Special', type: 'Amal' },
            { name: 'Cheap Hero', kind: 'Special', type: 'Cheap Hero' },
            { name: 'Family Atomics', kind: 'Special', type: 'Family Atomics' },
            { name: 'Hajr', kind: 'Special', type: 'Hajr' },
            { name: 'Harvester', kind: 'Special', type: 'Harvester' },
            { name: 'Karama', kind: 'Special', type: 'Karama' },
            { name: 'Thumper', kind: 'Special', type: 'Thumper' },
            { name: 'Tleilaxu Ghola', kind: 'Special', type: 'Tleilaxu Ghola' },
            { name: 'Truthtrance', kind: 'Special', type: 'Truthtrance' },
            {
                name: 'Weather Control',
                kind: 'Special',
                type: 'Weather Control',
            },
        ];

        const actual: TreacheryCard[] = [...unstorted].sort(sortTreacheryCard);

        expectToBeSorted(actual, sorted);
    });
});

const expectToBeSorted = <T>(actual: T[], expected: T[]): void => {
    expect(actual.length).toBe(expected.length);
    actual.forEach((item, idx) => {
        expect(item).toStrictEqual(expected[idx]);
    });
};
