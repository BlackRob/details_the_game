import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'

const ThisPage = () => (
  <div className="container">
    <Head>
      <title>Verbs</title>
      <link rel="icon" href="/favicon.ico" />
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
      </div>
      <div className="content">
        <section>
          <p>
            Verbs are all about fucking and fighting.
          </p>
          <YouTubeVid vidID="D5Y11hwjMNs" />
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