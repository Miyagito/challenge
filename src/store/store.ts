import { configureStore } from '@reduxjs/toolkit';
import podcastsReducer from '../slices/podcastsSlice';

const store = configureStore({
  reducer: {
    podcasts: podcastsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
