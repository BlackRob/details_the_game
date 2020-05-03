/* this function redraws the current sentence and cards
  on a canvas, so that it can be shared as an image */
import { registerFont, createCanvas } from 'canvas';
import path from 'path'
//import RobotoR from '../../public/Roboto-Regular.ttf'
//import fonttrick from 'fonttrick'


// workingCards, width, height are optional
export const drawCanvas = ({ sentence, cards, workingCards, width, height, fontPath }) => {

  // default canvas size
  let cw = 1200 // canvas width
  let ch = 630 // canvas height; this is a minimun, it might change
  // if given different canvas size, update
  if (width && !height) {
    cw = width
    ch = Math.floor(width / 1.91)
  }
  if (height && width) {
    cw = width
    ch = height
  }
  if (height && !width) {
    ch = height
    cw = Math.floor(height * 1.91)
  }


  let theFontPath = path.join(process.cwd(), 'public/fonts/Roboto-Regular.ttf')

  if (registerFont !== undefined) {
    if (process.env.NODE_ENV === "production") {
      console.log(fontPath)
      theFontPath = fontPath
    }
    registerFont(theFontPath, { family: 'Roboto' })
  }
  const canvas = createCanvas(cw, ch)
  const ctx = canvas.getContext('2d')

  // we have to set and adjust the font several times
  // so we set constants, but they have to be proportional
  // to the width, so
  const sF = Math.floor(cw / 40)
  const mF = Math.floor(cw / 30)
  const lF = Math.floor(cw / 20)


  const sFont = `${sF}px Roboto, sans-serif`
  const mFont = `${mF}px Roboto, sans-serif`
  const lFont = `${lF}px Roboto, sans-serif`

  // sentence left/right margin
  const margin = cw / 60
  // top banner should always be the same
  const top_banner_height = cw / 18
  // margin at top of sentence should have a minimum value
  let top_bottom_sentence_margin = cw / 55
  // calculated height of sentence
  let sentence_height = 0
  // if working row is empty, we don't show it //// currently not used!
  let working_row_height = ch / 6
  // if sentence is complete (no cards left), we don't show card row
  let card_row_height = ch / 7;

  // I don't know if this is necessary, but I want to use the same font as
  // the rest of the game is played in
  ctx.font = lFont

  // when working with text, with this font and size, assuming a lineheight
  // of 80px with the baseline at 60 looks good 
  // some convenience variables
  const rm = cw / 35 // "row margin" for between rows
  const rh = lF * 1.4 // average "row height" 
  const blo = lF / 3; // baseline offset
  const wpr = lF / 3.5; // word padding right
  let rb = top_banner_height; // "row beginning" w/ initial value

  // do some pre-printing work, return an augmented array
  // it's important that the font is set to the correct font now for sizing
  let printArray = prePrintSentence(sentence, rm, rh, cw, wpr, margin, ctx);

  // calculate how tall sentence block should be
  let numRows = printArray[printArray.length - 1].row;
  sentence_height = numRows * rh + rm * (numRows - 1);

  let working_height = top_banner_height + top_bottom_sentence_margin +
    sentence_height + top_bottom_sentence_margin +
    // working_row_height + margin +
    card_row_height + margin;
  // if a short sentence, we don't want our image to be too short
  canvas.height = Math.max(ch, working_height);

  // resetting canvas height messes up the font, so set it again
  ctx.font = lFont;

  // if we're using minimum size, sentence margins to center sentence
  if (ch > working_height) {
    top_bottom_sentence_margin = top_bottom_sentence_margin + (ch - working_height) / 2;
    working_height = ch;
  }

  // background
  ctx.fillStyle = "#282c34";
  ctx.fillRect(0, 0, cw, canvas.height);

  // header
  ctx.font = mFont;
  ctx.fillStyle = "lightgray"
  ctx.fillText("details", margin, (rb - blo))
  ctx.fillStyle = "dodgerblue"
  let gamesWidth = ctx.measureText("games").width
  ctx.fillText("games", cw - margin - gamesWidth, (rb - blo))
  ctx.fillStyle = "lavender"
  let dotWidth = ctx.measureText(".").width + lF / 9
  ctx.fillText(".", cw - margin - dotWidth - gamesWidth, (rb - blo))
  ctx.fillStyle = "lightskyblue"
  let grumblyWidth = ctx.measureText("grumbly").width
  ctx.fillText("grumbly", cw - margin - grumblyWidth - dotWidth - lF / 9 - gamesWidth, (rb - blo))

  // top margin
  rb += top_bottom_sentence_margin;

  // sentence
  ctx.font = lFont;
  printSentence(printArray, rb, wpr, blo, cw, ctx);
  rb += sentence_height;

  // bottom margin
  rb += top_bottom_sentence_margin;

  // working row --- not implemented, not sure if I want to show it
  /////ctx.fillStyle = 'whitesmoke';
  /////printWorkingRow(cards, margin, rb, cw, working_row_height, workingCards, ctx);
  /////rb += working_row_height;

  // between rows
  /////rb += margin;

  // card row
  ctx.lineWidth = lFont / 10;
  printCardRow(cards, margin, rb, cw, card_row_height, sFont, ctx);
  rb += card_row_height;

  // final margin
  rb += margin;

  console.log(canvas.toDataURL())
  // return canvas as dataURL so I can share it ;)
  return canvas.toDataURL();
}

