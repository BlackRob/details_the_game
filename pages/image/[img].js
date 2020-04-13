import { drawCanvas } from "../../details/components/drawCanvas"
import sentences from '../../data/sentences.json';
import React from 'react';

const ThisImage = ({ data }) => {
  //console.log({ data })
  let newImage = React.createElement("img", {
    src: data,
  })
  return <>{newImage}</>
}

// This gets called on every request
export async function getServerSideProps(context) {

  console.log(context.query.img)
  console.log(sentences[`_${context.query.img}`].sentence)
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

  let workingCards = []

  sentence = sentences[`_${context.query.img}`].sentence
  //console.log(typeof (sentence))
  //console.log(typeof (sentences["_1002"].sentence))

  const data = drawCanvas({ sentence, cards, workingCards });

  // Pass data to the page via props
  return { props: { data } }
}

export default ThisImage

