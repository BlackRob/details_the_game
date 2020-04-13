// shorten json as much as possible and convert it to a string
export const gameStateToStr = ({ sentence, cards }) => {
  let sArray = (Object.keys(sentence))

  let outputArray = sArray.map(id => {
    return wordShorthand(sentence[id])
  })

  // remove the empty string in position 0
  outputArray.shift()
  // add a tilde to end of array,
  // because this will result in 2 tildes when
  // we join it later signalling end of the sentence part
  outputArray.push("~")
  //console.log(outputArray)

  // first part of output string
  let outputString = outputArray.join('~')

  let cArray = (Object.keys(cards))
  // let's reuse outputArray to process the cards
  outputArray = cArray.map(id => {
    return cardShorthand(cards[id])
  })

  // second part of output string
  let outputString2 = outputArray.join('~')

  // just in case there were weird characters, encode URI
  return encodeURI(outputString + outputString2)
}

// reverse the process (expand the string back into a useable game state)
export const strToGameState = ({ canvasURLstring }) => {
  let myString = decodeURI(canvasURLstring)
  let gameState = { "cards": null, "sentence": null }
  gameState.cards = []
  gameState.sentence = []

  let sI = 0 // sentence index so we iterate through it
  let sTL = 0 // sentence temp length so we iterate through it
  let sE = myString.indexOf("~~")

  // we skip the "head" element when we encode a sentence, so we
  // start by adding it at the beginning
  gameState.sentence.push({ id: 0, type: "head", word: "" })
  // method: look at each character in turn, determine
  // what it is based by it's position, content, place it into
  // the gameState object; but we split it into two arrays first
  let sArray = myString.substring(0, sE).split("~")
  let cArray = myString.substring(sE + 2).split("~")

  // console.log(sArray)
  // console.log(cArray)

  // regular expressions for separating the ID
  // from the rest of the string
  const idRE = /^\d*/
  // a dictionary for matching punctuation to type
  const typeDict = {
    "p_com": ",",
    "p_semi": ";",
    "p_cln": ":",
    "p_parL": "(",
    "p_dbldashL": "--",
    "p_prd": ".",
    "p_exc": "!",
    "p_parR": ")",
    "p_qm": "?",
    "p_dbldashR": "--"
  }

  sArray.forEach((x) => {
    let xID = x.match(idRE)[0]
    let xTypecode = x[xID.length]
    let xType = decodeType(xTypecode)
    let xWord = x.substring(xID.length + 1)
    // if the word is type punc, we have to insert
    // the actual punctuation as the "word" value
    if (xType[1] === "_") {  // true for all punc types
      xWord = typeDict[xType]
    }
    gameState.sentence.push({
      id: parseInt(xID),
      type: xType,
      word: xWord,
    })
  })

  cArray.forEach((x) => {
    let working = false
    let y = x // we might have to edit it, so we make a copy
    // if first character is a t, working = true
    if (x[0] === "t") {
      working = true
      y = x.substring(1)
    }
    let xID = y.match(idRE)[0]
    let xTypecode = y[xID.length]
    let xType = decodeType(xTypecode)
    let xWord = y.substring(xID.length + 1)
    gameState.cards.push({
      id: parseInt(xID),
      type: xType,
      word: xWord,
      working: working
    })
  })

  console.log(gameState)

  return gameState
}

// convert "word" object into a string
const wordShorthand = (wordObj) => {
  let typeCode = null

  // each code is number (id), single char, then word
  let x = wordObj.type
  switch (true) {
    case (x === "p_com"):
      typeCode = `${wordObj.id}a`;
      break;
    case (x === "p_semi"):
      typeCode = `${wordObj.id}b`;
      break;
    case (x === "p_cln"):
      typeCode = `${wordObj.id}c`;
      break;
    case (x === "p_parL"):
      typeCode = `${wordObj.id}d`;
      break;
    case (x === "p_dbldashL"):
      typeCode = `${wordObj.id}e`;
      break;
    case (x === "p_prd"):
      typeCode = `${wordObj.id}f`;
      break;
    case (x === "p_exc"):
      typeCode = `${wordObj.id}g`;
      break;
    case (x === "p_parR"):
      typeCode = `${wordObj.id}h`;
      break;
    case (x === "p_qm"):
      typeCode = `${wordObj.id}i`;
      break;
    case (x === "p_dbldashR"):
      typeCode = `${wordObj.id}j`;
      break;
    case (x === "head"):
      // we don't write anything for head
      typeCode = "";
      break;
    // notice, we skip from the beginning of the alphabet
    // for letters to stand for punctuation types, but skip to
    // the end and go backwards for word types
    case (x === "intrj"):
      typeCode = `${wordObj.id}s${wordObj.word}`;
      break;
    case (x === "pron"):
      typeCode = `${wordObj.id}t${wordObj.word}`;
      break;
    case (x === "conj"):
      typeCode = `${wordObj.id}u${wordObj.word}`;
      break;
    case (x === "prep"):
      typeCode = `${wordObj.id}v${wordObj.word}`;
      break;
    case (x === "adv"):
      typeCode = `${wordObj.id}w${wordObj.word}`;
      break;
    case (x === "adj"):
      typeCode = `${wordObj.id}x${wordObj.word}`;
      break;
    case (x === "verb"):
      typeCode = `${wordObj.id}y${wordObj.word}`;
      break;
    case (x === "noun"):
      typeCode = `${wordObj.id}z${wordObj.word}`;
      break;
    default:
      typeCode = "";
  }

  return typeCode
}