// printing the sentence is complicated because we need to figure
// out how many words go on each row, what color to make them, 
// set the margins... so we do some pre-printing work
const prePrintSentence = (sentence, rm, rh, cw, wpr, margin, ctx) => {
  // sentence is an array of objects, we're mapping each object
  // to a different object with a bit of extra information
  let printArray = sentence.map(word => ({
    id: word.id,
    word: word.word,
    type: word.type,
    color: typeColor(word.type),
    width: ctx.measureText(word.word).width + wpr,
    row: 1,  // default to row 1, will check and update later
    wordX: 0, // x position
    wordY: 0, // y position
  }));

  // horizontal spacing is the next issue
  // each word has it's own width, plus some space after it,
  // plus each row has a left and right margin
  const ww = cw - margin - margin;  // working width
  let currentRow = 1;
  let currentRowWidth = 0;

  for (let i = 0; i < printArray.length; i++) {
    // first check, is there enough room in row for word?
    // most of the time there is (more words are in one row
    // than have to wrap to the next), but we need to check
    // for several situations that require wrapping:
    // first, is the word too long for the remaining space? wrap!
    if (((printArray[i].width) >= (ww - currentRowWidth)) ||
      // or, if not too long, but it is followed by punctuation,
      // we want the punctuation to stay with it, so is it
      // too long with the punctuation? wrap!
      ((i + 1 < printArray.length) && // make sure this isn't last element
        isPunc(printArray[i + 1].type) && // if so, is next punctuation
        // if yes, and they both won't fit on this row, then wrap
        (printArray[i].width + printArray[i + 1].width) > (ww - currentRowWidth))) {
      currentRow += 1;
      // if we're here, we wrapped... so we need to put current word
      // on new line
      printArray[i].row = currentRow;
      // we also need to update the working width of the current row
      currentRowWidth = printArray[i].width + wpr;
      // if we did wrap because of punctuation, we should add
      // the punctuation right now 
      if (isPunc(printArray[i + 1].type)) {
        printArray[i + 1].row = currentRow;
        currentRowWidth = currentRowWidth + printArray[i + 1].width;
        // and since i+1 has been dealt with
        i++;
      }
    } else {
      printArray[i].row = currentRow;
      currentRowWidth = currentRowWidth + printArray[i].width;
    }
  }

  // now we know what row each word goes in, we loop through printArray
  // again to figure out the x and y position of each word --not 
  // absolute position though, left margin gets added when drawn
  currentRow = 1;
  let currentRowOffset = 0;
  for (let i = 0; i < printArray.length; i++) {
    printArray[i].wordX = currentRowOffset;
    // adjust for puctuation  :)
    if (isPunc(printArray[i].type)) {
      printArray[i].wordX += puncShift(printArray[i].type, cw)
    }
    //// temporary adjustment to let period-as-separator (like in URL) work
    //// if (printArray[i].type === "p_prd") {
    ////   currentRowOffset -= 40
    //// }
    currentRowOffset = currentRowOffset + printArray[i].width;
    printArray[i].wordY = rh * currentRow + rm * (currentRow - 1);
    // if there is a next element, look ahead and see if we need
    // to increment the row number / reset row offset
    if ((i + 1 < printArray.length) && (printArray[i + 1].row !== currentRow)) {
      currentRow += 1;
      currentRowOffset = 0;
    }
  }

  return printArray;
}

