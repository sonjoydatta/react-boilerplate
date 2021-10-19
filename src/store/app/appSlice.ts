import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState: AppState = {
  isLoaded: false,
  routeChange: 'complete',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    completeLoader: (state) => {
      state.isLoaded = true;
    },
    updateRoute: (state, action: PayloadAction<AppState['routeChange']>) => {
      state.routeChange = action.payload;
    },
  },
});

export default appSlice.reducer;

export const { completeLoader, updateRoute } = appSlice.actions;

export const getAppSate = (state: RootState): AppState => state.app;

type AppState = {
  isLoaded: boolean;
  routeChange: 'start' | 'complete' | 'error';
};
