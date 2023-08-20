import { configureStore } from '@reduxjs/toolkit';
import podcastsReducer from '../slices/podcastsSlice';
import podcastEpisodesReducer from '../slices/podcastEpisodesSlice';

const store = configureStore({
  reducer: {
    podcasts: podcastsReducer,
    podcastEpisodes: podcastEpisodesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
