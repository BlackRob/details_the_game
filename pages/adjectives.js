import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'
import { Adj, Noun, Punc, Conj } from '../components/elementAliases'


const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Adjectives" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">Adjectives</h2>
        <p className="description">
          Adjectives are used before nouns or pronouns.
          People say adjectives "modify" nouns, but that just means they give
          extra information about the word they're attached to.</p>
        <YouTubeVid vidID="kb7NS16W1BA" caption="placeholder video" />
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
          You can say <span className="sBG"><Adj x="a" /> <Adj x="dirty" /><Punc x=',' /> <Adj x="red" /> <Noun x="car" /></span>&nbsp;
          but not <span className="sBG">❌ <Adj x="a" /> <Adj x="red" /><Punc x=',' /> <Adj x="dirty" /> <Noun x="car" /></span>.
          The "order of adjectives" rules are tricky, and too complicated to discuss here,
          but as a general rule the adjective that is most closely linked with
          the identity of the noun goes closest to the noun. Being "red" is
          more a defining characteristic of the car than being "dirty", so "red"
          goes closer to "car".</p>
          <p>The second thing to remember is that you need to put commas between
          the separate adjectives, unless the adjective helps to define what type
          the noun is. So, although we would write <span className="sBG">
              <Adj x="a" /> <Adj x="long" /><Punc x=',' /> <Adj x="hot" /> <Noun x="night" /></span>&nbsp;
          --with commas between "long" and "hot"-- we would write <span className="sBG">
              <Adj x="a" /> <Adj x="long" /><Punc x=',' /> <Adj x="hot" /> <Adj x="summer" /> <Noun x="night" /></span>.
          There's no comma between "hot" and "summer", because although they're both
          adjectives, "summer" tells what type of night we're talking about, so
          it's almost closer to being part of the noun than an independent adjective.
          </p></>} />
        <Fold title={<h3>Using nouns as adjective</h3>} content={<>
          <p>One fact to remember about Engish is that sometimes the same word can
          be used in different ways. For example, "French" can refer to the people
          of France, or it can be an adjective that refers to things from or related
          to France. When in doubt about what type a word is,&nbsp;
            <a href="https://www.merriam-webster.com/dictionary/French">check the dictionary</a>.
            In fact, <abbr title="Always Check The Dictionary">ACTD</abbr>.</p>
          <p>Based on this, one might wonder whether it's okay to use a noun card as
          an adjective. Well, you can do it --the game won't prevent you-- but you probably
          shouldn't. Other people who see it might call it a mistake, and it does
          violate the spirit of the game. If you have a noun card, the challenge is to
          use it as a noun, not repurpose it as a adjective. But, you shouldn't let this "rule"
            interfere with your creativity. For example, if we have this sentence:</p>
          <p className="example">The <Adj x='Russian' /> <Noun x='bears' /> were fighting.</p>
          <p>We could change it by adding a conjunction and an article (adjective):</p>
          <p className="example">The <Adj x='Russian' /> <Conj x='and' /> <Adj x="the" /> <Noun x='bears' /> were fighting.</p>
          <p>That's a clever and creative way to use a conjunction and an adjective at
          the same time, and we shouldn't let some technicality (the color of "Russian"
            indicates it's an adjective, but now it's functioning as a noun) stop us.</p>
        </>} />
      </div>
      <div className="sidebar">
        <TypeButtonDiv />
      </div>
    </main>
    <SiteFooter />
    <style jsx>{`
      a, a:visited {
        color: black;
        text-decoration: underline;
      }
      a:hover, a:active {
        color: black;
      }
    `}</style>
  </div >
)

export default ThisPage