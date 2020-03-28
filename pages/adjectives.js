import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'

const ThisPage = () => {
  return <div className="container">
    <Head>
      <title>Grumbly Games</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SiteHeader />
    <h1> Adjectives!</h1>
    <p>Adjectives modify nouns and pronouns.</p>
    <SiteFooter />

    <style jsx>{`

    `}</style>

  </div >
}

export default ThisPage