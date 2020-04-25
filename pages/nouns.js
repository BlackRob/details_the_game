import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'
import { Adj, Noun, Conj, Prep } from '../components/elementAliases'

const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Nouns" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Nouns
        </h2>
        <p className="description">Nouns describe a person, place, thing or idea.
        "Noun" is the biggest category of words in English.
        Dog is a noun. Cat is a noun. Love is a noun. Pizza is a noun.
          ("You" and "I" are not <i>nouns</i>. "You" and "I", and "him" and "her", are <i>pronouns</i>. 🤨)
        </p>
        <YouTubeVid vidID="LNxWTS25Tbk" caption="placeholder video" />
      </div>
      <div className="content">
        <Fold title={<h3>How to use nouns in details</h3>} content={<>
          <p>Nouns are very, very common, so you will need to use a lot
          of them when you play details! Nouns are used as subjects
          (they "do" whatever the verb describes) and objects (the action of the verb gets done to them).
          Example:</p>
          <p className="example"><Noun x='Clowns' /> eat <Noun x='pineapples' />.</p>
          <p>"Clowns" is the subject of the sentence (what "does" the eating),
          and "pineapple" is the object (it shows what was eaten).</p>
          <p>Nouns are also used with prepositions --we say the noun is the
          "object" of the prepositional phrase.</p>
          <p className="example"><Noun x='Clowns' /> eat <Noun x='pineapples' /> <Prep x='in' /> <Noun x="Paris" />.</p>
        </>} />
        <Fold title={<h3>Nouns as subjects</h3>} content={<>
          <p>Almost all of the starting sentences in details will already have
          a subject, but it's often possible to add another subject.
          Example:</p>
          <p className="example"><Noun x='Flowers' /> smell nice.</p>
          <p>We can add another noun to the subject, and turn it into
          a "compound subject", but we also need a conjunction.</p>
          <p className="example"><Noun x='Flowers' /> <Conj x='and' /> <Noun x='cookies' /> smell nice.</p>
          <p>If the sentence already has a compound subject (i.e. there's already a conjunction),
          we can add one or more extra nouns to the subject just by using commas.</p>
          <p className="example"><Noun x='Flowers' />, <Noun x='babies' />, <Noun x='coffee' /> <Conj x='and' /> <Noun x='cookies' /> smell nice.</p>
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