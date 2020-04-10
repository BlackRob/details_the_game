// mostly static stuff


const MyHeadStuff = ({ title }) => {
  return (
    <>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="/default_thumbnail.png" />
      <meta property="fb:app_id" content="220488252548780" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://grumbly.games" />
      <meta property="og:title" content="click the image to play the game" />
      <meta property="og:description" content="details is a grammar game where you add words to make a sentence longer" />
    </>
  )
}

export default MyHeadStuff