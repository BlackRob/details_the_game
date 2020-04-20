import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'
import { Adj } from '../components/elementAliases'


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
          Any adjective would work --red, angry, Italian, crazy. Choose one
          that makes sense to you.
          </p>
          <p className="example">I'm scared of <Adj x='mechanical' /> bears.</p>
        </>} />
        <Fold title={<h3>Using more than one adjective</h3>} content={<>
          <p>When using more than one adjective with a noun, there are two things
          to remember. First, you have to use adjectives in a certain order.
          You can say "a dirty, red car", but not "a red, dirty car".
          The "order of adjectives" rules are tricky, and too complicated to discuss here,
          but as a general rule the adjective that is most closely linked with
          the identity of the noun goes closest to the noun. Being "red" is
          more a defining characteristic of the car than being "dirty", so "red"
            goes closer to "car".</p>
          <p>The second thing to remember is that you need to put commas between
          the separate adjectives, unless the adjective helps to define what type
          the noun is. So, although we would write, "a long, hot day" --with commas
          between "long" and "hot"-- we would write "a long, hot summer night".
          There's no comma between "hot" and "summer", because although they're both
          adjectives, "summer" tells what type of night we're talking about.
          </p></>} />
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

{/* < span className = "sAdj" > mechanical</span> */ }

export default ThisPage