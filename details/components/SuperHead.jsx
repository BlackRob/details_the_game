import Head from 'next/head'


const SuperHead = ({ gameState }) => {
  return (
    <Head>
      <title>"details"</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content={`https://grumbly.games/api/${gameState}`} />
      <meta property="og:image:secure_url" content={`https://grumbly.games/api/${gameState}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image" content={`https://grumbly.games/api/square/${gameState}.png`} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="600" />
      <meta property="fb:app_id" content="220488252548780" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://grumbly.games/details/${gameState}`} />
      <meta property="og:title" content="click the image to play the game" />
      <meta property="og:description" content="details is a grammar game where you add words to make a sentence longer" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="click to play details" />
      <meta name="twitter:description" content="it's a game where you make sentences longer" />
      <meta name="twitter:creator" content="@GrumblyGames" />
      <meta name="twitter:image" content={`https://grumbly.games/api/${gameState}`} />
      <meta name="twitter:domain" content={`https://grumbly.games/details/${gameState}`} />
    </Head>
  )
}

export default SuperHead