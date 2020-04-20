// mostly static stuff


const MyBlogHeadStuff = ({ thumbnail, slug }) => {
  return (
    <>
      <title>Grumbly Games Blog</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content={`https://grumbly.games/assets/${thumbnail}`} />
      <meta property="fb:app_id" content="220488252548780" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://grumbly.games/${slug}`} />
      <meta property="og:title" content="Grumbly Games Blog" />
      <meta property="og:description" content="an English grammar blog" />
    </>
  )
}

export default MyBlogHeadStuff