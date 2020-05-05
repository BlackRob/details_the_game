import React, { useState, useEffect } from 'react';
import {
  EmailShareButton, EmailIcon,
  FacebookShareButton, FacebookIcon,
  TelegramShareButton, TelegramIcon,
  WeiboShareButton, WeiboIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon,
} from "react-share";
import { drawCanvas } from "./drawCanvas";
import { gameStateToStr, strToGameState } from "./gameStatePack"


// Clicking on the span opens an informative popup
const Sharing = ({ sentence, cards, showSharing, setShowSharing, workingCards }) => {
  if (!showSharing) {
    return <div className="hidden"></div>
  } else {
    return <SharingPopUp sentence={sentence}
      cards={cards}
      setShowSharing={setShowSharing}
      workingCards={workingCards} />
  }
}

const SharingPopUp = ({ sentence, cards, setShowSharing, workingCards }) => {
  // have to run a script to get the skype button
  //const skypeButtonRef = React.createRef()
  //useEffect(() => {
  (function (r, d, s) {
    r.loadSkypeWebSdkAsync = r.loadSkypeWebSdkAsync || function (p) {
      var js, sjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(p.id)) { return; }
      js = d.createElement(s);
      js.id = p.id;
      js.src = p.scriptToLoad;
      js.onload = p.callback
      sjs.parentNode.insertBefore(js, sjs);
    };
    var p = {
      scriptToLoad: 'https://swx.cdn.skype.com/shared/v/latest/skypewebsdk.js',
      id: 'skype_web_sdk'
    };
    r.loadSkypeWebSdkAsync(p);
  })(window, document, 'script')

  const canvasDataURL = drawCanvas({ sentence, cards, workingCards })
  const canvasURLstring = gameStateToStr({ sentence, cards })
  const gameURL = `https://grumbly.games/details/${canvasURLstring}`
  const imageURL = `https://grumbly.games/api/${canvasURLstring}`

  const [comment, changeComment] = useState("I'm playing details!");
  //console.log(cards)
  console.log(canvasURLstring)
  const gameFromString = JSON.parse(strToGameState({ canvasURLstring: canvasURLstring }))
  // console.log(gameFromString)
  return <div className="z2">
    <div className="sharing_popup">
      <div className="z2_title">
        Share your sentence!
      <span className="z2_hide" onClick={() => { setShowSharing(false) }}>x</span>
      </div>
      <img src={canvasDataURL} />

      <div className="sharing_button_row">
        <EmailShareButton children={<EmailIcon size={32} round={true} />} url={gameURL} subject="I'm playing details" body={comment} />
        <FacebookShareButton children={<FacebookIcon size={32} round={true} />} url={gameURL} quote={comment} hashtag="ClickToPlay" />
        <TelegramShareButton children={<TelegramIcon size={32} round={true} />} url={gameURL} title="grumbly.games" />
        <WeiboShareButton children={<WeiboIcon size={32} round={true} />} url={gameURL} title="grumbly.games" image={imageURL} />
        <TwitterShareButton children={<TwitterIcon size={32} round={true} />} url={gameURL} hashtags={["ClickToPlay"]} />
        <WhatsappShareButton children={<WhatsappIcon size={32} round={true} />} url={gameURL} title="grumbly.games" />
        <div className='skype-share' data-href={gameURL} data-lang='en-US' data-text='' data-style='' >
          <img className="skypeShareLogo" src='/s_logo.svg' width="18px" height="18px" />
        </div>
        <ClipboardButton toCopy={gameURL} />
      </div>
    </div>
    <style jsx>
      {`
        .sharing_popup {
          position: relative;
          box-sizing: border-box;
          width: 90%;
          max-width: 960px;
          text-align: left;
          background: gainsboro;
          border: 1px solid black;
          color: black;
          padding: 30px;
          margin-left: auto;
          margin-right: auto;
        }

        .sharing_popup button {
          display: inline-block;
          text-decoration: none;
          border: none;
          box-sizing: border-box;
          background-color: inherit;
          padding: none;
          font-weight: 300;
          font-size: 1em;
          color: var(--active_outline);
          transition: all 0.2s;
          width: auto;
        }

        .sharing_popup button:visited {
          color: var(--active_outline);
        }

        .sharing_popup button:hover {
          color: lightslategray;
          cursor: pointer;
        }

        .sharing_popup button:active {
          color: darkslategray;
        }

        .sharing_popup label {
          font-size: 0.8em;
        }

        .sharing_popup img {
          width: 100%; 
          min-height: 100%;
          margin: 0.8em 0;
          box-shadow: 2px 2px 5px slategray;
        }


        .sharing_button_row {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          height: auto;
        }
        
        .z2 {
          display: block;
          box-sizing: border-box;
          min-height: 100vh;
          width: 100%;
          margin: 0;
          position: absolute; /* Stay in place */
          z-index: 2; /* Sit on top */
          left: 0;
          top: 0;
          padding: 20px 0px;
          background: rgba(0, 0, 0, 0.5);
          font-size: 1rem;
          overflow-y: scroll;
          scrollbar-width: none;
        }
        .z2::-webkit-scrollbar {
          display: none;
        }

        .z2_body {
          position: relative;
          box-sizing: border-box;
          width: 90%;
          max-width: 960px;
          text-align: left;
          background: white;
          border: 1px solid black;
          color: black;
          padding: 30px;
          margin-left: auto;
          margin-right: auto;
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
        .skype-share {
          margin: 0px;
          width: 32px;
          height: 32px;
          padding: 0px;
          border-radius: 50%;
          background-color: #00AFF0;
          color: white;
        }
        .skype-share img {
          width: 18px;
          height: 18px;
          min-height: 18px;
          margin: 7px;
          box-shadow: none;
        }
        .skype-share:hover, .skype-share:focus {
          outline: 0;
          box-shadow: 0 0 3px 3px rgba(0, 0, 0, .5);
          transition: all 0.2s;
        }
      `}
    </style>
    <style jsx global>
      {`
        button[class="react-share__ShareButton"] {
          margin: 0px;
          width: 32px;
          height: 32px;
          padding: 0px;
          border-radius: 50%;
        }
        button[class="react-share__ShareButton"]:hover, button[class="react-share__ShareButton"]:focus {
          outline: 0;
          box-shadow: 0 0 3px 3px rgba(0, 0, 0, .5);
        }
      `}
    </style>
  </div>
}

