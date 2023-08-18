import React from 'react';
import Header from '../components/Header';
import { Box, Typography, Card } from '@mui/material';
import PodcastCard from '../components/PodcastCard';
import Episodes from './Episodes';

type Props = {};

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
  titleContainer: {
    width: '650px',
  },
  title: {
    margin: '10px',
  },
  listContainer: {
    width: '650px',
  },
};

const Podcast = (props: Props) => {
  return (
    <Box sx={styles.container}>
      <Header headerTitle="Podcaster" />
      <Box sx={styles.subContainer}>
        <PodcastCard
          id="1"
          title="hola"
          author="hola2"
          imageUrl="https://media.istockphoto.com/id/1414744533/es/foto/mujer-de-la-mano-sosteniendo-tarjetas-de-cr%C3%A9dito-y-usando-el-tel%C3%A9fono-inteligente-para-comprar.webp?b=1&s=612x612&w=0&k=20&c=62KZ3fUQoUwiOsDvGfkwqIgOtrgtxMObt7GNR2QaNAE="
          altText="hola"
          description="blablabla"
        />
        <Box sx={styles.containerDetails}>
          <Card sx={styles.titleContainer}>
            <Typography sx={styles.title}>Derecha</Typography>
          </Card>
          <Card sx={styles.listContainer}>
            <Episodes />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Podcast;
