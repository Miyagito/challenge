import * as React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';

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

export type EpisodeDataType = {
  urlMp3: string;
  description: string;
  title: string;
  typeOfExtention: string;
};

type EpisodeCardProps = {
  episodeData: EpisodeDataType;
};

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episodeData }) => {
  const { urlMp3, description, title, typeOfExtention } = episodeData;
  return (
    <Card sx={styles.container} variant="outlined">
      <CardContent>
        <Box>
          <Typography variant="h1">{title}</Typography>
          <Typography>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Typography>
          <audio controls style={styles.audio}>
            <source src={urlMp3} type={typeOfExtention} />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EpisodeCard;
