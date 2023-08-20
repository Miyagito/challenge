import React, { useEffect, useState } from 'react';
import { Box, Typography, Card } from '@mui/material';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import PodcastCard from '../components/PodcastCard';
import Episodes from './Episodes';
import usePodcastEpisodes from '../hooks/usePodcastEpisodes';

const styles = {
  container: {
    margin: '0 10vw',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: '20px 10px',
    justifyContent: 'space-between',
  },
  containerDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  title: {
    margin: '10px',
  },
  listContainer: {
    width: 'Auto',
  },
};

const Podcast: React.FC = () => {
  let { id = '0' } = useParams<{ id: string }>();

  const getPodcastByIdFromLocalStorage = (id: string) => {
    const storedPodcasts = localStorage.getItem('podcasts');
    if (!storedPodcasts) return null;

    const podcasts = JSON.parse(storedPodcasts);
    return podcasts.find((podcast: { id: string }) => podcast.id === id);
  };

  const [currentPodcast] = useState(getPodcastByIdFromLocalStorage(id));
  let { episodes, status, error, getEpisodes } = usePodcastEpisodes(id);

  useEffect(() => {
    if (id) {
      getEpisodes();
    }
  }, [id]);

  const renderPodcastCard = () => {
    if (!currentPodcast) return null;

    return (
      <PodcastCard
        title={currentPodcast.title}
        author={currentPodcast.author}
        imageUrl={currentPodcast.imageUrl}
        altText={currentPodcast.altText}
        description={currentPodcast.description}
      />
    );
  };

  return (
    <Box sx={styles.container}>
      <Header headerTitle="Podcaster" />
      <Box sx={styles.subContainer}>
        {renderPodcastCard()}
        <Box sx={styles.containerDetails}>
          <Card>
            <Typography variant="h1" sx={styles.title}>
              Episodes: {status === 'succeeded' && episodes.length}
            </Typography>
          </Card>
          <Card sx={styles.listContainer}>
            {status === 'succeeded' && (
              <Episodes episodes={episodes} podcastId={id} />
            )}
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Podcast;
