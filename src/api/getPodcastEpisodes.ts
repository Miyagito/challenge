import axios from 'axios';
import xml2js from 'xml2js';

export interface PodcastEpisode {
  title: string;
  pubDate: string;
  description: string;
  link: string;
  // ... cualquier otro detalle que necesites.
}

const PROXY_URL_FEED = 'https://cors-anywhere.herokuapp.com/';

export const getPodcastEpisodes = async (
  id: string,
): Promise<PodcastEpisode[]> => {
  try {
    console.log(id, 'id');
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const podcastFeedResponse = await axios.get(
      `${PROXY_URL}https://itunes.apple.com/lookup?id=${Number(id)}`,
    );
    const { feedUrl } = podcastFeedResponse.data.results[0];

    if (feedUrl && id) {
      console.log(feedUrl, 'feedUrl');
      const response = await axios.get(`${PROXY_URL_FEED}${feedUrl}`);
      const xmlData = await xml2js.parseStringPromise(response.data);
      const episodes = xmlData.rss.channel[0].item;

      return episodes.map(
        (episode: {
          title: any[];
          pubDate: any[];
          description: any[];
          link: any[];
        }) => ({
          title: episode.title[0],
          pubDate: episode.pubDate[0],
          description: episode.description[0],
          link: episode.link[0],
          // ... mapear otros detalles aquí.
        }),
      );
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
    throw error;
  }
};
