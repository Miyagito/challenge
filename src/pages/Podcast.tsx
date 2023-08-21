import React, { useEffect, useState } from 'react';
import { Box, Typography, Card } from '@mui/material';
import { useParams } from 'react-router-dom';

import PodcastCard from '../components/PodcastCard';
import Episodes from './Episodes';
import usePodcastEpisodes from '../hooks/usePodcastEpisodes';
import { getPodcastByIdFromLocalStorage } from '../utils/getPodcastByIdLS';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: '30px 10px',
    justifyContent: 'space-between',
    gap: '80px',
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

  const [currentPodcast] = useState(getPodcastByIdFromLocalStorage(id));
  let { episodes, status, getEpisodes } = usePodcastEpisodes(id);

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
        id={currentPodcast.id}
        Islinkable={false}
      />
    );
  };

  return (
    <Box sx={styles.container}>
      {renderPodcastCard()}
      <Box sx={styles.containerDetails}>
        {status === 'succeeded' && (
          <>
            <Card>
              <Typography variant="h1" sx={styles.title}>
                Episodes: {episodes.length}
              </Typography>
            </Card>
            <Card sx={styles.listContainer}>
              <Episodes episodes={episodes} podcastId={id} />
            </Card>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Podcast;
