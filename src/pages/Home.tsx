import React, { useEffect } from 'react';
import Filter from '../components/Filter';
import './home.css';
import PodcastCardHome from '../components/PodcastCardHome';
import usePodcasts from '../hooks/usePodcasts';
import { Box } from '@mui/material';

const styles = {
  subContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '60px',
  },

  filterContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

const Home = () => {
  const { podcasts, fetchPodcasts } = usePodcasts();
  const [filterText, setFilterText] = React.useState('');

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const filteredPodcasts = podcasts.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(filterText.toLowerCase()) ||
      podcast.author.toLowerCase().includes(filterText.toLowerCase()),
  );

  const numOfPodcasts =
    filteredPodcasts.length === 0 ? podcasts.length : filteredPodcasts.length;
  return (
    <Box>
      <Box sx={styles.filterContainer}>
        <Filter numOfPodcasts={numOfPodcasts} onFilterChange={setFilterText} />
      </Box>
      <Box sx={styles.subContainer}>
        {filteredPodcasts.map((podcast) => (
          <PodcastCardHome
            id={podcast.id}
            key={podcast.id}
            title={podcast.title}
            subtitle={podcast.author}
            imageUrl={podcast.imageUrl}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
