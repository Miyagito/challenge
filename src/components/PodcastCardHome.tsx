import React from 'react';
import { Card, Typography, Box, Avatar } from '@mui/material';

const styles = {
  container: {
    flexDirection: 'column',
    display: 'flex',
    maxWidth: 120,
    margin: '0.5em',
  },
  topContainer: {
    height: '2.5em',
  },
  textContainer: {
    paddingTop: '2.5em',
    height: '100%',
    position: 'relative',
    overflow: 'visible',
  },
  avatar: {
    height: '3.5em',
    width: '3.5em',
    position: 'absolute',
    zIndex: 1,
    left: '20%',
    top: '-50%',
  },
  title: { textAlign: 'center', fontSize: '8px', fontWeight: 'bold' },
  subTitle: { textAlign: 'center', fontSize: '9px' },
};

interface PodcastCardHomeProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}
export const PodcastCardHome: React.FC<PodcastCardHomeProps> = ({
  title,
  subtitle,
  imageUrl,
}) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.topContainer} />
      <Card sx={styles.textContainer}>
        <Avatar src={imageUrl} sx={styles.avatar} />
        <Typography variant="body2" color={'text.primary'} sx={styles.title}>
          {title.toUpperCase()}
        </Typography>
        <Typography
          variant="body2"
          color={'text.secondary'}
          sx={styles.subTitle}
        >
          {subtitle}
        </Typography>
      </Card>
    </Box>
  );
};
