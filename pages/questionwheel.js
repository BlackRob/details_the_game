import Head from 'next/head'
import React, { useRef, useState } from 'react'
import MyHeadStuff from '../components/myHeadStuff'


const QuestionWheel = () => {
  const lRingRef1 = useRef(null)
  const mRingRef1 = useRef(null)
  const sRingRef1 = useRef(null)
  const lRingRef2 = useRef(null)
  const mRingRef2 = useRef(null)
  const sRingRef2 = useRef(null)

  // a state variable to show or hide the help screen
  const [showHelp, setShowHelp] = useState(false);


  return <div className="container">
    <Head>
      <title>Question Wheel</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="https://grumbly.games/questionwheel.png" />
      <meta property="og:image:secure_url" content="https://grumbly.games/questionwheel.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="fb:app_id" content="220488252548780" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://grumbly.games/questionwheel" />
      <meta property="og:title" content="Spin the wheel!" />
      <meta property="og:description" content="a toy to help remember how to form questions in English" />
      <link href="https://fonts.googleapis.com/css2?family=Cabin+Condensed&display=swap" rel="stylesheet" />
    </Head>
    <div className="title">
      The Wheel of Questions!
    </div>
    <div className="grammarwheel">
      <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg" >
        <circle id="lCircle" cx="500" cy="400" r="399" />
        <path strokeWidth="2" stroke="lightgray" fill="white"
          d={`M${390 * Math.cos(172 * Math.PI / 180) + 500} ${390 * Math.sin(172 * Math.PI / 180) + 400} 
            A390 390 0 0 1 ${390 * Math.cos(188 * Math.PI / 180) + 500} ${390 * Math.sin(188 * Math.PI / 180) + 400} 
            L${56 * Math.cos(210 * Math.PI / 180) + 500} ${56 * Math.sin(210 * Math.PI / 180) + 400} 
            A56 56 0 1 1 ${56 * Math.cos(150 * Math.PI / 180) + 500} ${56 * Math.sin(150 * Math.PI / 180) + 400}
            z
          `}
        />
        <text x="500" y="400" >{`____?`}</text>
        <g id="lRing1" ref={lRingRef1} className="animatedF">
          <g id="lRing2" ref={lRingRef2} className="animatedR">
            {
              ["Who", "What", "When", "Where", "Why", "How", "How many", "How much", "Which", "Whose"].map((werd, index) => {
                return <text key={`qWerd${index}`} x={`${320 * Math.cos(36 * index * Math.PI / 180) + 500}`} y={`${320 * Math.sin(36 * index * Math.PI / 180) + 400}`}
                  transform={`rotate(${36 * index + 180} 
                ${320 * Math.cos(36 * index * Math.PI / 180) + 500}, 
                ${320 * Math.sin(36 * index * Math.PI / 180) + 400})`}>
                  {werd}</text>
              })
            }
          </g>
        </g>
        <g id="mRing1" ref={mRingRef1} className="animatedF">
          <g id="mRing2" ref={mRingRef2} className="animatedR">
            {
              ["did", "does", "do", "were", "are", "am", "is", "was", "has", "have", "had", "will"].map((werd, index) => {
                return <text key={`auxVerb${index}`} x={`${200 * Math.cos(30 * index * Math.PI / 180) + 500}`} y={`${200 * Math.sin(30 * index * Math.PI / 180) + 400}`}
                  transform={`rotate(${30 * index + 180} 
                ${200 * Math.cos(30 * index * Math.PI / 180) + 500}, 
                ${200 * Math.sin(30 * index * Math.PI / 180) + 400})`}>
                  {werd}</text>
              })
            }
            <BlueGroup start="16" r1="151" r2="243" end="44" offset="0.5" />
            <GreenGroup start="46" r1="151" r2="243" end="134" offset="0.5" />
            <RedGroup start="48" r1="158" r2="236" end="72" offset="1.2" />
            <RedGroup start="136" r1="151" r2="243" end="164" offset="0.5" />
            <BlueGroup start="166" r1="151" r2="243" end="254" offset="0.5" />
            <RedGroup start="198" r1="158" r2="236" end="222" offset="1.2" />
            <GreenGroup start="256" r1="151" r2="243" end="284" offset="0.5" />
            <RedGroup start="258" r1="158" r2="236" end="282" offset="1.2" />
            <path strokeWidth="2" stroke="lightslategray" fill="none"
              d={`M${244 * Math.cos(286 * Math.PI / 180) + 500} 
              ${244 * Math.sin(286 * Math.PI / 180) + 400} A244 244 0 0 1 
              ${244 * Math.cos(14 * Math.PI / 180) + 500} 
              ${244 * Math.sin(14 * Math.PI / 180) + 400}`}
            />
          </g>
        </g>
        <g id="sRing1" ref={sRingRef1} className="animatedF">
          <g id="sRing2" ref={sRingRef2} className="animatedR" >{
            ["he", "she", "it", "one", "I", "we", "you", "they"].map((werd, index) => {
              return <text key={`pron${index}`} x={`${97 * Math.cos(45 * index * Math.PI / 180) + 500}`} y={`${97 * Math.sin(45 * index * Math.PI / 180) + 400}`}
                transform={`rotate(${45 * index + 180} 
                ${97 * Math.cos(45 * index * Math.PI / 180) + 500}, 
                ${97 * Math.sin(45 * index * Math.PI / 180) + 400})`}>
                {werd}</text>
            })
          }
            <BlueGroup start="339.5" r1="56" r2="143" end="155.5" offset="1.7" />
            <RedGroup start="159.5" r1="56" r2="143" end="200.5" offset="1.7" />
            <GreenGroup start="204.5" r1="56" r2="143" end="335.5" offset="1.7" />
          </g>
        </g>
        <a id="sCW_butt" onTouchStart={() => startRotateS({ aRef: sRingRef1 })}
          onTouchEnd={() => pauseRotateS({ aRef: sRingRef1 })}
          onMouseDown={() => startRotateRevS({ aRef: sRingRef1 })}
          onMouseUp={() => pauseRotateRevS({ aRef: sRingRef1 })}
          onMouseLeave={() => pauseRotateS({ aRef: sRingRef1 })}>
          <ClockwiseButton id="sCW" start="24" r1="412" r2="478" end="39" point="42" /></a>
        <a id="sCCW_butt" onTouchStart={() => startRotateRevS({ aRef: sRingRef2 })}
          onTouchEnd={() => pauseRotateRevS({ aRef: sRingRef2 })}
          onMouseDown={() => startRotateRevS({ aRef: sRingRef2 })}
          onMouseUp={() => pauseRotateRevS({ aRef: sRingRef2 })}
          onMouseLeave={() => pauseRotateRevS({ aRef: sRingRef2 })}>
          <CounterClockwiseButton id="sCCW" start="22" r1="412" r2="478" end="7" point="4" /></a>
        <text className="buttonText" x="950" y="700">pronouns</text>

        <a id="mCW_butt" onTouchStart={() => startRotateS({ aRef: mRingRef1 })}
          onTouchEnd={() => pauseRotateS({ aRef: mRingRef1 })}
          onMouseDown={() => startRotateRevS({ aRef: mRingRef1 })}
          onMouseUp={() => pauseRotateRevS({ aRef: mRingRef1 })}
          onMouseLeave={() => pauseRotateS({ aRef: mRingRef1 })}>
          <ClockwiseButton id="mCW" start="158" r1="412" r2="478" end="173" point="176" /></a>
        <a id="mCCW_butt" onTouchStart={() => startRotateRevS({ aRef: mRingRef2 })}
          onTouchEnd={() => pauseRotateRevS({ aRef: mRingRef2 })}
          onMouseDown={() => startRotateRevS({ aRef: mRingRef2 })}
          onMouseUp={() => pauseRotateRevS({ aRef: mRingRef2 })}
          onMouseLeave={() => pauseRotateRevS({ aRef: mRingRef2 })}>
          <CounterClockwiseButton id="mCCW" start="156" r1="412" r2="478" end="141" point="138" /></a>

        <a id="lCW_butt" onTouchStart={() => startRotateS({ aRef: lRingRef1 })}
          onTouchEnd={() => pauseRotateS({ aRef: lRingRef1 })}
          onMouseDown={() => startRotateRevS({ aRef: lRingRef1 })}
          onMouseUp={() => pauseRotateRevS({ aRef: lRingRef1 })}
          onMouseLeave={() => pauseRotateS({ aRef: lRingRef1 })}>
          <text className="buttonText" x="50" y="700">verbs</text>
          <ClockwiseButton id="lCW" start="204" r1="412" r2="478" end="219" point="222" /></a>
        <a id="lCCW_butt" onTouchStart={() => startRotateRevS({ aRef: lRingRef2 })}
          onTouchEnd={() => pauseRotateRevS({ aRef: lRingRef2 })}
          onMouseDown={() => startRotateRevS({ aRef: lRingRef2 })}
          onMouseUp={() => pauseRotateRevS({ aRef: lRingRef2 })}
          onMouseLeave={() => pauseRotateRevS({ aRef: lRingRef2 })}>
          <CounterClockwiseButton id="lCCW" start="202" r1="412" r2="478" end="187" point="184" /></a>
        <text className="buttonText" x="50" y="80">question</text>
        <text className="buttonText" x="50" y="118">words</text>

        <a id="help_butt" onClick={() => { setShowHelp(true) }}><text className="help" x="950" y="123">?</text></a>
      </svg>
      <Help showVal={showHelp} setShow={() => { setShowHelp(false) }} />
    </div>
    <div className="promo">
    </div>

    <style jsx>{`
      body, html {
        height: 100%;
        margin: 0;
        padding: 0;
        -ms-overflow-style: none;
      }
      .container {
        height: 100vh;
        max-height: 100%;
        width: 100%;
        max-width: 100%;
        background-color: var(--main-bg-color);
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 2fr auto 1fr;
        grid-template-areas: "title" "spinner" "promo";
        align-items: center;
        justify-content: center;
        --main-bg-color: #282c34;
        --large-circle-color: #f1f1f1;
        --button-fill: gray;
        --button-highlight: #f26419;
        --red-group-stroke: #d7083d;
        --blue-group-stroke: #083dd7;
        --green-group-stroke: #3dd708;
        overflow-y: scroll;
        scrollbar-width: none;
      }
      .container::-webkit-scrollbar {
        display: none;
      }
      .title {
        margin: 0;
        padding: 0;
        grid-area: title;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: lightgray;
        font-size: min(1.5em,36px);
      }
      .promo {
        margin: 0;
        padding: 0;
        grid-area: promo;
        height: 100%;
        min-height:
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .grammarwheel {
        height: auto;
        margin: auto;
        grid-area: spinner;
        width: 96vmin;
      }
      #lCircle {
        stroke: black;
        fill: #f1f1f1;
        stroke-width: 2;
      }
      a, a:visited {
        cursor: pointer;
        color: var(--button-fill);
      }
      a:hover {
        color: var(--button-highlight);
      }
      a:focus {
        color: var(--button-fill);
      }
      a:active {
        color: var(--button-highlight);
      }
      text {
        text-anchor: middle;
        dominant-baseline: middle;
        font-family: 'Cabin Condensed', sans-serif;
        font-size: 30px;
        fill: black;
      }
      .buttonText {
        font-size: 24px;
        fill: lightgray;
      }
      text.help {
        fill: var(--button-fill);
        font-size: 100px;
      }
      text.help:hover, text.help:active {
        fill: var(--button-highlight);
      }
      .animatedF {
        animation: Spin infinite 10s linear;
        transform-origin: center center;
        animation-play-state: paused;
        animation-direction: forward;
      }
      .animatedR {
        animation: Spin infinite 10s linear;
        transform-origin: center center;
        animation-play-state: paused;
        animation-direction: reverse;
      }
      @keyframes Spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    `}</style>
  </div>
}

