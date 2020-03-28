import Link from 'next/link'


export default function typeButtonDiv() {
  return <div className="typeButtonDiv">
    <h3>Learn more about...</h3>
    <div className="typeButtons">
      <Link href="/adjectives"><button className="adj" >adjective</button></Link>
      <button className="noun">noun</button>
      <button className="adv">adverb</button>
      <button className="verb">verb</button>
      <button className="prep">preposition</button>
      <button className="conj">conjunction</button>
      <button className="pron">pronoun</button>
      <button className="intrj">interjection</button>
      <button className="punc">punctuation</button>
    </div>
    <style jsx>{`
      .typeButtonDiv {
        border: 1px solid var(--mainbg);
        border-radius: 7px;
        padding: 8px;
        text-align: center;
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
        filter: drop-shadow(0 0 0.75rem var(--bodybg));
        color: var(--punc);
      }
    `}</style>
  </div>
}