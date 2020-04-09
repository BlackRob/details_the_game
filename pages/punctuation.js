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
      <MyHeadStuff title="Punctuation" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">Punctuation</h2>
        <p className="description">Punctuation isn't grammar, but it's still
        really important to know if you want to play details (or write well).
        Always remember when playing details, you are responsible for your own
        punctuation!
        </p>
        <YouTubeVid vidID="nlaoR5m4L80" caption="Basic punctuation use in details" />
      </div>
      <div className="content">
        <Fold title={<h3>Commas</h3>} content={
          <p>Commas have two main uses: to separate lists of items, and to separate
          some clauses from the main sentence. When speaking, a person usually pauses
          a little in places where they would write a comma.
          </p>} />
        <Fold title={<h4>Commas to separate lists</h4>} content={<>
          <p>When we want to combine two words in a list we use a conjunction
          between them. When we want to combine three or more items, however,
          we only use a conjunction between the last two words, and separate
          the other words with commas.
          </p>
          <code>Birds and bees can fly.</code>
          <code>Birds, bats and bees can fly.</code>
          <p>Some people will put an extra comma before the conjunction.
          This is called a "serial" or "Oxford" comma. You can if you want.
          </p>
          <code>Birds, bats, and bees can fly.</code>
          <p>Sometimes, for emphasis, people will use multiple conjunctions
          instead of commas. This famously happens in a song from "The Wizard of Oz":
          </p>
          <code>Lions and tigers and bears, oh my!</code>
          <p>When playing details, never forget your commas! You can add them to
          your card at the beginning or end of your word, depending on where
          you want to place it in the sentence. For example, we can
          add <span className="cNoun">, zombies</span> to a sentence like this:
        </p>
          <code>I invited robots<span className="sPunc">,</span> <span className="sNoun">zombies</span> and
        pirates to my birthday party.</code>
          <p>Or we could add <span className="cNoun">zombies,</span> like this:
          </p>
          <code>I invited <span className="sNoun">zombies</span><span className="sPunc">,</span> robots and
        pirates to my birthday party.</code>
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