import { configureStore } from '@reduxjs/toolkit';
import config from 'config';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import reducer from './rootReducers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const middlewares: any[] = [];
if (config.dev) {
  await import('redux-logger').then(({ logger }) => {
    middlewares.push(logger);
  });
}

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: config.dev,
});

const useStoreDispatch = (): Dispatch<AnyAction> => useDispatch<AppDispatch>();
const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, useStoreDispatch, useStoreSelector };
export type { RootState, AppDispatch };
