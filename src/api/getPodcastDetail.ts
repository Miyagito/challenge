import axios, { AxiosResponse } from 'axios';

interface PodcastDetail {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const BASE_DETAIL_URL = 'https://itunes.apple.com/lookup?id=';

export const getPodcastDetail = async (
  podcastId: string,
): Promise<PodcastDetail> => {
  try {
    const response: AxiosResponse<{ results: PodcastDetail[] }> =
      await axios.get(`${BASE_DETAIL_URL}${podcastId}`);

    if (response.data.results && response.data.results.length > 0) {
      return response.data.results[0];
    }

    throw new Error('No details found for the given podcastId');
  } catch (error) {
    console.error('Error fetching podcast detail:', error);
    throw error; // handle error
  }
};
