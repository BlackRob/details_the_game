import React from 'react';
import {
  EmailShareButton, EmailIcon,
  FacebookShareButton, FacebookIcon,
  TelegramShareButton, TelegramIcon,
  RedditShareButton, RedditIcon,
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
  const canvasDataURL = drawCanvas({ sentence, cards, workingCards })
  const canvasURLstring = gameStateToStr({ sentence, cards })
  //console.log(cards)
  //console.log(canvasURLstring)
  const gameFromString = strToGameState({ canvasURLstring })
  // console.log(gameFromString)
  return <div className="z2">
    <div className="sharing_popup">
      <div className="z2_title">
        Share your sentence!
      <span className="z2_hide" onClick={() => { setShowSharing(false) }}>x</span>
      </div>
      <img src={canvasDataURL} />

      <label htmlFor="my_comment">Enter your comment</label><br />
      <textarea id="my_comment"
        defaultValue="I'm playing details (the game)!"
        name="my_comment" rows="4" />
      <div className="sharing_button_row">
        <EmailShareButton children={<EmailIcon size={32} round={true} />} url={canvasDataURL} />
        <FacebookShareButton children={<FacebookIcon size={32} round={true} />} url={canvasDataURL} />
        <TelegramShareButton children={<TelegramIcon size={32} round={true} />} url={canvasDataURL} />
        <RedditShareButton children={<RedditIcon size={32} round={true} />} url={canvasDataURL} />
        <TwitterShareButton children={<TwitterIcon size={32} round={true} />} url={canvasDataURL} />
        <WhatsappShareButton children={<WhatsappIcon size={32} round={true} />} url={canvasDataURL} />
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

        .sharing_popup textarea {
          box-sizing: border-box;
          font: inherit;
          margin: 0.5em 0;
          width: 100%;
        }

        .sharing_button_row {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          height: auto;
        }

        .sharing_button_row button {
          margin: 0px;
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
      `}
    </style>
  </div>
}

export default Sharing;