// function to actually write the sentence
const printSentence = (printArray, rb, wpr, blo, cw, ctx) => {
  // printArray contains the words broken out into rows
  // with their lengths and colors, but it doesn't have 
  // info about offsets for drawing: offset from top of
  // canvas for Y, from left for X, and margin adjustments
  // to center texts

  // calculate width of content in each row
  let rowWordsWidth = [0];
  let numRows = printArray[printArray.length - 1].row;
  for (let i = 1; i <= numRows; i++) {
    rowWordsWidth.push(printArray.reduce((a, b) => {
      if (b.row === i) {
        return a + b.width;
      } else {
        return a;
      }
    }, 0));
  }

  // calculate indentation for each row
  let indent = [0];
  // except for 1st row, we need to add a left margin 
  // equal to the right margin for balance
  let extraLeftMargin = wpr;
  for (let i = 1; i <= numRows; i++) {
    if (i === 1) {
      extraLeftMargin = 0;
    }
    indent.push((cw - rowWordsWidth[i] + extraLeftMargin) / 2.0);
  }

  for (let i = 0; i < printArray.length; i++) {
    ctx.fillStyle = printArray[i].color;
    ctx.fillText(printArray[i].word,
      (printArray[i].wordX + indent[printArray[i].row]),
      (printArray[i].wordY + rb - blo));
  }
}

// currently not showing the working row
const printWorkingRow = (cards, margin, rb, cw, working_row_height, workingCards, ctx) => {
  ctx.fillRect(margin, rb, cw - margin - margin, working_row_height);
}

const printCardRow = (cards, margin, rb, cw, card_row_height, font, ctx) => {
  const cardbuttons = ["adj", "adv", "conj", "pron", "noun", "verb", "prep", "intrj"];
  const w = cw / 9.4; // card width
  const gap = (cw - margin - margin - 8 * w) / 7;  // between cards
  const r = cw / 150; // corner radius of button
  const y = rb;
  const h = card_row_height;
  const r1y = y + card_row_height / 2.5;
  const r2y = y + card_row_height / 1.25;
  let x = margin; // cards are arranged horizontally, this is initial value

  ctx.lineWidth = cw / 400;
  ctx.textAlign = "center";

  cardbuttons.forEach(element => {
    let fill = false;
    let cardsByType = cards.filter(kard => (kard.type === element));  // && !kard.working
    if (cardsByType.length > 0) {
      fill = true;
      ctx.fillStyle = typeColor(element);
    } else {
      ctx.strokeStyle = 'gray';
      ctx.fillStyle = 'gray';
    }

    roundedRectangle(x, y, w, h, r, ctx, fill);

    ctx.font = font;
    if (fill) {
      ctx.fillStyle = 'black';
    }
    ctx.fillText(element, (x + w / 2), r1y);
    ctx.fillText(cardsByType.length, x + w / 2, r2y);
    x = x + w + gap;
  });
}

const typeColor = (type) => {
  let color = "";
  switch (true) {
    case (type === "conj"):
      color = "yellow"
      break;
    case (type === "adj"):
      color = "lightskyblue"
      break;
    case (type === "noun"):
      color = "dodgerblue"
      break;
    case (type === "adv"):
      color = "pink"
      break;
    case (type === "verb"):
      color = "#CE3175"
      break;
    case (type === "intrj"):
      color = "orange"
      break;
    case (type === "prep"):
      color = "lime"
      break;
    case (type === "pron"):
      color = "fuchsia"
      break;
    default:
      color = "lavender";
  }

  return color;
}

const roundedRectangle = (x, y, w, h, r, ctx, fill) => {
  ctx.beginPath();
  ctx.moveTo(x + w / 2, y);
  ctx.arcTo(x + w, y, x + w, y + h / 2, r);
  ctx.arcTo(x + w, y + h, x + w / 2, y + h, r);
  ctx.arcTo(x, y + h, x, y + h / 2, r);
  ctx.arcTo(x, y, x + w / 2, y, r);
  // I don't know why the previous line doesn't
  // close the rectangle, so added a final segment
  ctx.lineTo(x + w / 2, y);
  if (fill) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
  ctx.closePath();
}

// a bunch of different types of punctuation ;)
// but they all start "p_", so we look for the underscore
const isPunc = (type) => {
  let punc = false
  if (type[1] === "_") {
    punc = true
  }
  return punc
}

// sometimes punctuation needs to be adjusted,
// moved a little left or right depending on the type
// types: p_exc, p_com, p_cln, p_semi, p_prd, p_parL, p_parR, p_qm, 
// p_dbldashL, p_dbldashR, p_Lqt, p_Rqt
const puncShift = (type, cw) => {
  let shift = -cw / 100
  if (type === "p_parL" || type === "p_dbldashL" || type === "p_Lqt") {
    shift = cw / 100
  }
  return shift
}