const ClipboardButton = ({ toCopy }) => {
  const [copied, setCopied] = useState(false);
  let imgSrc = "/clipboard_unchecked.svg"
  let altText = "empty clipboard icon by Zach Bogart from the Noun Project"
  if (copied) {
    imgSrc = "/clipboard_checked.svg"
    altText = "checked clipboard icon by Zach Bogart from the Noun Project"
  }

  return <button
    className="react-share__ShareButton"
    onClick={(e) => {
      e.preventDefault();
      updateClipboard({ newClip: toCopy, result: setCopied })
    }}><img src={imgSrc} width="32" height="32" alt={altText} />
    <style jsx>
      {`
        button {
          border: none;
          margin: 0px;
          width: 32px;
          height: 32px;
          padding: 0px;
        }
      `}
    </style>
  </button >;
}

const updateClipboard = ({ newClip, result }) => {
  navigator.clipboard.writeText(newClip).then(function () {
    result(true)
  }, function () {
    /* clipboard write failed */
    result(false)
    console.log("copy to clipboard failed!")
  });
}


export default Sharing;

{/*

      <label htmlFor="my_comment">Enter your comment</label><br />
      <textarea id="my_comment"
        value={comment} onChange={() => changeComment(comment)}
        name="my_comment" rows="4" />

        .sharing_popup textarea {
          box-sizing: border-box;
          font: inherit;
          margin: 0.5em 0;
          width: 100%;
        }


*/}