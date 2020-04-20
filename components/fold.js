import { useState } from 'react';


const Fold = ({ title, content }) => {
  let fTitle = <h3>Oops! Forgot to write a title!</h3>

  if (title) {
    fTitle = title
  }

  let fContent = <p>Oops! Forgot to write content!</p>
  if (content) {
    fContent = content
  }

  const [folded, changeFolded] = useState(true);

  const toggleFolded = () => changeFolded(!folded);

  let foldStatus = (folded ? "isFolded" : "unFolded")
  let foldTitle = (folded ? "arrowRight" : "arrowDown")

  return (
    <>
      <div className={foldTitle} onClick={toggleFolded}>{fTitle}</div>
      <div className={foldStatus}>{fContent}</div>
      <style jsx global>
        {`
          .arrowRight, .arrowDown {
            display: block;
          }
          .arrowRight h3, .arrowDown h3 {
            display: inline;
            padding: 0.6rem 0px 0.6rem 0px;
          }
          .arrowRight h4, .arrowDown h4 {
            display: inline;
            padding: 0.6rem 0px 0.6rem 0.6rem;
          }
          .arrowRight {
            margin-bottom: 20px;
          }
          .arrowRight h3:hover, .arrowRight h4:hover,
          .arrowDown h3:hover, .arrowDown h4:hover {
            color: var(--logo_hover);
            transition: all 0.3s;
          }
          .arrowRight h3::before, .arrowRight h4::before {
            content: "⇒ ";
          }
          .arrowDown h3::before, .arrowDown h4::before {
            content: "⇓ ";
          }
          .isFolded {
            display: none;
            margin-bottom: 20px;
          }
          .unFolded {
            display: block;
            margin-bottom: 20px;
          }
          .unFolded p {
            padding: 0.3rem 0px 0.3rem 1.2rem;
          }
        `}
      </style>
    </>
  )
}

export default Fold