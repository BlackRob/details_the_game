import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'
import { Prep, Adj, Noun } from '../components/elementAliases'

const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Prepositions" />
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
        <Fold title={<h3>How to use prepositions</h3>} content={<>
          <p>The most common form of prepositional phrase is a preposition
        with a noun, like <span className="sBG"><Prep x="on" />&nbsp;<Adj x="the" />&nbsp;<Noun x="road" /></span>,&nbsp;
        <span className="sBG"><Prep x="before" />&nbsp;<Noun x="midnight" /></span>,&nbsp;
        <span className="sBG"><Prep x="under" />&nbsp;<Adj x="the" />&nbsp;<Noun x="sea" /></span> or&nbsp;
        <span className="sBG"><Prep x="with" />&nbsp;<Adj x="a" />&nbsp;<Noun x="knife" /></span>.
          </p>
        </>} />
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