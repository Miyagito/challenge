import React, { useState } from 'react';
import PodcastCard from '../components/PodcastCard';
import Header from '../components/Header';
import EpisodeCard, { EpisodeDataType } from '../components/EpisodeCard';

import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const styles = {
  container: {},
  subContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};

const Episode: React.FC = () => {
  const { state } = useLocation();

  const {
    urlMp3 = '',
    description = '',
    title = '',
    typeOfExtention = '',
  } = state.episode || {};
  const episodeData: EpisodeDataType = {
    urlMp3,
    description,
    title,
    typeOfExtention,
  };

  const getPodcastByIdFromLocalStorage = (id: string) => {
    const storedPodcasts = localStorage.getItem('podcasts');
    if (!storedPodcasts) return null;

    const podcasts = JSON.parse(storedPodcasts);
    return podcasts.find((podcast: { id: string }) => podcast.id === id);
  };

  const [currentPodcast] = useState(
    getPodcastByIdFromLocalStorage(state.podcastId),
  );

  const {
    title: podcastTitle,
    author,
    imageUrl,
    description: descriptionPodcast,
    altText,
  } = currentPodcast || {};

  console.log(currentPodcast);

  return (
    <Box sx={styles.container}>
      <Header headerTitle="Podcaster" />
      <Box sx={styles.subContainer}>
        <PodcastCard
          title={podcastTitle}
          author={author}
          imageUrl={imageUrl}
          altText={altText}
          description={descriptionPodcast}
        />
        <EpisodeCard episodeData={episodeData} />
      </Box>
    </Box>
  );
};

export default Episode;
