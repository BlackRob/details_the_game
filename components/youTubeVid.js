// uses props:
// vidID (a valid youtube video id)
// caption, the caption to show under the video


export default function YouTubeVid(props) {
  // default video if I don't include one :(
  let caption = "placeholder caption"
  if (props.caption) {
    caption = props.caption
  }
  return <figure className="videoWrapper">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${props.vidID}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>
    </iframe><figcaption>{caption}</figcaption>
    <style jsx>{`
    .videoWrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
    
      margin: 20px 0px;
      display: flex;
      flex-flow: column;
    }
    .videoWrapper iframe {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    figcaption {
      position: absolute;
      width: 100%;
      bottom: -27px;
      font-size: 90%;
      style: italics;
      text-align: center;
    }
    `}</style>
  </figure>


}