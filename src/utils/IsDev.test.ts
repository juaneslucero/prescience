import { isDev } from './IsDev';

describe('Tests isDev flag', () => {
    const OLD_ENV = process.env;

    beforeAll(() => {
        jest.resetModules();
        process.env = { ...OLD_ENV };
    });

    afterAll(() => {
        process.env = OLD_ENV;
    });

    it('Test isDev returns true if in development', () => {
        //@ts-ignore
        process.env.NODE_ENV = 'development';
        expect(isDev()).toBe(true);
    });

    it('Test isDev returns true if NODE_ENV is falsy', () => {
        //@ts-ignore
        process.env.NODE_ENV = '';
        expect(isDev()).toBe(true);
    });

    it('Test isDev returns false if not in development', () => {
        //@ts-ignore
        process.env.NODE_ENV = 'production';
        expect(isDev()).toBe(false);
    });
});
