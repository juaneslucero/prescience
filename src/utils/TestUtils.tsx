import { FunctionComponent, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react';
import { store as rootStore } from 'store/Store';

interface RenderWithStoreOptions extends RenderOptions {
    store?: typeof rootStore;
}

export const renderWithStore = (
    ui: ReactElement,
    { store = rootStore, ...renderOptions }: RenderWithStoreOptions = {},
) => {
    const Wrapper: FunctionComponent = ({ children }) => (
        <Provider store={store}>{children}</Provider>
    );
    return render(ui, { wrapper: Wrapper, ...renderOptions });
};
