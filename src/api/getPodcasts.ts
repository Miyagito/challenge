import axios, { AxiosResponse } from 'axios';

// URL iTunes API
const BASE_URL =
  'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

interface Podcast {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  altText: string;
}

interface PodcastsResponse {
  results: Podcast[];
}

const getPodcasts = async (): Promise<PodcastsResponse> => {
  try {
    const response: AxiosResponse<PodcastsResponse> = await axios.get(BASE_URL);
    return response.data; // This will return the JSON object with the podcasts
  } catch (error) {
    console.error('Error fetching podcasts:', error);
    throw error; // handle error
  }
};

export default getPodcasts;
