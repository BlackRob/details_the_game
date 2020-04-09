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
      <MyHeadStuff title="Interjections" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">Interjections</h2>
        <p className="description">Interjections are weird. They're very rarely
        written, but people use them all the time when they're speaking.
        Interjections serve no grammatical purpose, they just express emotion,
        so they are usually written separately (not part of another sentence).
        A lot of swearing is done through interjections.
          </p>
        <YouTubeVid vidID="FFwJMdeWqlw" caption="placeholder video" />
      </div>
      <div className="content">
        <h3>How to use interjections in details</h3>
        <p>Because interjections stand alone from the rest of the sentence, you
        have to remember capitalization and punctuation! For example, with the
        sentence
        </p>
        <code>I dropped my phone.</code>
        <p>We can add the interjection <span className="cIntrj">Shit!</span> to express
        our feelings about what the sentence describes.
        </p>
        <code><span className="sIntrj">Shit</span><span className="sPunc">!</span>I dropped my phone.</code>
        <p>Interjections can be followed by exclamation marks, question marks, or
        periods. When interjections are placed in the middle of a sentence,
        they are set off by either commas or double hyphens (see below).
        </p>
        <h4>Placing an interjection in a sentence</h4>
        <p>The last example used an interjection at the beginnning of a sentence,
        but they can also be placed at the end of a sentence:
          </p>
        <code>Mom is cooking spiders for dinner. <span className="sIntrj">Gross</span><span className="sPunc">.</span></code>
        <p>Sometimes they can even be used in the middle of a sentence:</p>
        <code>My brother said <span className="sPunc">--</span>
          <span className="sIntrj">so stupid</span><span className="sPunc">--</span> that
        bats only eat cheese.</code>
        <h4>Not all interjections are one word, not all lone words are interjections</h4>
        <p>Some interjections --"Uh oh! Oh no! No way!"-- are made up of more than one word.
        But not every word that gets used on its own is an interjection. Consider the
        following sequence:
          </p>
        <code><span className="sIntrj">Wow</span><span className="sPunc">!</span> <span className="sNoun">Karen</span>
          <span className="sPunc">!</span> <span className="sVerb">Look!</span>
          <span className="sPunc">!</span></code>
        <p>Only the first word is an interjection. The second is a noun, using "direct address"
        (calling someone by their name). The last is a verb in the imperative mood (a command).
          </p>
        <h4>Interjection magic: swearing without swearing</h4>
        <p>Interjections get their power from how they are said, not from the word
        itself. This allows us to express strong feelings without using words
        that might offend people. For example, my grandmother used to say "Oh sugar!"
        instead of "Shit!", and people often say "Fudge!" instead of another, less
        polite "fu" word. When a word is used this way, it's called a <i>euphemism</i>,
        which just means that one word is taking the place of another one.
          </p>
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