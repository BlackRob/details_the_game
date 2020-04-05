import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'

const ThisPage = () => (
  <div className="container">
    <Head>
      <title>Adjectives</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Adjectives
        </h2>
        <p className="description">
          Adjectives are used before nouns or pronouns.
          We say adjectives "modify" nouns, but that just means they give
          extra information about the noun they're attached to.
        </p>
      </div>
      <div className="content">
        <section>
          <h3>How to use adjectives in details</h3>
          <p>Consider the sentence, "I'm scared of bears".
          You can change that sentence by adding an adjective to bears.
          Any adjective would work --red, angry, Italian, crazy.
          My choice:
          </p>
          <code>I'm scared of mechanical bears.</code>
          <YouTubeVid vidID="V1d4r9awjKE" />
        </section>
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