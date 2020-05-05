import React, { useState } from 'react';
import Link from 'next/link'
import styles from './HeaderPage.module.css';


// Clicking on the span opens an informative popup
const PopUp = () => {
  const [show, setShow] = useState(false);
  return <div className={styles.header_punctuation}>
    <button onClick={() => { setShow(true) }}>?</button>
    <QuestionPage showVal={show} setShow={() => { setShow(false) }} />
  </div>
};

const QuestionPage = ({ showVal, setShow }) => {
  let showHide = styles.hidden;
  if (showVal) {
    showHide = styles.z2;
  }

  return <div className={showHide}>
    <div className={styles.z2_body}>
      <div className={styles.z2_title}>
        FAQ
      <span className={styles.z2_hide} onClick={setShow}>x</span>
      </div>
      <p><strong>What is this?</strong> <br />It's a game to practice English grammar.</p>
      <p><strong>How do you play?</strong> <br />You start with a simple sentence, then make it longer by adding details.</p>
      <p><strong>What do you mean by "details"?</strong> <br />I mean details!
      If I have a sentence, "Chocolate is delicious", I can add
      a <i>detail</i> like the adjective "dark", and now I
      have a longer sentence, "Dark chocolate is delicious".</p>
      <p>The rules for how to play are </p>
      <div name="learn" className="typeButtonDiv">
        <h3>Learn more about...</h3>
        <div className="typeButtons">
          <Link href="/adjectives"><button className="adj">adjectives</button></Link>
          <Link href="/nouns"><button className="noun">nouns</button></Link>
          <Link href="/adverbs"><button className="adv">adverbs</button></Link>
          <Link href="/verbs"><button className="verb">verbs</button></Link>
          <Link href="/prepositions"><button className="prep">prepositions</button></Link>
          <Link href="/conjunctions"><button className="conj">conjunctions</button></Link>
          <Link href="/pronouns"><button className="pron">pronouns</button></Link>
          <Link href="/interjections"><button className="intrj">interjections</button></Link>
          <Link href="/punctuation"><button className="punc">punctuation</button></Link>
        </div>
      </div>
    </div>
    <style jsx>{`
      .typeButtonDiv {
        border: 1.5px solid black;
        border-radius: 7px;
        padding: 8px;
        text-align: center;
        position: -webkit-sticky;
        position: sticky;
        top: 30px;
        margin-top: 20px;
        font-size: 16px;
      } 
      .typeButtons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .typeButtons button {
        font-size: 1.15em;
        flex: 0 0 100%;
        margin: 7px 3px;
      }
      .typeButtons button:hover,
      .typeButtons button:focus,
      .typeButtons button:active {
        border-color: var(--logo_active);
        filter: drop-shadow(0 0 0.4rem var(--logo_hover));
      }
    `}</style>
  </div>
}


export default PopUp;
