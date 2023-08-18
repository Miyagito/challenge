import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Podcast {
  id: string;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  altText: string;
}

interface PodcastState {
  data: Podcast[];
  loading: boolean;
  error: string | null;
}

const initialState: PodcastState = {
  data: [],
  loading: false,
  error: null,
};

const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {
    startFetching: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action: PayloadAction<Podcast[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { startFetching, fetchSuccess, fetchFailure } =
  podcastsSlice.actions;
export default podcastsSlice.reducer;
