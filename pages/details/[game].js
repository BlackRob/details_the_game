import sentences from '../../data/sentences.json';
import React from 'react';
import SuperHead from '../../details/components/SuperHead';
import DrawHeader from '../../details/components/Header';
import DrawGame from '../../details/components/Game';
import { stringIsValid, gameStateToStr } from '../../details/components/gameStatePack';


const Game = ({ returnString }) => (
  <div className="container">
    <SuperHead gameState={returnString} />
    <div className="gameContent">
      <DrawHeader />
      <DrawGame gameState={returnString} />
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

// This gets called on every request
export async function getServerSideProps(context) {
  let returnString = ""
  const errorSentence = "1xThe~2ysent~3zlink~4yis~5wnot~6xa~7xvalid~8zsentence~9f~~"

  // page requested ("game") may be a number corresponding to 
  // a particular starter sentence or reflect a game state
  // or be nothing
  if (isNaN(context.query.game)) {
    // most likely case is the "game" requested is from
    // someone clicking a shared link, which means the link
    // contains the full state of a game _or_
    // it contains nonsense; this function handles both cases
    if (stringIsValid({ sentenceString: context.query.game })) {
      returnString = context.query.game
    } else {
      returnString = errorSentence
    }
  } else if (sentences.hasOwnProperty(`_${context.query.game}`)) {
    // if it is a number we check if that number matches a 
    // known starter sentence and respond appropriately
    returnString = gameStateToStr({
      sentence: sentences[`_${context.query.game}`].sentence,
      cards: sentences[`_${context.query.game}`].cards
    })
  } else {
    // if the number requested doesn't exist, respond with sentence 4
    // which states that the requested sentence doesn't exist
    returnString = errorSentence
  }

  // Pass data to the page via props
  return { props: { returnString } }
}

export default Game