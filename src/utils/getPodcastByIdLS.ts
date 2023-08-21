export const getPodcastByIdFromLocalStorage = (id: string) => {
  const storedPodcasts = localStorage.getItem('podcasts');
  if (!storedPodcasts) return null;

  const podcasts = JSON.parse(storedPodcasts);
  return podcasts.find((podcast: { id: string }) => podcast.id === id);
};
