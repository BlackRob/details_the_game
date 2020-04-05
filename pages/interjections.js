import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'

const ThisPage = () => (
  <div className="container">
    <Head>
      <title>Interjections</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">Interjections</h2>
        <p className="description">Interjections are weird. They're very rarely
        written, but people use them all the time when they're speaking.
        They also usually stand apart from sentences; they serve no grammatical
        purpose. But in speech, they provide invaluable emphasis! Most swearing
        is done through interjections!
          </p>
      </div>
      <div className="content">
        <h3>How to use interjections in details</h3>
        <p>Because interjections stand alone from the rest of the sentence, you
        have to remember capitalization and punctuation! For example, with the
        sentence
        </p>
        <code>I dropped my phone.</code>
        <p>We can add the interjection <span className="cIntrj">Shit!</span> to express
        our feelings about what the sentence describes.
        </p>
        <code><span className="sIntrj">Shit</span><span className="sPunc">!</span>I dropped my phone.</code>
        <YouTubeVid vidID="FFwJMdeWqlw" />
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