const Help = ({ showVal, setShow }) => {
  let showHide = "hidden";
  if (showVal) {
    showHide = "z2";
  }

  return <div className={showHide}>
    <div className="z2_body">
      <div className="z2_title">
        How to use the question wheel:
      <span className="z2_hide" onClick={setShow}>x</span>
      </div>
      <p>The wheel has three rings: the outer ring is filled with
      question words, the middle one has helping verbs, the
      inner has subject pronouns. Some helping verbs
      can only be used with specific pronouns; there are colored
        outlines to show which verbs and pronouns go together.</p>
      <p>Press the curved arrows to spin each ring until the words
      line up to start a question. To finish the question,
        you have to think of a main verb and use the correct form.</p>
      <p><b>Example:</b> Spin the rings until the words
      "Why" and "are" line up: "are" has a green outline
      so it should be used with green pronouns. Spin the
      inner ring until "you" is selected. To finish the question,
      lets use the verb "laughing."</p>
      <p className="centered"><b>"Why are you laughing?"</b></p>
      <p>For more information, read <a href="/posts/200606_question_wheel" rel="noopener noreferrer" target="_blank">this</a></p>
      <p className="centered highlighted">If you like this, try "details"! It's a grammar game!<br />
        <a href="https://details.grumbly.games" rel="noopener noreferrer" target="_blank">https://details.grumbly.games</a>
      </p>
    </div>
    <style jsx>{`
      .hidden {
        display: none;
      }
      .z2 {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        min-height: 100vh;
        width: 100%;
        margin: 0;
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        padding: 20px 0px;
        background: rgba(0, 0, 0, 0.5);
        font-size: 1rem;
      }
      .z2_body {
        width: min(800px, 90vh);
        height: auto;
        text-align: left;
        background: white;
        border: 1px solid black;
        color: black;
        padding: 30px;
      }
      .z2_title {
        font-size: 1.5rem;
        color: #444;
        width: 100%;
        line-height: 1.8rem;
      }
      .z2_hide {
        float: right;
        font-size: 1.5rem;
        font-weight: 600;
        margin-top: -0.5rem;
      }
      .z2_hide:hover {
        cursor: pointer;
      }
      .centered {
        text-align: center;
      }
      .highlighted {
        border: 2px solid var(--red-group-stroke);
        border-radius: 3px;
        padding: 5px;
      }
    `}</style>
  </div>
}

