import * as React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { css, Global } from '@emotion/react';

const styles = {
  container: {
    maxWidth: 700,
    height: '100%',
    borderRadius: '5px',
  },
  links: {
    marginTop: '10px',
  },
  audio: { width: '100%', height: '30px', marginTop: '15px' },
};

const card = (
  <CardContent>
    <Box>
      <Typography variant="h1">Título del Podcast</Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, illo,
        mollitia optio sequi delectus tempora ipsum aliquid consequuntur
        eligendi, ducimus expedita necessitatibus molestias repudiandae eius
        unde animi? Autem, deserunt beatae.
      </Typography>
      <Typography sx={styles.links}>
        <em>This episode is esponsored by</em>
      </Typography>
      <audio controls style={styles.audio}>
        <source src="ruta-de-tu-audio.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </Box>
  </CardContent>
);

function EpisodeCard() {
  return (
    <Card sx={styles.container} variant="outlined">
      {card}
    </Card>
  );
}

export default EpisodeCard;
