import React from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import PodcastCard from '../components/PodcastCard';
import './home.css';
import { PodcastCardHome } from '../components/PodcastCardHome';

type Props = {};

const Home = (props: Props) => {
  return (
    <header className="container">
      <Header headerTitle="Podcaster" />
      <section className="filterContainer">
        <Filter />
      </section>
      <section className="podcastContainer">
        <PodcastCard
          title="hola"
          author="hola2"
          imageUrl="https://media.istockphoto.com/id/1414744533/es/foto/mujer-de-la-mano-sosteniendo-tarjetas-de-cr%C3%A9dito-y-usando-el-tel%C3%A9fono-inteligente-para-comprar.webp?b=1&s=612x612&w=0&k=20&c=62KZ3fUQoUwiOsDvGfkwqIgOtrgtxMObt7GNR2QaNAE="
          altText="hola"
          description="blablabla"
        />
      </section>
      <section>
        <PodcastCardHome
          title="tyny desk concerts - video"
          subtitle="Author: NPR"
          imageUrl="https://media.istockphoto.com/id/1414744533/es/foto/mujer-de-la-mano-sosteniendo-tarjetas-de-cr%C3%A9dito-y-usando-el-tel%C3%A9fono-inteligente-para-comprar.webp?b=1&s=612x612&w=0&k=20&c=62KZ3fUQoUwiOsDvGfkwqIgOtrgtxMObt7GNR2QaNAE="
        />
      </section>
    </header>
  );
};

export default Home;