const RedGroup = ({ start, r1, r2, end, offset }) => {
  const x1 = r2 * Math.cos(start * Math.PI / 180) + 500
  const y1 = r2 * Math.sin(start * Math.PI / 180) + 400
  const x2 = r2 * Math.cos(end * Math.PI / 180) + 500
  const y2 = r2 * Math.sin(end * Math.PI / 180) + 400
  const theta = offset * Math.PI / 180
  const x3 = r1 * Math.cos(end * Math.PI / 180 - theta) + 500
  const y3 = r1 * Math.sin(end * Math.PI / 180 - theta) + 400
  const x4 = r1 * Math.cos(start * Math.PI / 180 + theta) + 500
  const y4 = r1 * Math.sin(start * Math.PI / 180 + theta) + 400

  return <><path
    d={` M${x1} ${y1} A${r2} ${r2} 0 0 1 ${x2} ${y2} L${x3} ${y3} A${r1} ${r1} 0 0 0 ${x4} ${y4} z `} />
    <style jsx>
      {`
        path {
          stroke-width: 5;
          fill: none;
          stroke: var(--red-group-stroke);
        }
      `}
    </style>
  </>
}

const GreenGroup = ({ start, r1, r2, end, offset }) => {
  const x1 = r2 * Math.cos(start * Math.PI / 180) + 500
  const y1 = r2 * Math.sin(start * Math.PI / 180) + 400
  const x2 = r2 * Math.cos(end * Math.PI / 180) + 500
  const y2 = r2 * Math.sin(end * Math.PI / 180) + 400
  const theta = offset * Math.PI / 180
  const x3 = r1 * Math.cos(end * Math.PI / 180 - theta) + 500
  const y3 = r1 * Math.sin(end * Math.PI / 180 - theta) + 400
  const x4 = r1 * Math.cos(start * Math.PI / 180 + theta) + 500
  const y4 = r1 * Math.sin(start * Math.PI / 180 + theta) + 400

  return <><path
    d={` M${x1} ${y1} A${r2} ${r2} 0 0 1 ${x2} ${y2} L${x3} ${y3} A${r1} ${r1} 0 0 0 ${x4} ${y4} z `} />
    <style jsx>
      {`
        path {
          stroke-width: 5;
          fill: none;
          stroke: var(--green-group-stroke);
        }
      `}
    </style>
  </>
}

