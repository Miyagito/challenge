import React from 'react';
import PodcastCard from '../components/PodcastCard';
import Header from '../components/Header';
import EpisodeCard from '../components/EpisodeCard';

import { Box } from '@mui/material';

interface Episode {
  id?: string;
  title?: string;
  author?: string;
  description?: string;
  imageUrl?: string;
  altText?: string;
}

const styles = {
  container: {},
  subContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};

const Episode: React.FC<Episode> = ({
  id,
  title,
  author,
  description,
  imageUrl,
  altText,
}) => {
  return (
    <Box sx={styles.container}>
      <Header headerTitle="Podcaster" />
      <Box sx={styles.subContainer}>
        <PodcastCard
          id={''}
          title="hola"
          author="hola2"
          imageUrl="https://media.istockphoto.com/id/1414744533/es/foto/mujer-de-la-mano-sosteniendo-tarjetas-de-cr%C3%A9dito-y-usando-el-tel%C3%A9fono-inteligente-para-comprar.webp?b=1&s=612x612&w=0&k=20&c=62KZ3fUQoUwiOsDvGfkwqIgOtrgtxMObt7GNR2QaNAE="
          altText="hola"
          description="blablabla"
        />
        <EpisodeCard />
      </Box>
    </Box>
  );
};

export default Episode;
