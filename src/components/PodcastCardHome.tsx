import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography, Box, Avatar } from '@mui/material';

const styles = {
  container: {
    flexDirection: 'column',
    display: 'flex',
    width: 200,
    marginTop: ' 32px',
    height: '100%',
  },
  topContainer: {
    height: '40px',
    position: 'relative',
    overflow: 'visible',
  },
  textContainer: {
    paddingTop: '43px',
    height: '100%',
    paddingBottom: '10px',
  },
  avatar: {
    height: '80px',
    width: '80px',
    position: 'absolute',
    zIndex: 1,
    left: '30%',
    top: '-5%',
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

type PodcastCardHomeProps = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};
const PodcastCardHome: React.FC<PodcastCardHomeProps> = ({
  id,
  title,
  subtitle,
  imageUrl,
}) => {
  return (
    <Box sx={styles.container}>
      <Link to={`/podcast/${id}`} style={styles.linkStyle} onClick={(e) => {}}>
        <Box sx={styles.topContainer}>
          <Avatar src={imageUrl} sx={styles.avatar} />
        </Box>
        <Card sx={styles.textContainer}>
          <Typography variant="body2" color={'text.primary'} sx={styles.title}>
            {title.toUpperCase()}
          </Typography>
          <Typography variant="body2" sx={styles.subTitle}>
            Autor: {subtitle}
          </Typography>
        </Card>
      </Link>
    </Box>
  );
};

export default PodcastCardHome;
