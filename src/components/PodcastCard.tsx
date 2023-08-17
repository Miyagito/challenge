import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from '@mui/material';

interface PodcastCardProps {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const styles = {
  card: { maxWidth: 250 },
  cardMedia: { height: 140, margin: 'auto', width: 190, padding: '20px' },
  marginTop: { marginTop: 1 },
  divider: { margin: 'auto', padding: '0 10px', width: 200 },
};

const PodcastCard: React.FC<PodcastCardProps> = ({
  title,
  author,
  description,
  imageUrl,
  altText,
}) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.cardMedia}
        component="img"
        alt={altText}
        image={imageUrl}
      />
      <Divider sx={styles.divider} />
      <CardContent>
        <Typography variant="body1">{title}</Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          by {author}
        </Typography>
        <Divider sx={styles.divider} />
        <Typography sx={styles.marginTop} gutterBottom variant="body2">
          Description:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PodcastCard;
