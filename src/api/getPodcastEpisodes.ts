import axios from 'axios';
import xml2js from 'xml2js';
import { PROXY_URL_FEED } from '../utils/constants';

export interface PodcastEpisode {
  title: string;
  pubDate: string;
  description: string;
  link: string;
  duration: string;
  urlMp3: string;
  typeOfExtention: string;
  guid: string;
}

export const getPodcastEpisodes = async (
  id: string,
): Promise<PodcastEpisode[]> => {
  try {
    // Attempt to retrieve data from localStorage
    const storedData = localStorage.getItem(`podcast_data_${id}`);

    let feedUrl;

    if (storedData) {
      const { lastFetched, feed } = JSON.parse(storedData);
      const oneDay = 24 * 60 * 60 * 1000;
      const now = Date.now();

      // Check if data is less than a day old
      if (now - lastFetched < oneDay) {
        feedUrl = feed;
      }
    }

    // If data isn't available or is more than a day old, make an API call to get feedUrl
    if (!feedUrl) {
      const podcastFeedResponse = await axios.get(
        `${PROXY_URL_FEED}https://itunes.apple.com/lookup?id=${Number(id)}`,
      );
      feedUrl = podcastFeedResponse.data.results[0].feedUrl;

      // Store the new feedUrl in localStorage with the current timestamp
      localStorage.setItem(
        `podcast_data_${id}`,
        JSON.stringify({
          lastFetched: Date.now(),
          feed: feedUrl,
        }),
      );
    }

    // Once feedUrl is acquired, proceed to get the podcast episodes
    if (feedUrl && id) {
      const response = await axios.get(`${PROXY_URL_FEED}${feedUrl}`);
      const xmlData = await xml2js.parseStringPromise(response.data);
      const episodes = xmlData.rss.channel[0].item.map(
        (episode: {
          title: any[];
          pubDate: any[];
          description: any[];
          'itunes:duration': any[];
          enclosure: any[];
          type: any[];
          guid: any[];
        }) => {
          return {
            title:
              episode.title && episode.title.length > 0 ? episode.title[0] : '',
            pubDate:
              episode.pubDate && episode.pubDate.length > 0
                ? episode.pubDate[0]
                : '',
            description:
              episode.description && episode.description.length > 0
                ? episode.description[0]
                : '',
            duration:
              episode['itunes:duration'] &&
              episode['itunes:duration'].length > 0
                ? episode['itunes:duration'][0]
                : '',
            urlMp3:
              episode.enclosure &&
              episode.enclosure.length > 0 &&
              episode.enclosure[0].$
                ? episode.enclosure[0].$.url
                : '',
            typeOfExtention:
              episode.enclosure &&
              episode.enclosure.length > 0 &&
              episode.enclosure[0].$
                ? episode.enclosure[0].$.type
                : '',
            guid:
              episode.guid && episode.guid.length > 0 && episode.guid[0]._
                ? episode.guid[0]._
                : '',
          };
        },
      );
      return episodes;
    } else {
      return [];
    }
  } catch (error) {
    // Log any error that might occur
    console.error('Error fetching podcast episodes:', error);
    throw error;
  }
};
