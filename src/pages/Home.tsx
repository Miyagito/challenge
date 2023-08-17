import React from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
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
    </header>
  );
};

export default Home;
