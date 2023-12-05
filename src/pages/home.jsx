import React from 'react';
import Header from '../components/header'
import Timeline from '../components/timeline';
// import Tweet from '../components/tweet';

function Home() {
  return (
    <main className="timeline">
      <Header/ >
      <Timeline/ >
      {/* <Tweet/ >    */}
    </main>
  );
}

export default Home;