// uses props
// vidID (a valid youtube video id)


export default function YouTubeVid(props) {
  return <div className="videoWrapper">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${props.vidID}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>
    </iframe>
    <style jsx>{`
    .videoWrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;
      margin: 20px 0px;
    }
    .videoWrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    `}</style>
  </div>


}