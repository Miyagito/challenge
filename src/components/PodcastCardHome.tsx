import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography, Box, Avatar } from '@mui/material';

const styles = {
  container: {
    flexDirection: 'column',
    display: 'flex',
    maxWidth: 155,
    minWidth: 155,
    margin: '32px',
    height: '100%',
  },
  topContainer: {
    height: '40px',
  },
  textContainer: {
    paddingTop: '43.2px',
    height: '100%',
    position: 'relative',
    overflow: 'visible',
  },
  avatar: {
    height: '80px',
    width: '80px',
    position: 'absolute',
    zIndex: 1,
    left: '25%',
    top: '-50%',
  },
  title: {
    textAlign: 'center',
    fontSize: '8px',
    fontWeight: 'bold',
    margin: '1px 6px',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: '9px',
    marginBottom: '10px',
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

interface PodcastCardHomeProps {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}
export const PodcastCardHome: React.FC<PodcastCardHomeProps> = ({
  id,
  title,
  subtitle,
  imageUrl,
}) => {
  return (
    <Box sx={styles.container}>
      <Link to={`/podcast/${id}`} style={styles.linkStyle}>
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
            Autor: {subtitle}
          </Typography>
        </Card>
      </Link>
    </Box>
  );
};