const BlueGroup = ({ start, r1, r2, end, offset }) => {
  const x1 = r2 * Math.cos(start * Math.PI / 180) + 500
  const y1 = r2 * Math.sin(start * Math.PI / 180) + 400
  const x2 = r2 * Math.cos(end * Math.PI / 180) + 500
  const y2 = r2 * Math.sin(end * Math.PI / 180) + 400
  const theta = offset * Math.PI / 180
  const x3 = r1 * Math.cos(end * Math.PI / 180 - theta) + 500
  const y3 = r1 * Math.sin(end * Math.PI / 180 - theta) + 400
  const x4 = r1 * Math.cos(start * Math.PI / 180 + theta) + 500
  const y4 = r1 * Math.sin(start * Math.PI / 180 + theta) + 400

  return <><path
    d={` M${x1} ${y1} A${r2} ${r2} 0 0 1 ${x2} ${y2} L${x3} ${y3} A${r1} ${r1} 0 0 0 ${x4} ${y4} z `} />
    <style jsx>
      {`
        path {
          stroke-width: 5;
          fill: none;
          stroke: var(--blue-group-stroke);
        }
      `}
    </style>
  </>
}

const ClockwiseButton = ({ id, start, r1, r2, end }) => {
  const x1 = r1 * Math.cos(start * Math.PI / 180) + 500
  const y1 = r1 * Math.sin(start * Math.PI / 180) + 400
  const x2 = r1 * Math.cos(end * Math.PI / 180) + 500
  const y2 = r1 * Math.sin(end * Math.PI / 180) + 400
  const x3 = r2 * Math.cos(end * Math.PI / 180) + 500
  const y3 = r2 * Math.sin(end * Math.PI / 180) + 400
  const x4 = r2 * Math.cos(start * Math.PI / 180) + 500
  const y4 = r2 * Math.sin(start * Math.PI / 180) + 400

  const pointRadius = (parseInt(r1) + parseInt(r2)) / 2
  const x2p5 = pointRadius * Math.cos((parseInt(end) + 3) * Math.PI / 180) + 500
  const y2p5 = pointRadius * Math.sin((parseInt(end) + 3) * Math.PI / 180) + 400
  const x4p5 = pointRadius * Math.cos((parseInt(start) + 3) * Math.PI / 180) + 500
  const y4p5 = pointRadius * Math.sin((parseInt(start) + 3) * Math.PI / 180) + 400

  return <><path strokeWidth="2" stroke="black" id={id}
    d={` M${x1} ${y1} A${r1} ${r1} 0 0 1 ${x2} ${y2} 
    L${x2p5} ${y2p5} L${x3} ${y3} 
    A${r2} ${r2} 0 0 0 ${x4} ${y4} 
    L${x4p5} ${y4p5} z `} />
    <style jsx>
      {`
        path {
          fill: var(--button-fill);
        }
        path:hover {
          fill: var(--button-highlight);
        }
      `}
    </style>
  </>
}

