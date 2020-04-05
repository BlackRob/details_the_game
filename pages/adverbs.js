import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'

const ThisPage = () => (
  <div className="container">
    <Head>
      <title>Adverbs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Adverbs
        </h2>
        <p className="description">
          Adverbs are words that modify verbs, adjectives and other adverbs.
          We use adverbs to express the relative scale / intensity / quality
          of something. Adverbs answer the question, "how _______?"
          Example:
        </p>
        <code>My cat is evil.</code>
        <p>"How evil is your cat?"</p>
        <code>My cat is <span className="sAdv">very</span> evil.</code>
      </div>
      <div className="content">
        <section>
          <h3>Using adverbs</h3>
          <p>
            In the real world, adverbs are <span className="sAdv">extremely</span> common
            in spoken speech, but in writing they are considered bad style. When you write,
            you should try not to use <span className="sAdv">too</span> many of them.
            But when people talk, they use them <span className="sAdv">constantly</span>.<sup>1</sup>
          </p>
          <h4>Adverbs with verbs</h4>
          <h4>Adverbs with adjectives</h4>
          <h4>Adverbs with adverbs!</h4>
          <YouTubeVid vidID="5R1RGl4WQP8" />
          <p>
            <sup>1</sup> Adverbs are often not used literally. People use them for
            emphasis, so sometimes they exaggeragate.
          </p>
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