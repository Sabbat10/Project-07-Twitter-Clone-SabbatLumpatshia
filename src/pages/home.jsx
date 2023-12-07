import React from 'react';
import Header from '../components/header'
import Timeline from '../components/timeline';
import Tweet from '../components/tweet';
import Sidebar from '../components/Sidebar/sidebar';
import Trends from '../components/Trends/trends';

function Home() {
  return (
    <>
    <Sidebar/>
    <div className="timeline">
      <Header/ >
      <Timeline/ >
      <Tweet />
    </div>

    </>
  );
}

export default Home;