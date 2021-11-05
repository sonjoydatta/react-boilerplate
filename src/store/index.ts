import { configureStore } from '@reduxjs/toolkit';
import config from 'config';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './rootReducers';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['app'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const middlewares: any[] = [];
if (config.dev) {
  await import('redux-logger').then(({ logger }) => {
    middlewares.push(logger);
  });
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
  devTools: config.dev,
});

const persistor = persistStore(store);

const useStoreDispatch = (): Dispatch<AnyAction> => useDispatch<AppDispatch>();
const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, persistor, useStoreDispatch, useStoreSelector };
export type { RootState, AppDispatch };
