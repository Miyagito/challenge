// usePodcastEpisodes.ts
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store'; // Ajusta la ruta si es necesario.
import { fetchPodcastEpisodes } from '../slices/podcastEpisodesSlice';

const usePodcastEpisodes = (id: string) => {
  const dispatch: AppDispatch = useDispatch();
  const episodes = useSelector(
    (state: RootState) => state.podcastEpisodes.episodes,
  );
  const status = useSelector(
    (state: RootState) => state.podcastEpisodes.status,
  );
  const error = useSelector((state: RootState) => state.podcastEpisodes.error);

  const getEpisodes = () => {
    dispatch(fetchPodcastEpisodes(id));
  };

  return { episodes, status, error, getEpisodes };
};

export default usePodcastEpisodes;
