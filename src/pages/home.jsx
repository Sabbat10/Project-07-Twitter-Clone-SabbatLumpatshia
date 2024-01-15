import React from 'react';
import Header from '../components/header';
import TweetEditor from '../components/timeline/tweet-editor/tweet-editor';
import Tweets from '../components/timeline/tweets/tweets';
import { TopTweetsIcon } from '../components/icon';
import PageTitle from '../components/page-title';

function Home() {
    return (
        <main className="timeline">
            <Header>
                <PageTitle value="Home" />
                <TopTweetsIcon  source="src/images/Vector.png" />
            </Header>
            <TweetEditor />
            <Tweets />
        </main>

    );
}

export default Home;