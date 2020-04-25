import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'
import { Adv } from '../components/elementAliases'

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
        <p className="example">My cat is evil.</p>
        <p>"<i>How</i> evil is your cat?"</p>
        <p className="example">My cat is <Adv x="very" /> evil.</p>
        <YouTubeVid vidID="5R1RGl4WQP8" caption="placeholder video" />
      </div>
      <div className="content">
        <Fold title={<h3>Using adverbs in details</h3>} content={<>
          <p>In the real world, adverbs are extremely common in spoken speech,
          but in writing it is considered bad style to use too many of them.
          When you write, you should try to avoid unnecessary adverbs.
          But when people talk, they use them constantly!<sup>1</sup>
          </p>
          <p className="example"><Adv x='Even' /> my brother <Adv x="very rarely" /> puts&nbsp;
           <Adv x='so' /> much sugar in his tea.</p>
          <p>In the previous example, "Even" adds emphasis to "my" (a possessive
            adjective), "rarely" tells <i>how</i> he puts _____ (adverb modifying a verb),
            "very" modifies "rarely" (adverb modifying adverb: how rarely? very), and
            "so" gives a sense of scale to the adjective "much".
          </p>
        </>} />
        <Fold title={<h3>Adverbs with verbs</h3>} content={<>
          <p>The most basic use of adjectives is to modify verbs, to
          describe how (or in what manner) the action of the verb happened.</p>
          <p className="example">The doctor  <Adv x="slowly" /> drank his coffee.</p>
        </>} />
        <Fold title={<h3>Adverbs with adjectives</h3>} content={<p>poop</p>} />
        <Fold title={<h3>Adverbs with adverbs!</h3>} content={<p>poop</p>} />
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