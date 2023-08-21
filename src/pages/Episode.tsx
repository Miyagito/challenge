import React, { useState } from 'react';
import PodcastCard from '../components/PodcastCard';
import EpisodeCard, { EpisodeDataType } from '../components/EpisodeCard';

import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getPodcastByIdFromLocalStorage } from '../utils/getPodcastByIdLS';

const styles = {
  container: {
    margin: '30px 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: '80px',
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

  return (
    <Box sx={styles.container}>
      <PodcastCard
        title={podcastTitle}
        author={author}
        imageUrl={imageUrl}
        altText={altText}
        description={descriptionPodcast}
        id={state.podcastId}
        Islinkable={true}
      />
      <EpisodeCard episodeData={episodeData} />
    </Box>
  );
};

export default Episode;
