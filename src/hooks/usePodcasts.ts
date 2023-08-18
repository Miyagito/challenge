import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import getPodcasts from '../api/getPodcasts';
import {
  startFetching,
  fetchSuccess,
  fetchFailure,
} from '../slices/podcastsSlice';

// Maps API data to a desired podcast structure.
const mapApiToPodcast = (apiData: any) => {
  const podcasts = apiData.feed.entry || [];

  return podcasts.map((podcast: any) => ({
    title: podcast.title && podcast.title.label ? podcast.title.label : '',
    author:
      podcast['im:artist'] && podcast['im:artist'].label
        ? podcast['im:artist'].label
        : '',
    description:
      podcast.summary && podcast.summary.label ? podcast.summary.label : '',
    imageUrl:
      podcast['im:image'] &&
      podcast['im:image'][2] &&
      podcast['im:image'][2].label
        ? podcast['im:image'][2].label
        : '',
    altText: podcast.title && podcast.title.label ? podcast.title.label : '',
  }));
};

const usePodcasts = () => {
  const dispatch = useDispatch();
  // Selecting data, loading and error states from the redux store.
  const podcasts = useSelector((state: RootState) => state.podcasts.data);
  const loading = useSelector((state: RootState) => state.podcasts.loading);
  const error = useSelector((state: RootState) => state.podcasts.error);

  // Function to fetch podcasts data.
  const fetchPodcasts = useCallback(async () => {
    // Dispatch start fetching action.
    dispatch(startFetching());

    // Get podcasts and timestamp of their last fetch from local storage.
    const storedPodcasts = localStorage.getItem('podcasts');
    const storedDate = localStorage.getItem('podcastsDate');

    const currentDate = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;

    // Check if stored podcasts are present and less than 24 hours old.
    if (
      storedPodcasts &&
      storedDate &&
      currentDate - Number(storedDate) < oneDay
    ) {
      const localData = JSON.parse(storedPodcasts);
      // Dispatch stored podcasts if they are still valid.
      dispatch(fetchSuccess(localData));
    } else {
      try {
        // Fetch podcasts from the API.
        const response = await getPodcasts();
        const mappedData = mapApiToPodcast(response);
        dispatch(fetchSuccess(mappedData));

        // Update the local storage with the newly fetched podcasts.
        localStorage.setItem('podcasts', JSON.stringify(mappedData));
        localStorage.setItem('podcastsDate', String(currentDate));
      } catch (err) {
        // Handle any fetch errors.
        dispatch(fetchFailure((err as any).message));
      }
    }
  }, [dispatch]);

  // Return the state and the fetch function.
  return {
    podcasts,
    loading,
    error,
    fetchPodcasts,
  };
};

export default usePodcasts;