// convert "card" object into a string
const cardShorthand = (cardObj) => {
  let typeCode = null

  ///////////////////////////////////////////////////////////////////
  /////// ATTENTION 
  /////// the t function is supposed to add a t to the beginning of
  /////// a string that's "working" -- the t functional is 
  /////// currently cobbled with by comment markers, because the 
  /////// (intentionally) not being passed when a game is shared
  //////////////////////// (for now)
  // each code is number (id), single char, then word
  let x = cardObj.type
  switch (true) {
    case (x === "intrj"):
      typeCode = `${t(cardObj.working)}${cardObj.id}s${cardObj.word}`;
      break;
    case (x === "pron"):
      typeCode = `${t(cardObj.working)}${cardObj.id}t${cardObj.word}`;
      break;
    case (x === "conj"):
      typeCode = `${t(cardObj.working)}${cardObj.id}u${cardObj.word}`;
      break;
    case (x === "prep"):
      typeCode = `${t(cardObj.working)}${cardObj.id}v${cardObj.word}`;
      break;
    case (x === "adv"):
      typeCode = `${t(cardObj.working)}${cardObj.id}w${cardObj.word}`;
      break;
    case (x === "adj"):
      typeCode = `${t(cardObj.working)}${cardObj.id}x${cardObj.word}`;
      break;
    case (x === "verb"):
      typeCode = `${t(cardObj.working)}${cardObj.id}y${cardObj.word}`;
      break;
    case (x === "noun"):
      typeCode = `${t(cardObj.working)}${cardObj.id}z${cardObj.word}`;
      break;
    default:
      // we should never get here
      typeCode = "";
  }

  return typeCode
}

const t = (w) => {
  let returnValue = ""
  // w should be a boolean
  ////if (w) {
  ////  returnValue = "t"
  ////}

  return returnValue
}

const decodeType = (x) => {
  let typeCode = null
  switch (true) {
    case (x === "a"):
      typeCode = "p_com";
      break;
    case (x === "b"):
      typeCode = "p_semi";
      break;
    case (x === "c"):
      typeCode = "p_cln";
      break;
    case (x === "d"):
      typeCode = "p_parL";
      break;
    case (x === "e"):
      typeCode = "p_dbldashL";
      break;
    case (x === "f"):
      typeCode = "p_prd";
      break;
    case (x === "g"):
      typeCode = "p_exc";
      break;
    case (x === "h"):
      typeCode = "p_parR";
      break;
    case (x === "i"):
      typeCode = "p_qm";
      break;
    case (x === "j"):
      typeCode = "p_dbldashR";
      break;
    // notice, we skip from the beginning of the alphabet
    // for letters to stand for punctuation types, but skip to
    // the end and go backwards for word types
    case (x === "s"):
      typeCode = "intrj";
      break;
    case (x === "t"):
      typeCode = "pron";
      break;
    case (x === "u"):
      typeCode = "conj";
      break;
    case (x === "v"):
      typeCode = "prep";
      break;
    case (x === "w"):
      typeCode = "adv";
      break;
    case (x === "x"):
      typeCode = "adj";
      break;
    case (x === "y"):
      typeCode = "verb";
      break;
    case (x === "z"):
      typeCode = "noun";
      break;
    default:
      // should never get here
      typeCode = "";
  }

  return typeCode
}

let sentence = [{ id: 0, type: "head", word: "" },
{ id: 1, type: "noun", word: "Donkeys" },
{ id: 2, type: "verb", word: "hate" },
{ id: 3, type: "noun", word: "cucumbers" },
{ id: 4, type: "p_prd", word: "." }]

let cards = [{ id: 0, type: "adv", word: "", working: false },
{ id: 1, type: "verb", word: "poop", working: true },
{ id: 2, type: "adv", word: "", working: false },
{ id: 3, type: "prep", word: "", working: false },
{ id: 4, type: "conj", word: "", working: false }]