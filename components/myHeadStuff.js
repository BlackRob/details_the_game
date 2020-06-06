// mostly static stuff


const MyHeadStuff = ({ title }) => {
  return (
    <>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="https://grumbly.games/default.png" />
      <meta property="og:image:secure_url" content="https://grumbly.games/default.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="fb:app_id" content="220488252548780" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://grumbly.games/${title}`} />
      <meta property="og:title" content="click the image to play the game" />
      <meta property="og:description" content="details is a grammar game where you add words to make a sentence longer" />
    </>
  )
}

export default MyHeadStuff