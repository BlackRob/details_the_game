import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'
import { Verb } from '../components/elementAliases'

const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Verbs" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Verbs
        </h2>
        <p className="description">
          Verbs "do" the action of the sentence (sometimes). Learning
          to use verbs correctly in English is one of the trickiest
          parts of the language.
        </p>
        <YouTubeVid vidID="D5Y11hwjMNs" caption="placeholder video" />
      </div>
      <div className="content">
        <Fold title={<h3>Two types of verbs: transitive and intransitive</h3>} content={<>
          <p>The first type of verbs, "transitive", or "action" verbs
          describe something that actually happens... there's usually motion
          involved: to run, to jump, to laugh, to cry. </p>
          <p className="example">The zombies <Verb x='chased' /> me.</p>
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