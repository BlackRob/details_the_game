import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'
import { Adj, Noun, Conj, Prep, Verb, Pron, Adv } from '../components/elementAliases'

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
        "Noun" is the biggest class of words in English.
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
        <Fold title={<h3>Articles are free</h3>} content={<>
          <p>Often, singular nouns require an article (<b>a</b>, <b>an</b>, or <b>the</b>) to
          make it clear exactly what noun the speaker is talking about. There is
          a big difference between <span className="sBG">
              <Adj x="A" />&nbsp;<Noun x="dog" />&nbsp;<Verb x='barked' /></span> and <span
                className="sBG"><Adj x="The" />&nbsp;<Noun x="dog" />&nbsp;<Verb x='barked' /></span>. </p>
          <p>
            Articles are part of a group of adjectives called "determiners". Other determiners
              include <b>my</b>, <b>those</b>, <b>some</b>, et cetera. To use most determiners,
              because they're adjectives, you need to use an adjective word card: i.e. if
              you want to add "my car" to a sentence, you need an adjective card and a noun
              card, <span className="cAdj">my</span> and <span className="cNoun">car</span>; but
              because articles are so common and necessary, details doesn't reuire you to use
              a separate adjective card. You can just write the article on the same card as
              the noun: <span className="cNoun">the&nbsp;car</span>.</p>
        </>} />
        <Fold title={<h3>Nouns as subjects</h3>} content={<>
          <p>Almost all of the starting sentences in details will already have
          a subject, but it's often possible to add another.
          Example:</p>
          <p className="example"><Noun x='Flowers' /> smell nice.</p>
          <p>We can add another noun to the subject, and turn it into
          a "compound subject", but to do this we also need a conjunction.</p>
          <p className="example"><Noun x='Flowers' /> <Conj x='and' /> <Noun x='cookies' /> smell nice.</p>
          <p>If the sentence already has a compound subject (i.e. there's already a conjunction),
          we can add one or more extra nouns to the subject just by using commas.</p>
          <p className="example"><Noun x='Flowers' />, <Noun x='babies' />, <Noun x='coffee' /> <Conj x='and' /> <Noun x='cookies' /> smell nice.</p>
        </>} />
        <Fold title={<h3>Nouns as objects</h3>} content={<>
          <p>Almost every sentence in English has a subject<sup>1</sup>, but
          not every sentence has an object. Objects are only needed with transitive verbs,
          i.e. verbs where something receives the action. Examples:</p>
          <p className="example">I <Verb x="hate" /> <Adj x="the" /> <Noun x='moon' />.</p>
          <p className="example">Alice <Verb x="ate" /> <Noun x='apples' />.</p>
          <p className="example">Bob <Verb x="bakes" /> <Noun x='bread' />.</p>
          <p>As mentioned above, prepositional phrases also need objects, so if you have
          a preposition card, it would be a good idea to make sure you have a noun
            card to use with it: <span className="cPrep">with</span> <span className="cNoun">milk</span>.</p>
          <p className="example">Galactus <Verb x='ate' /> <Adj x='the' /> <Noun x='moon' /> <Prep x='for' /> <Noun x='breakfast' />.</p>
        </>} />
        <Fold title={<h3>Nouns as adjectives</h3>} content={<>
          <p>There are (at least) three ways that nouns can be used as adjectives.</p>
          <h4>The possessive form</h4>
          <p>The possessive form of nouns functions as an adjective, but it's still
            a noun. </p>
          <p className="example">Sam broke <Noun x="Jack's" /> <Noun x='laptop' />.</p>
          <p className="example">The <Noun x="crow's" /> <Noun x='cawing' /> kept me awake.</p>
          <h4>Turn a simple noun into a compound noun</h4>
          <p>"Lion" is a noun. "<a href="https://www.merriam-webster.com/dictionary/sea%20lion"
            rel="noopener noreferrer" target="_blank">Sea lion</a>" is also a noun. <i>Sometimes</i> you can
          add a noun in this way. Other times this is almost cheating
          --compare <span className="sBG"><Noun x="french fry" /></span> with <span className="sBG">
              <Adj x="french" />&nbsp;<Noun x="perfume" /></span>. Use your own
              judgment, and when in doubt, <abbr title="Always Check The Dictionary">ACTD</abbr>.</p>
          <h4>Expand on a proper noun</h4>
          <p>Proper nouns --the names of specific people, places and things-- can often be
          expanded by adding a title, or just another random noun, and the
            result is still grammatically correct.</p>
          <p className="example"><Noun x="Carol" /> sings beautifully.</p>
          <p>can be changed to</p>
          <p className="example"><Noun x="Doctor" /> <Noun x="Carol" /> sings beautifully.</p>
          <p>And we could transform</p>
          <p className="example">My friend Joe owns <Noun x='Rocket Records' />.</p>
          <p>into</p>
          <p className="example">My friend Joe owns <Noun x='Lizard Rocket Records' />.</p>
        </>} />
        <p><sup>1</sup> Yes, some grammatically correct sentences don't
        explicitly have subjects. Two examples:</p>
        <p className="example"><Verb x="Give" /> <Pron x='me' /> <Adv x="a" /> <Noun x='cookie' />!</p>
        <p className="example"><Adv x="There" /> <Verb x="isn't" />.</p>
        <p>The first is an imperative sentence --it gives a command-- and has
        an implied subject of "you". In the second sentence, "there" is an
        adverb. If we were to write, "There is a chance", that is equivalent
        to saying, "A chance exists." So in there is/there are constructions,
        the subject comes after the verb. So where's the subject in sentence
        two? It has to be understood from context! It's something that was
        already mentioned in a previous sentence: the listener or reader would
        have to infer what the subject is.
        </p>
        <p className="example">Alice: <Verb x="Is" /> <Adv x="there" /> <Adv x="a" /> <Noun x='chance' /> you'll change your mind?</p>
        <p className="example">Bob: <Adv x="There" /> <Verb x="isn't" /> [a chance].</p>
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