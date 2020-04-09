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
      <MyHeadStuff title="Adjectives" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Adjectives
        </h2>
        <p className="description">
          Adjectives are used before nouns or pronouns.
          People say adjectives "modify" nouns, but that just means they give
          extra information about the word they're attached to.
        </p>
        <YouTubeVid vidID="V1d4r9awjKE" caption="placeholder video" />
      </div>
      <div className="content">
        <Fold title={<h3>How to use adjectives in details</h3>} content={<>
          <p>Consider the sentence, "I'm scared of bears".
          You can change that sentence by adding an adjective to bears.
          Any adjective would work --red, angry, Italian, crazy.
          </p>
          <code>I'm scared of mechanical bears.</code> </>} />
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