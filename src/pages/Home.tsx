import React, { useEffect } from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import './home.css';
import PodcastCardHome from '../components/PodcastCardHome';
import usePodcasts from '../hooks/usePodcasts';

const Home = () => {
  const { podcasts, fetchPodcasts } = usePodcasts();
  const [filterText, setFilterText] = React.useState('');

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const filteredPodcasts = podcasts.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(filterText.toLowerCase()) ||
      podcast.author.toLowerCase().includes(filterText.toLowerCase()),
  );

  const numOfPodcasts =
    filteredPodcasts.length === 0 ? podcasts.length : filteredPodcasts.length;
  return (
    <header className="container">
      <Header headerTitle="Podcaster" />
      <section className="filterContainer">
        <Filter numOfPodcasts={numOfPodcasts} onFilterChange={setFilterText} />
      </section>
      <section className="subContainer">
        {filteredPodcasts.map((podcast) => (
          <PodcastCardHome
            id={podcast.id}
            key={podcast.id}
            title={podcast.title}
            subtitle={podcast.author}
            imageUrl={podcast.imageUrl}
          />
        ))}
      </section>
    </header>
  );
};

export default Home;
