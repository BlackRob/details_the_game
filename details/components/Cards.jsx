import React, { useState } from 'react';
// import { tinyCanvas } from './drawCanvas'


/////////////////////// clear button 
const DrawClearButton = ({ updateState, active, wR, clearWR, toggleWorking }) => {
  let activeClass = "clear_button enabled";
  if (!active || wR.length === 0) {
    activeClass = "clear_button disabled";
  };
  return <button className={activeClass}
    onClick={(e) => {
      e.preventDefault();
      // for each card in the working row, erase its content
      // and turn it's working state off
      wR.forEach(x => { updateState(x, ""); toggleWorking(x) });
      // then clear the working row
      clearWR();
    }} >
    clear
    <style jsx>
      {`
        .clear_button {
          width: 4em;
          height: 4.8em;
          padding: 0.2em 0.6em;
          margin: 0px;
          grid-area: left;
        }
        .enabled {
          color: var(--active_outline);
          border: 2px solid var(--active_outline);
        }
      `}
    </style>
  </button>
}

/////////////////////// working row content
const DrawWorkingRowContent = ({ wR, removeFromWR, updateState, cards, toggleWorking, undoable, undoSecondsLeft, winner, totalCardCount, sentenceUpdateCount }) => {
  let content = "";
  let rando = randomInterjection();

  if (undoable) {
    content = <div className="working_row_message">Seconds left to change your mind: {undoSecondsLeft}</div>
  } else if (winner) {
    content = <div className="working_row_message">{rando}! &nbsp; You won! &nbsp; &nbsp; Cards inserted: {totalCardCount} &nbsp; &nbsp; Moves needed: {sentenceUpdateCount}</div>
  }

  if (wR.length > 0) {
    const workingCards = wR.map(x => cards.find(y => y.id === x));
    content =
      workingCards.map(z => <DrawWorkingCard element={z} key={z.id} updateState={updateState} removeFromWR={removeFromWR} toggleWorking={toggleWorking} />)
  };

  return <div className="working_row_content">
    {content}
    <style jsx>
      {`
        .working_row_content {
          width: fit-content;
          margin: 1px;
          display: flex;
          overflow-x: scroll;
          align-items: center;
          justify-content: flex-start;
          scrollbar-width: none;
          color: black;
        }
        .working_row_content::-webkit-scrollbar {
          display: none;
        }
        .working_row_message {
          color: black;
        }
      `}
    </style>
  </div>
}

const randomInterjection = (() => {
  const coolInterjections = ["Yikes", "Wow", "Hey now", "Zounds", "Kapow", "Whammy", "Whaaaaat", "Whoopie", "Zoinks", "Bingo"];
  return coolInterjections[Math.floor(Math.random() * coolInterjections.length)];
})

const DrawWorkingCard = ({ element, updateState, removeFromWR, toggleWorking }) => {
  return <div className={element.type + " card"}>
    <DrawType wordType={element.type} />
    <DrawRemoveButton updateState={updateState} cardId={element.id} removeFromWR={removeFromWR} toggleWorking={toggleWorking} />
    <DrawInputDiv word={element.word} cardId={element.id} updateState={updateState} />
    <style jsx>
      {`    
        .card {
          height: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          grid-template-rows: auto 1fr;
          grid-template-areas: 'tl tr' 'b b';
          margin: 0px 1px;
          width: fit-content;
          flex: 1 0 auto;
          color: black;
          border: 1px solid black;
        }
      `}
    </style>
  </div>
}

const DrawType = ({ wordType }) => {
  return <div className="typename">{wordType}
    <style jsx>
      {`
        .typename {
          grid-area: tl;
          box-sizing: border-box;
          margin-left: 0.3em;
          margin-bottom: 0px;
          padding: 0.2em 0.4em;
          font-size: 0.6em;
          text-align: left;
        }
    `}</style>
  </div>
}