const CounterClockwiseButton = ({ id, start, r1, r2, end }) => {
  const x1 = r1 * Math.cos(start * Math.PI / 180) + 500
  const y1 = r1 * Math.sin(start * Math.PI / 180) + 400
  const x2 = r1 * Math.cos(end * Math.PI / 180) + 500
  const y2 = r1 * Math.sin(end * Math.PI / 180) + 400
  const x3 = r2 * Math.cos(end * Math.PI / 180) + 500
  const y3 = r2 * Math.sin(end * Math.PI / 180) + 400
  const x4 = r2 * Math.cos(start * Math.PI / 180) + 500
  const y4 = r2 * Math.sin(start * Math.PI / 180) + 400
  const pointRadius = (parseInt(r1) + parseInt(r2)) / 2
  const x2p5 = pointRadius * Math.cos((parseInt(end) - 3) * Math.PI / 180) + 500
  const y2p5 = pointRadius * Math.sin((parseInt(end) - 3) * Math.PI / 180) + 400
  const x4p5 = pointRadius * Math.cos((parseInt(start) - 3) * Math.PI / 180) + 500
  const y4p5 = pointRadius * Math.sin((parseInt(start) - 3) * Math.PI / 180) + 400

  return <><path strokeWidth="2" stroke="black" id={id}
    d={` M${x1} ${y1} A${r1} ${r1} 0 0 0 ${x2} ${y2} 
    L${x2p5} ${y2p5}  L${x3} ${y3} 
    A${r2} ${r2} 0 0 1 ${x4} ${y4} 
    L${x4p5} ${y4p5} z `} />
    <style jsx>
      {`
        path {
          fill: var(--button-fill);
        }
        path:hover {
          fill: var(--button-highlight);
        }
      `}
    </style>
  </>
}


const startRotateS = ({ aRef }) => {
  aRef.current.style.animationPlayState = "running"
  aRef.current.style.webkitAnimationPlayState = "running"
}
const pauseRotateS = ({ aRef }) => {
  aRef.current.style.animationPlayState = "paused"
  aRef.current.style.webkitAnimationPlayState = "paused"
}
const startRotateRevS = ({ aRef }) => {
  aRef.current.style.animationPlayState = "running"
  aRef.current.style.webkitAnimationPlayState = "running"
}
const pauseRotateRevS = ({ aRef }) => {
  aRef.current.style.animationPlayState = "paused"
  aRef.current.style.webkitAnimationPlayState = "paused"
}

export default QuestionWheel

