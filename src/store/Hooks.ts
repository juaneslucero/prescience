import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './Store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useGameSelector = () => useRootSelector((state) => state.game);
