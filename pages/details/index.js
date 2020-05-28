import Head from 'next/head'
import DrawHeader from '../../details/components/Header';
import DrawGame from '../../details/components/Game';

const Game = () => (
  <>
    <Head>
      <title>details</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="https://details.grumbly.games/default_thumbnail.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="fb:app_id" content="220488252548780" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://details.grumbly.games" />
      <meta property="og:title" content="click the image to play the game" />
      <meta property="og:description" content="details is a grammar game where you add words to make a sentence longer" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@GrumblyGames" />
      <meta name="twitter:title" content="click to play details" />
      <meta name="twitter:description" content="it's a game where you make sentences longer" />
      <meta name="twitter:image" content="https://details.grumbly.games/default_thumbnail.png" />
      <meta name="twitter:domain" content="https://details.grumbly.games" />
    </Head>
    <div className="gameContent">
      <DrawHeader />
      <DrawGame />
    </div>
    <style jsx global>
      {`
        :root {
          --mainbg: #282c34;
          --bodybg: #1e1e1e;
          --active_outline: lightgray;
          --conj: yellow; 
          --adj: lightskyblue;
          --noun: dodgerblue;
          --adv: pink;/* #BC70A4; pink; */
          --verb: #D85091;/* #CE3175; salmon; */
          --intrj: orange; /* #F2552C; orange; */
          --prep: lime;  /* #A6E22E */
          --pron: fuchsia;
          --punc: lavender;
          -ms-overflow-style: none;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: var(--bodybg);
          -ms-overflow-style: none;
        }

        .gameContent {
          background-color: var(--mainbg);
          height: 100vh;
          max-height: 100%;
          width: 100%;
          max-width: 960px;
          margin: 0px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: calc(10px + 1.5vw);
          color: white;
          text-align: center;
          position: relative;
          overflow-y: scroll;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .gameContent::-webkit-scrollbar {
          display: none;
        }
        @media screen and (min-width: 960px) {
            .gameContent {
              font-size: 24px;
            } 
        }

      `}
    </style>
  </>
);


export default Game
