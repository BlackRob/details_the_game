import React from 'react';
import Ellipsis from './header_pages/Ellipsis';
import Question from './header_pages/Question';
import Exclamation from './header_pages/Exclamation';

// our header, which has nothing to do with gameplay
export default ({ ...props }) => (
  <header>
    <div className="Header_logo" ><a href="../" alt="logo">details</a></div>
    <Ellipsis />
    <Question />
    <Exclamation />
    <style>{`
      header {
        font-size: 2.6em;
        background-image: linear-gradient(to top, #21242b, #383f4d);
        box-sizing: border-box;
        height: auto;
        padding: 1.5vmin 3vmin;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .Header_logo {
        color: var(--active_outline);
        text-align: left;
        flex: 1;
      }

      .Header_logo a {
        text-decoration: none;
      }

      .Header_logo a:visited {
        color: var(--active_outline);
      }

      .Header_logo a:hover {
        color: var(--logo_hover);
      }

      .Header_logo a:active {
        color: var(--logo_active);
      }

      .header_punctuation {
        color: var(--active_outline);
        padding-left: 5vmin;
        width: auto;
      }

      .header_punctuation button {
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

      .header_punctuation button:visited {
        color: var(--active_outline);
      }

      .header_punctuation button:hover {
        color: lightslategray;
        cursor: pointer;
      }

      .header_punctuation button:active {
        color: darkslategray;
      }

      .hidden {
        display: none;
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
    `}</style>
  </header>
);