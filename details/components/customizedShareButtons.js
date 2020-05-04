import React, { useEffect } from 'react';

// share to skype
export const SkypeButton = ({ codedSentence }) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://swx.cdn.skype.com/shared/v/latest/skypewebsdk.js";
    script.async = true;

    document.body.appendChild(script);
  });

  return <div className='skype-share' data-href='https://grumbly.games' data-lang='' data-text='' data-style='circle' ></div>
}
