import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'

const ThisPage = () => (
  <div className="container">
    <Head>
      <title>Conjunctions</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Conjunctions
        </h2>
        <p className="description">Conjunctions join two words, phrases or clauses.<sup>1
          </sup> Everyone knows the simple conjunctions like "and", "but" and "or", but there are
          actually many more. These conjunctions allow us to make complex sentences and
          express relationships between different facts. For example, a person could say,
          "Tom likes Sally" and "Sally makes him laugh". These are two separate sentences.
          If we combine them with a conjunction, though, we can give extra information to
          the listener:
        </p>
        <code>Tom likes Sally <span className="sConj">because</span> Sally makes him laugh.</code>
        <p>
          The facts are no longer separate: the listener now knows that one fact explains
          the other. Now we know <i>why</i> Tom likes Sally.
        </p>
      </div>
      <div className="content">
        <h3>Different ways to use conjunctions</h3>
        <p>
          Conjunctions are part of several named grammatical constructions.
        </p>
        <h4>"Compound" word phrases</h4>
        <YouTubeVid vidID="3GpOd3vuOGg" />
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