const DrawRemoveButton = ({ updateState, cardId, removeFromWR, toggleWorking }) => {
  return <button tabIndex="-1"
    onClick={(e) => {
      e.preventDefault();
      updateState(cardId, "");
      toggleWorking(cardId);
      removeFromWR(cardId);
    }}>x
    <style jsx>
      {`
        button {
          grid-area: tr;
          margin: 0.4em;
          margin-top: 0px;
          width: auto;
          height: 100%;
          color: black;
          padding: 0px;
          border: none;
        }  
      `}
    </style>
  </button>
}

const DrawInputDiv = ({ word, cardId, updateState }) => {
  return <div className="input_div">
    <input type="text" defaultValue={word} size={Math.max(4, word.length)}
      name={cardId}
      onKeyUp={(e) => { updateState(cardId, e.target.value); }}
    />
    <style jsx>
      {`
        .input_div {
          grid-area: b;
          display: flex;
          flex-grow: 1;
          width: auto;
          box-sizing: border-box;
          align-content: center;
          justify-content: center;
        }
        .input_div input {
          border: none;
          border-bottom: black solid 1px;
          font: inherit;
          width: 97%;
          font-size: 1em;
          box-sizing: border-box;
          padding: 0px;
          overflow: hidden;
          margin: 0px 4px 4px 4px;
          padding: 1px 0px 1px 0px;
          background-color: rgba(255, 255, 255, 0);
          text-align: center;
        }
      `}
    </style>
  </div>
}

/////////////////////// place button
const DrawPlaceButton = ({ cards, undoable }) => {
  // assumption is most of the time nothing suitable for inserting 
  // into the working sentence is in working row, so default to disabled
  let activeClass = "place_button disabled";

  // if all the working row cards have something written on them, and we're not
  // currently waiting in the "undo" grace period, enable the button
  let somethingWritten = false;
  let cardsInWR = [];
  if (Array.isArray(cards)) {
    cardsInWR = cards.filter(x => x.working);
  }
  if (cardsInWR.length > 0) {
    somethingWritten = true;
    cardsInWR.forEach(x => { if (x.word.length === 0) { somethingWritten = false } });
  }

  if (somethingWritten && !undoable) {
    activeClass = "place_button enabled";
  }

  const onDragStartHandler = (e) => {
    e.dataTransfer.setDragImage(e.target, 25, -5)
    //console.log(e)
  }

  return <button className={activeClass} draggable="true"
    onDragStart={onDragStartHandler}>
    <div className="bigTriangle"></div>
    <div className="littleTriangle"></div>
    drag<br />to<br />insert
    <style jsx>
      {`
        .place_button {
          width: 4em;
          height: 4.8em;
          padding: 0.2em 0.6em;
          margin: 0px;
          grid-area: right;
          position: relative;
        }
        .enabled {
          color: var(--active_outline);
          border: 2px solid var(--active_outline);
        }
        .bigTriangle {
          width: 0;
          height: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-bottom: 15px solid var(--active_outline);
          position: absolute;
          top: -15px;
          right: calc(50% - 15px);
        }
        .littleTriangle {
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-bottom: 12px solid var(--mainbg);
          position: absolute;
          top: -12px;
          right: calc(50% - 12px );
        }
        .place_button:hover div {
          border-bottom-color: white;
        }
      `}
    </style>
  </button>
}

/////////////////////// available card buttons
const DrawCardButton = ({ type, addToWR, cards, toggleWorking }) => {
  let activeClass = "disabled";
  let numType = [];
  if (Array.isArray(cards)) {
    numType = cards.filter(element => (element.type === type && !element.working))
  };
  if (numType.length > 0) {
    activeClass = type;
  }

  return <button className={activeClass}
    onClick={(e) => {
      e.preventDefault();
      let top = numType[numType.length - 1];
      toggleWorking(top.id)
      addToWR(top.id);
    }}>
    {type}<br /> {numType.length}
    <style jsx>
      {`
        button {
          padding: 0.1em;
          border: 1px solid;
          font-size: 0.7em;
          height: 100%;
          width: 10%;
          margin: 3px 0px;
        }
      `}
    </style>
  </button>
}


