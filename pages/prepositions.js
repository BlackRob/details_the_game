import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'

const ThisPage = () => (
  <div className="container">
    <Head>
      <title>Prepositions</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">Prepositions</h2>
        <p className="description">Prepositions are always used with other words to
        form "prepositional phrases". When playing details, however, sometimes
        you can use a preposition on its own to change the meaning of a sentence.
          </p>
        <YouTubeVid vidID="uZt1xKtPbUQ" caption="Basic punctuation use in details" />
      </div>
      <div className="content">
        <h3>How to use prepositions</h3>
        <p>The most common form of prepositional phrase is a prepositiona
        with a noun.
          </p>
      </div>
      <div className="sidebar">
        <TypeButtonDiv />
      </div>
    </main>
    <SiteFooter />
    <style jsx>{`

    `}</style>

  </div >
)

export default ThisPage