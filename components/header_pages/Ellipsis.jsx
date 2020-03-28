import React, { useState } from 'react';


// Clicking on the span opens an informative popup
const App = () => {
  const [show, setShow] = useState(false);
  return <div className="header_punctuation ">
    <button onClick={() => { setShow(true) }}>...</button>
    <EllipsisPage showVal={show} setShow={() => { setShow(false) }} />
  </div>
};

const EllipsisPage = ({ showVal, setShow }) => {
  let showHide = "hidden";
  if (showVal) {
    showHide = "z2";
  }

  return <div className={showHide}>
    <div className="z2_body">
      <div className="z2_title">
        Details about "details"
      <span className="z2_hide" onClick={setShow}>x</span>
      </div>
      <p><strong>What is this?</strong> It's a game to practice English grammar.</p>
      <p><strong>How do you play?</strong> You start with a simple sentence, then make it longer by adding details.</p>
      <p><strong>What do you mean by "details"?</strong> I mean details! If I have a sentence, "Chocolate is delicious", I can add a <i>detail</i> like the adjective "dark", and now I have a longer sentence, "Dark chocolate is delicious".</p>
    </div>
  </div>
}


export default App;