/////////////////////// the whole shebang
const DrawCards = ({ cards, onEdit, active, wR, toggleWorking, clearWR, addToWR, removeFromWR, undoable, undoSecondsLeft, winner, totalCardCount, sentenceUpdateCount }) => {
  return <div className="card_row">
    <div className="working_row">
      <DrawClearButton updateState={onEdit} active={active} wR={wR} clearWR={clearWR} toggleWorking={toggleWorking} />
      <div className="working_row_slot">
        <DrawWorkingRowContent wR={wR} removeFromWR={removeFromWR} updateState={onEdit} cards={cards} toggleWorking={toggleWorking} undoable={undoable} undoSecondsLeft={undoSecondsLeft} winner={winner} totalCardCount={totalCardCount} sentenceUpdateCount={sentenceUpdateCount} />
      </div>
      <DrawPlaceButton cards={cards} undoable={undoable} />
    </div>
    <div className="available_cards">
      <DrawCardButton type="adj" wR={wR} addToWR={addToWR} cards={cards} toggleWorking={toggleWorking} />
      <DrawCardButton type="adv" wR={wR} addToWR={addToWR} cards={cards} toggleWorking={toggleWorking} />
      <DrawCardButton type="conj" wR={wR} addToWR={addToWR} cards={cards} toggleWorking={toggleWorking} />
      <DrawCardButton type="pron" wR={wR} addToWR={addToWR} cards={cards} toggleWorking={toggleWorking} />
      <DrawCardButton type="noun" wR={wR} addToWR={addToWR} cards={cards} toggleWorking={toggleWorking} />
      <DrawCardButton type="verb" wR={wR} addToWR={addToWR} cards={cards} toggleWorking={toggleWorking} />
      <DrawCardButton type="prep" wR={wR} addToWR={addToWR} cards={cards} toggleWorking={toggleWorking} />
      <DrawCardButton type="intrj" wR={wR} addToWR={addToWR} cards={cards} toggleWorking={toggleWorking} />
    </div>
    <style jsx>
      {`
       .card_row {
          grid-area: bot;
          box-sizing: border-box;
          display: grid;
          width: 100%;
          padding: 0px 5vmin;
          height: auto;
          grid-template-columns: auto auto auto;
          grid-template-rows: auto auto;
          grid-template-areas: 'bot1 bot1 bot1' 'bot2 bot2 bot2';
          text-align: center;
        }

        .working_row {
          grid-area: bot1;
          box-sizing: border-box;
          padding: 2px 0vmin;
          display: grid;
          grid-template-columns: 2.8em 1fr 2.8em;
          grid-template-rows: auto;
          grid-template-areas: 'left middle right';
          grid-column-gap: 5px;
          text-align: center;
        }

        .working_row_slot {
          grid-area: middle;
          box-sizing: border-box;
          background-color: whitesmoke;
          border: 1px solid black;
          display: flex;
          width: auto;
          height: 100%;
          align-items: center;
          justify-content: center;
        }

        .available_cards {
          grid-area: bot2;
          display: flex;
          margin-top: 2px;
          margin-bottom: 4px;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .adj {
          background-color: var(--adj);
          color: black;
          border-color: black;
        }

        .noun {
          background-color: var(--noun);
          color: black;
          border-color: black;
        }

        .adv {
          background-color: var(--adv);
          color: black;
          border-color: black;
        }

        .verb {
          background-color: var(--verb);
          color: black;
          border-color: black;
        }

        .conj {
          background-color: var(--conj);
          color: black;
          border-color: black;
        }

        .prep {
          background-color: var(--prep);
          color: black;
          border-color: black;
        }

        .pron {
          background-color: var(--pron);
          color: black;
          border-color: black;
        }

        .intrj {
          background-color: var(--intrj);
          color: black;
          border-color: black;
        }
      `}
    </style>
  </div>
}

export default DrawCards;
