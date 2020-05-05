import React from 'react';
import DrawSentence from './SentenceBlocks';
import DrawCards from './Cards';
import DrawButtons from './Buttons';
import sentences from '../../data/sentences.json';
import { preInsertProcessing } from './preInsertProcessing';
import { strToGameState } from './gameStatePack';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,            // game is currently being played
      placing: false,           // display is showing where a word can be inserted
      showSharing: false,       // to show the sharing overlay or not
      sentence: [],             // the current sentence
      oldSentence: [],          // previous sentence
      cards: [],                // all word-types cards player has
      workingCards: [],         // word-type cards in the working row
      lastCards: [],            // after a word gets inserted, old card state goes here (for undo)
      undoable: false,          // if true you can undo the most recent move
      undoSecondsLeft: 0,       // seconds left before undo turns false again
      winner: false,            // set when the game is won
      sentenceUpdateCount: 0,   // to keep track of number of moves
      totalCardCount: 0,        // to track cards played
      gameMode: "default"       // default mode means new game chooses random sentence
    };

    this.updateSentence = this.updateSentence.bind(this); // adds new sentence to history
    this.undo = this.undo.bind(this);
    this.newGame = this.newGame.bind(this);
    this.newCard = this.newCard.bind(this);
    this.editCard = this.editCard.bind(this);
    this.toggleWorking = this.toggleWorking.bind(this);
    this.clearWR = this.clearWR.bind(this);
    this.addToWR = this.addToWR.bind(this);
    this.removeFromWR = this.removeFromWR.bind(this);
    this.insert = this.insert.bind(this);
    this.setPlacing = this.setPlacing.bind(this);
    this.setLastCards = this.setLastCards.bind(this);
    this.setUndoability = this.setUndoability.bind(this);
    this.setShowSharing = this.setShowSharing.bind(this);
  }

  componentDidMount() {
    const defaultSentence = "1sHello~2a~3zWorld~4g~~"
    let temp = {}
    let gameActive = false
    if (!this.props.hasOwnProperty("gameState")) {
      temp = JSON.parse(strToGameState({ canvasURLstring: defaultSentence }))
    } else {
      temp = JSON.parse(strToGameState({ canvasURLstring: this.props.gameState }))
      gameActive = true
    }

    // sometimes the game coming from server has cards, sometimes not
    ////if (temp.cards.length === 0) {
    ////  // for now, every new game starts with five cards
    ////  for (var i = 0; i < 5; i++) {
    ////    temp.cards.push(newRandomCard(i));
    ////  }
    ////}

    this.setState({
      oldSentence: [],
      lastCards: [],
      active: gameActive,
      winner: false,
      sentenceUpdateCount: 0,
      sentence: temp.sentence,
      cards: temp.cards,
      totalCardCount: temp.cards.length,
    })
  }

  updateSentence(longerSentence) {
    this.setState({ sentence: longerSentence, oldSentence: this.state.sentence });
  }

  // after placing a words in the sentence, the user has 7 seconds to
  // change their mind; after this the user is given a new card;
  // this function just handles the "undo" part
  undo() {
    this.setState({ sentence: this.state.oldSentence, oldSentence: [], cards: this.state.lastCards, undoable: false });
  }

  newGame() {
    // for now, only one game mode, "default"
    // but other modes might be added in future
    let new_game = chooseNewGame(sentences, this.state.gameMode);

    this.setState({
      sentence: (new_game.sentence),
    });
    this.setPlacing(false);
    this.clearWR();
    // sometimes the game coming from server has cards, sometimes not
    if (new_game.cards.length > 0) {
      this.setState({ cards: new_game.cards })
    } else {
      let x = [];
      // for now, every new game starts with five cards
      for (var i = 0; i < 5; i++) {
        x.push(newRandomCard(i));
      }
      this.setState({ cards: x, totalCardCount: 5, });
    }
    this.setState({ oldSentence: [], lastCards: [], active: true, winner: false, sentenceUpdateCount: 0 });
  }

  newCard() {
    this.setState({
      cards: this.state.cards.concat([newRandomCard(this.state.totalCardCount)]),
      totalCardCount: this.state.totalCardCount + 1,
    });
  }

  editCard(cardId, value) {
    let x = this.state.cards;
    const indexOfCard = x.findIndex(element => element.id === cardId);
    x[indexOfCard].word = value;
    this.setState({ cards: x });
  }

  toggleWorking(cardId) {
    let updatedCards = this.state.cards.slice();
    let cardIndex = updatedCards.findIndex(element => element.id === cardId);
    updatedCards[cardIndex].working = !updatedCards[cardIndex].working;
    this.setState({ cards: updatedCards });
  }

  clearWR() {
    this.setState({ workingCards: [] });
    this.setPlacing(false);
  }

  addToWR(cardId) {
    this.setState({ workingCards: this.state.workingCards.concat([cardId]) });
  }

  removeFromWR(cardId) {
    this.setState({ workingCards: this.state.workingCards.filter(x => x !== cardId) });
    let anythingToPlace = false;
    this.state.cards.forEach(x => { if (x.word.length > 0) { anythingToPlace = true } });
    this.setPlacing(this.state.placing && anythingToPlace);
  }

  insert(index) {
    // every new word added to the sentence
    const maxCardId = this.state.sentence.reduce((max, x) => (x.id > max ? x.id : max), 0);
    let toBeInserted = preInsertProcessing(this.state.cards, this.state.workingCards, maxCardId);
    let newSentenceHead = this.state.sentence.slice(0, index + 1);
    let newSentenceTail = this.state.sentence.slice(index + 1);
    let newSentence = newSentenceHead.concat(toBeInserted).concat(newSentenceTail);
    // when we update the sentence, we also make a copy of the old one in case we need to undo it
    this.updateSentence(newSentence);
    // some clean up needs to be done after words have been inserted into the sentence
    // make a clean (no content) copy of cards in case we need to undo
    this.setLastCards();
    // note: some events (checking for a winner, scoring, adding a new card) are triggered in setUndoability
    this.setUndoability();
    // filter to find cards (by id) that have not been placed into sentence
    this.setState({ cards: this.state.cards.filter(x => this.state.workingCards.findIndex(y => y === x.id) === -1) });
    this.clearWR();
  }

  setUndoability() {
    this.setState({ undoable: true, undoSecondsLeft: 7, });
    const interval = setInterval(() => {
      if (this.state.undoable && this.state.undoSecondsLeft > 0) {
        this.setState({ undoSecondsLeft: this.state.undoSecondsLeft - 1 });
      } else if (this.state.undoable && this.state.undoSecondsLeft === 0) {
        this.setState({ undoable: false });
        clearInterval(interval);
        this.setState({ oldSentence: [], sentenceUpdateCount: this.state.sentenceUpdateCount + 1 })
        // check if we won the game, if not new card
        if (this.state.cards.length === 0) {
          this.setState({ winner: true, active: false, });
        } else {
          this.newCard();
        }
      } else {
        this.setState({ undoSecondsLeft: 0 });
        clearInterval(interval);
      }
    }, 1000);
  }

  setShowSharing(value) {
    this.setState({ showSharing: value });
  }

  setPlacing(value) {
    this.setState({ placing: value });
  }

  // makes a copy of the state of cards but with no content/no working row
  setLastCards() {
    this.setState({
      lastCards: this.state.cards.map(card => (
        {
          id: card.id,
          type: card.type,
          working: false,
          word: '',
        })
      )
    });
  }

  render() {
    return <div className="Game">
      <DrawButtons
        undo={this.undo}
        cards={this.state.cards}
        sentence={this.state.sentence}
        newGame={this.newGame}
        newCard={this.newCard}
        showSharing={this.state.showSharing}
        setShowSharing={this.setShowSharing}
        active={this.state.active}
        undoable={this.state.undoable}
        workingCards={this.state.workingCards}
      />
      <DrawSentence
        sentence={this.state.sentence}
        placing={this.state.placing}
        insert={this.insert}
      />
      <DrawCards
        cards={this.state.cards}
        onEdit={this.editCard}
        active={this.state.active}
        wR={this.state.workingCards}
        toggleWorking={this.toggleWorking}
        clearWR={this.clearWR}
        addToWR={this.addToWR}
        removeFromWR={this.removeFromWR}
        setPlacing={this.setPlacing}
        placing={this.state.placing}
        undoable={this.state.undoable}
        undoSecondsLeft={this.state.undoSecondsLeft}
        winner={this.state.winner}
        totalCardCount={this.state.totalCardCount}
        sentenceUpdateCount={this.state.sentenceUpdateCount}
      />
      <style jsx>{`
        .Game {
          display: grid;
          box-sizing: border-box;
          width: 100%;
          min-height: 0;
          height: 100%;
          grid-template-columns: 20% 60% 20%;
          grid-template-rows: auto minmax(0, 1fr) auto;
          grid-template-areas: 'top top top' 'mid mid mid' 'bot bot bot';
          color: white;
          text-align: center;
        }  
      `}</style>
    </div>
  }
}

const newRandomCard = (newCardId) => {
  const rando = Math.floor(Math.random() * 1000);
  let type = null;
  switch (true) {
    case (rando < 280): type = "noun"; break;
    case (rando < 460): type = "verb"; break;
    case (rando < 530): type = "adj"; break;
    case (rando < 580): type = "adv"; break;
    case (rando < 670): type = "pron"; break;
    case (rando < 790): type = "prep"; break;
    case (rando < 980): type = "conj"; break;
    default: type = "intrj";
  }
  return {
    id: newCardId,
    type: type,
    working: false,
    word: '',
  }
}

const chooseNewGame = (sentences, mode) => {
  let returnValue = {};
  let senties = [];
  for (let key in sentences) {
    // all normal sentences have IDs >= 1000
    if (sentences.hasOwnProperty(key) && key.length > 4) {
      senties.push(key);
    }
  }
  if (mode === "default") {
    let randomKey = Math.floor(Math.random() * senties.length);
    returnValue = sentences[senties[randomKey]];
  }

  return returnValue;
}


export default Game;