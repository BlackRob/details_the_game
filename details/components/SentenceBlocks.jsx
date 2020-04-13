import React from 'react';


const Block = (x, index, placing, insert) => {
  let activeClass = "placing_button hidden";
  let block_border = "";
  if (placing) {
    activeClass = "placing_button";
    block_border = "block block_border";
  }
  return <div key={x.id} className={block_border}>
    <div className={x.type}>{x.word}</div>
    <button className={activeClass} onClick={(e) => {
      e.preventDefault();
      insert(index);
    }}>{index}
    </button>
    <style jsx>
      {`
        .block {
          width: auto;
          margin-bottom: 0.4em;
          border-right: 1px solid #282c34;
          display: grid;
          grid-template-columns: minmax(0.8em, max-content);
          grid-template-rows: 0.8em 1.3em;
          grid-template-areas: 'up' 'down';
        }
        .block_border {
          margin-right: 0px;
          border-right: solid 1px red;
        }
        .placing_button { 
          border-radius: 0px;
          width: 0.4em;
          height: auto;
          font-size: 45%;
          grid-area: up;
          align-self: start;
          justify-self: right;
          margin: 0 0 0 auto;
          padding: 0.2em;
          background-color: inherit;
          border: 1px solid red;
          border-right: none;
          transition: all 0s;
        }
        .block button {
          color: var(--active_outline);
        }
        .block button:hover {
          background-color: white;
          color: black;
        }
        .hidden {
          display: none;
        }
      `}
    </style>
  </div>
}

export default ({ sentence, placing, insert }) => (
  <div className="active_sentence_slot">
    <div className="active_sentence_top_effect"></div>
    <div className="active_sentence_content">
      <div className="active_sentence">
        {sentence.map((element, index) => {
          return Block(element, index, placing, insert);
        })}
      </div>
    </div>
    <div className="active_sentence_bottom_effect"></div>
    <style jsx>
      {`
        .active_sentence_slot {
          grid-area: mid;
          position: relative;
          box-sizing: border-box;
          display: flex;
          width: 100%;
          height: 100%;
          overflow: hidden;
          align-items: center;
          justify-content: center;
        }
        .active_sentence_top_effect {
          position: absolute; /* Stay in place */
          top: 0px;
          width: 100%;
          height: 15px;
          background: linear-gradient(to bottom, rgba(40,44,52,1.0), rgba(40,44,52,0.0));
          z-index: 1; /* Sit on top */
          pointer-events: none;
        }
        .active_sentence_bottom_effect {
          position: absolute; /* Stay in place */
          bottom: 0px;
          width: 100%;
          height: 15px;
          background: linear-gradient(to top, rgba(40,44,52,1.0), rgba(40,44,52,0.0));
          z-index: 1; /* Sit on top */
          pointer-events: none;
        }
        .active_sentence_content {
          min-height: 0;
          height: 100%;
          width: auto;
          margin: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          align-content: flex-start;
          overflow-y: scroll;
          scrollbar-width: none;
        }
        .active_sentence_content::-webkit-scrollbar {
          display: none;
        }

        .active_sentence {
          min-height: 0;
          height: auto;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: center;
          align-content: flex-start;
          font-size: 1.3em;
          padding: 10px;
          padding-top: 2.1em;
          padding-bottom: 3.1em;
          line-height: 1.3em;
        }

        .head, .p_exc, .p_com, .p_cln, .p_semi, .p_prd, .p_parL, .p_parR, .p_qm, .p_dbldashL, .p_dbldashR  {
          color: var(--punc);
          width: auto;
          margin-right: auto;
          height: 1.3em;
          align-self: flex-end;
          grid-area: down;
          text-align: left;
        }

        .p_parL, .p_dbldashL {
          padding-right: 0.1em;
          text-align: right;
        }

        .active_sentence :global(.conj),
        .active_sentence :global(.adj),
        .active_sentence :global(.adv),
        .active_sentence :global(.noun),
        .active_sentence :global(.verb),
        .active_sentence :global(.prep),
        .active_sentence :global(.pron),
        .active_sentence :global(.intrj) {
          height: 1.3em;
          grid-area: down;
          background-color: inherit;
          padding-left: 0.2em;
          padding-right: 0.2em;
        }

        .active_sentence :global(.conj) {
          color: var(--conj); 
        }

        .active_sentence :global(.adj) {
          color: var(--adj);
        }

        .active_sentence :global(.noun) {
          color: var(--noun);
        }

        .active_sentence :global(.adv) {
          color:  var(--adv);
        }

        .active_sentence :global(.verb) {
          color: var(--verb);
        }

        .active_sentence :global(.intrj) {
          color: var(--intrj);
        }

        .active_sentence :global(.prep) {
          color: var(--prep);
        }

        .active_sentence :global(.pron) {
          color: var(--pron);
        }
      `}
    </style>
  </div>
);
