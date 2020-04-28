import Head from 'next/head'
import Link from 'next/link'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'
import { Punc, Conj } from '../components/elementAliases'

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
        <Fold title={<h3>Commas</h3>} content={<>
          <p>Commas have two main uses: to separate lists of items, and to separate
          some clauses from the main sentence. When speaking, a person usually pauses
          a little in places where they would write a comma.</p>
          <h4>Commas to separate lists</h4>
          <p>When we want to combine two words in a list we use a conjunction
          between them. When we want to combine three or more items, however,
          we only use a conjunction between the last two words, and separate
          the other words with commas:</p>
          <p className="example">Birds and bees can fly.</p>
          <p className="example">Birds<Punc x=',' /> bats and bees can fly.</p>
          <p>Some people will put an extra comma before the conjunction.
          This is called a "serial" or "Oxford" comma. You can if you want,
          but you don't have to.</p>
          <p className="example">Birds<Punc x=',' /> bats<Punc x=',' /> and bees can fly.</p>
          <p>Sometimes, for emphasis, people will use multiple conjunctions
          instead of commas. This famously happens in a song from "The Wizard of Oz":</p>
          <p className="example">Lions and tigers and bears, oh my!</p>
          <p>When playing details, never forget your commas! You can add them to
          your card at the beginning or end of your word, depending on where
          you want to place it in the sentence. For example, we can
          add <span className="cNoun">, zombies</span> to a sentence like this:</p>
          <p className="example">I invited robots<Punc x=',' /> zombies<Punc x=',' /> and
        pirates to my birthday party.</p>
          <p>Or we could add <span className="cNoun">zombies,</span> like this:</p>
          <p className="example">I invited zombies<Punc x=',' /> robots<Punc x=',' /> and pirates to my birthday party.</p>
          <h4>Commas after subordinate clauses</h4>
          <p>When a sentence has a main clause and a subordinate clause, if the
          subordinate clause goes first it is followed by a comma.</p>
          <p>To review subordinate clause, read <Link href="/conjunctions#subbyConj"><a
            alt="explanation of subordinate clauses">this</a></Link>. As far as punctuation,
          though, just remember that you can write </p>
          <p className="example">I bought a new car <Conj x='because' /> I had lots of money.</p>
          <p>or</p>
          <p className="example"><Conj x='Because' /> I had lots of money<Punc x=',' /> I bought a new car.</p>
          <p>But if you choose the second way (with the subordinate clause first),
          don't forget the comma.</p>
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