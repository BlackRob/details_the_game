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
      <MyHeadStuff title="Verbs" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Verbs
        </h2>
        <p className="description">
          Verbs!
        </p>
        <YouTubeVid vidID="D5Y11hwjMNs" caption="placeholder video" />
      </div>
      <div className="content">
        <p>
          Verbs are all about fucking and fighting.
          </p>
        <YouTubeVid vidID="D5Y11hwjMNs" />
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