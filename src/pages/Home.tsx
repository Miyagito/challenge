import React, { useEffect } from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import PodcastCard from '../components/PodcastCard';
import './home.css';
import { PodcastCardHome } from '../components/PodcastCardHome';
import Episode from './Episode';
import usePodcasts from '../hooks/usePodcasts';

type Props = {};

const Home = (props: Props) => {
  const { podcasts, loading, error, fetchPodcasts } = usePodcasts();
  const numOfPodcasts = podcasts.length;

  useEffect(() => {
    fetchPodcasts();
  }, []);
  console.log(podcasts, 'podcasts');
  return (
    <header className="container">
      <Header headerTitle="Podcaster" />
      <section className="filterContainer">
        <Filter numOfPodcasts={numOfPodcasts} />
      </section>
      <section className="subContainer">
        {podcasts.map((podcast) => (
          <PodcastCardHome
            key={podcast.id}
            title={podcast.title}
            subtitle={podcast.author}
            imageUrl={podcast.imageUrl}
          />
        ))}
      </section>

      {/*  <section className="podcastContainer">
        <PodcastCard
          id={podcasts[0].id}
          title="hola"
          author="hola2"
          imageUrl="https://media.istockphoto.com/id/1414744533/es/foto/mujer-de-la-mano-sosteniendo-tarjetas-de-cr%C3%A9dito-y-usando-el-tel%C3%A9fono-inteligente-para-comprar.webp?b=1&s=612x612&w=0&k=20&c=62KZ3fUQoUwiOsDvGfkwqIgOtrgtxMObt7GNR2QaNAE="
          altText="hola"
          description="blablabla"
        />
      </section> */}
      <section>
        <PodcastCardHome
          title="tyny desk concerts - video"
          subtitle="Author: NPR"
          imageUrl="https://media.istockphoto.com/id/1414744533/es/foto/mujer-de-la-mano-sosteniendo-tarjetas-de-cr%C3%A9dito-y-usando-el-tel%C3%A9fono-inteligente-para-comprar.webp?b=1&s=612x612&w=0&k=20&c=62KZ3fUQoUwiOsDvGfkwqIgOtrgtxMObt7GNR2QaNAE="
        />
      </section>
      <section>
        <Episode />
      </section>
    </header>
  );
};

export default Home;
