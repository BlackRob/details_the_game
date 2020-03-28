// uses props
// vidID (a valid youtube video id)
// width

export default function YouTubeVid(props) {
  return <div className="videoWrapper">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${props.vidID}`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <style jsx>{`
    .videoWrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;
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