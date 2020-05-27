import Link from 'next/link'


export default function typeButtonDiv() {
  return <div name="learn" className="typeButtonDiv">
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
    <style jsx>{`
      .typeButtonDiv {
        border: 1.5px solid black;
        border-radius: 7px;
        padding: 8px;
        text-align: center;
        position: sticky;
        position: -webkit-sticky;
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