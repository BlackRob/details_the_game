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
      <DrawGame gameState={Buffer.from(returnString, 'base64').toString('utf8')} />
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
  // base64 encoded error sentence
  const errorString = "1xThe~2ysent~3zlink~4yis~5wnot~6xa~7xvalid~8zsentence~9f~~"
  const bufES = Buffer.from(errorString, 'utf8')
  const encES = bufES.toString('base64')
  // string in page req is already base64 encoded, or a short integer
  const encS = context.query.game
  const bufS = Buffer.from(encS, 'base64')
  const reqString = bufS.toString('utf8')

  // page requested ("game") may be a number corresponding to 
  // a particular starter sentence or reflect a game state
  // or be garbage: first checck, is it a number?
  if (isNaN(context.query.game)) {
    // most likely case is the "game" requested is from
    // someone clicking a shared link, which means the link
    // contains the full state of a game _or_
    // it contains nonsense; this function handles both cases
    if (stringIsValid({ sentenceString: reqString })) {
      console.log("string is valid", reqString)
      returnString = encS
    } else {
      console.log("string is invalid")
      returnString = encES
    }
    // following is for numbers, which aren't encoded
  } else if (sentences.hasOwnProperty(`_${context.query.game}`)) {
    // if it is a number we check if that number matches a 
    // known starter sentence and respond appropriately
    returnString = Buffer.from(gameStateToStr({
      sentence: sentences[`_${context.query.game}`].sentence,
      cards: sentences[`_${context.query.game}`].cards
    }), 'utf8').toString('base64')
    console.log("return string", returnString)
    console.log(Buffer.from(returnString, 'base64').toString('utf8'))
  } else {
    // if the number requested doesn't exist, respond with sentence 4
    // which states that the requested sentence doesn't exist
    returnString = encES
  }

  // Pass data to the page via props
  return { props: { returnString } }
}

export default Game