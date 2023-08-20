import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getPodcastEpisodes, PodcastEpisode } from '../api/getPodcastEpisodes';

type PodcastEpisodesState = {
  episodes: PodcastEpisode[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: PodcastEpisodesState = {
  episodes: [],
  status: 'idle',
  error: null,
};

export const fetchPodcastEpisodes = createAsyncThunk(
  'podcasts/fetchEpisodes',
  async (id: string) => {
    const response = await getPodcastEpisodes(id);
    return response;
  },
);

const podcastEpisodesSlice = createSlice({
  name: 'podcastEpisodes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPodcastEpisodes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchPodcastEpisodes.fulfilled,
        (state, action: PayloadAction<PodcastEpisode[]>) => {
          state.status = 'succeeded';
          state.episodes = action.payload;
        },
      )
      .addCase(fetchPodcastEpisodes.rejected, (state, action) => {
        state.status = 'failed';
        state.error =
          action.error.message || 'Failed to fetch podcast episodes';
      });
  },
});

export default podcastEpisodesSlice.reducer;
