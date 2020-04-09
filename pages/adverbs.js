import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'

const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Adverbs" />
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
        <YouTubeVid vidID="5R1RGl4WQP8" caption="placeholder video" />
      </div>
      <div className="content">
        <h3>Using adverbs</h3>
        <p>In the real world, adverbs are extremely common in spoken speech,
        but in writing it is considered bad style to use too many of them.
        When you write, you should try to avoid unnecessary adverbs.
          But when people talk, they use them constantly!<sup>1</sup>
        </p>
        <Fold title={<h4>Adverbs with verbs</h4>} content={
          <p>The most basic use of adjectives is to modify verbs, to
          describe how (or in what manner) the action of the verb happened.
            <code>The doctor <span className="sAdv">slowly</span> drank his coffee.</code>
          </p>
        } />
        <Fold title={<h4>Adverbs with adjectives</h4>} content={<p>poop</p>} />
        <Fold title={<h4>Adverbs with adverbs!</h4>} content={<p>poop</p>} />
        <p><sup>1</sup>Adverbs are often not used literally. People use them for
        emphasis, and sometimes people exaggerate. "I am <i>so</i> happy for you!"</p>
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