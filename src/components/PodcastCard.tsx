import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';

type PodcastCardProps = {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  altText: string;
  id: string;
  Islinkable?: boolean;
};

type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: (children: React.ReactElement) => JSX.Element;
  children: React.ReactElement;
};

const styles = {
  card: {
    minWidth: 250,
    maxWidth: 250,
    height: 'auto',
    alignSelf: 'flex-start',
  },
  cardMedia: {
    height: 140,
    margin: 'auto',
    width: 190,
    padding: '20px',
  },
  marginTop: {
    marginTop: '10px',
  },
  divider: {
    margin: 'auto',
    padding: '0 10px',
    width: 200,
  },
  removeLinkStyle: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children);

const PodcastCard: React.FC<PodcastCardProps> = ({
  title,
  author,
  description,
  imageUrl,
  altText,
  id,
  Islinkable = false,
}) => {
  return (
    <Card style={styles.card}>
      <ConditionalWrapper
        condition={Islinkable}
        wrapper={(children) => (
          <Link to={`/podcast/${id}`} style={styles.removeLinkStyle}>
            {children}
          </Link>
        )}
      >
        <CardMedia
          style={styles.cardMedia}
          component="img"
          alt={altText}
          image={imageUrl}
        />
      </ConditionalWrapper>

      <Divider style={styles.divider} />

      <CardContent>
        <ConditionalWrapper
          condition={Islinkable}
          wrapper={(children) => (
            <Link to={`/podcast/${id}`} style={styles.removeLinkStyle}>
              {children}
            </Link>
          )}
        >
          <>
            <Typography variant="subtitle1">{title}</Typography>
            <Typography gutterBottom variant="body2">
              by {author}
            </Typography>
          </>
        </ConditionalWrapper>

        <Divider style={styles.divider} />
        <Typography style={styles.marginTop} gutterBottom variant="subtitle2">
          Description:
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default PodcastCard;
