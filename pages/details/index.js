import Head from 'next/head'
import DrawHeader from '../../details/components/Header';
import DrawGame from '../../details/components/Game';


const Game = () => (
  <div className="container">
    <Head>
      <title>details</title>
      <link rel="icon" href="/favicon.ico" />
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
          --verb: #CE3175;/* #CE3175; salmon; */
          --intrj: orange; /* #F2552C; orange; */
          --prep: lime;  /* #A6E22E */
          --pron: fuchsia;
          --punc: lavender;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: var(--bodybg);
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
  </div>
);


export default Game
