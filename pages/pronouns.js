import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'
import { Pron, Adj, Noun, Conj, Verb, Prep } from '../components/elementAliases'

const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Pronouns" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Pronouns
        </h2>
        <p className="description">Pronouns either take the place of nouns
        or make reference to them. They are very important, but there aren't
        very many of them: there are just over 100 pronouns in English,
        but we use them all the time!
          </p>
        <YouTubeVid vidID="dntgsqKjQ0Y" caption="placeholder video" />
      </div>
      <div className="content">
        <h3>Types of pronouns</h3>
        <p>Pronouns are some of the most frequently used words in English:
            25 of the 100 most common English words are pronouns!<sup>1</sup>&nbsp;
            Pronouns are usually broken into categories, and you should understand
            the different types so that you can use them correctly
            (in details and in life.)</p>
        <Fold title={<h3>Personal pronouns for subjects</h3>} content={<>
          <p>In English, the personal subject pronouns are "I", "it", "he", "she", "we",
          "you" and "they". These are also sometimes referred to just as "subject
          pronouns" (to differentiate them from "object pronouns"), but other
          types of pronouns can also serve as the subject of a sentence.</p>
          <p className="example"><Pron x='She' /> doesn't like robots.</p>
          <p>When playing details, every starter sentence already has a subject,
          so if you want to add a subject pronoun, you'll also need a conjunction
          card (usually). For example, we can add <span className="cConj">and</span>&nbsp;
          and <span className="cPron">I</span> to
           the sentence "The elephant ate cupcakes" to get </p>
          <p className="example">The elephant <Conj x="and" /> <Pron x='I' /> ate cupcakes.</p>
          <p>But be careful doing this: in some tenses, some verbs have different
          endings depending on whether the subject is singular or plural, i.e
            we say "I <i>am</i>" but "we <i>are</i>", and "he <i>eats</i>" but
            "he and she <i>eat</i>". You can't change "He likes cookies" to</p>
          <p className="example">❌ <Pron x='He' /> <Conj x='and' /> <Pron x='she' /> likes cookies.</p>
          <p>That would be wrong, wrong, wrong!
          Don't do it! "Likes" as a verb needs a singular subject. But this would be fine:</p>
          <p className="example"><Pron x='He' /> <Conj x='or' /> <Pron x='she' /> likes cookies.</p>
        </>} />
        <Fold title={<h3>Personal pronouns for objects</h3>} content={<>
          <p>Often just called "object pronouns" (incorrectly --lots of other pronouns
          can functions as "objects" in the grammatical sense), these pronouns
          are used as the object of a verb or preposition. The personal object
          pronouns in English are "me", "us", "you", "her", "him", "it" and "them". </p>
          <p className="example">The girls all hate <Pron x='him' />.</p>
          <p className="example">We threw apples <Prep x='at' /> <Pron x='them' />.</p>
        </>} />
        <Fold title={<h3>Possessive pronouns</h3>} content={<>
          <p>In English the possessive pronouns are "mine", "yours", "his",
          "hers", "its", "ours" and "theirs" Please note that "its" has no
          apostrophe: with an apostrophe, "it's" is a contraction of "it is".
            Possessive pronouns can function as ether subjects or objects:</p>
          <p className="example"><Pron x='Mine' /> are yellow.</p>
          <p className="example">The dog ate <Pron x='yours' />.</p>
          Possessive pronouns are often confused with possessive adjectives, because
          they look the same or similar ("my", "your", "his", "her", "its", "our", "their"),
          but they are used differently. You can say <span className="sBG"><Adj x="your" /> <Noun x="dog" /></span>&nbsp;
          but not <span className="sBG">❌ <Pron x="yours" /> <Noun x="dog" /></span>.
        </>} />
        <Fold title={<h3>Reflexive pronouns</h3>} content={<>
          <p>Reflexive pronouns end in <i>-self</i> or <i>-selves</i>, and there
          are only nine<sup>2</sup> of them: "myself", "yourself", "himself", "herself",
          "itself", "oneself", "ourselves", "yourselves", "themselves".
          Reflexive pronouns act like a mirror: they reflect a noun back at
          itself. They are mainly used when the object of a verb or preposition is
          the same person or thing as the subect. </p>
          <p className="example">The snake ate <Pron x='itself' />.</p>
          <p className="example">I bought <Pron x='myself' /> a new phone.</p>
          <p className="example">The winemakers kept the best wine for <Pron x='themselves' />.</p>
          <p>Reflexive pronouns are sometimes used right after a noun for emphasis --they
            essentialy say "and not anyone else":</p>
          <p className="example">The Mayor <Pron x='himself' /> always drinks coffee at sunset.</p>
        </>} />
        <h4>Intensive pronouns</h4>
        <h4>Indefinite pronouns</h4>
        <h4>Demonstrative pronouns</h4>
        <h4>Interrogative pronouns</h4>
        <h4>Relative pronouns</h4>
        <h4>Archaic pronouns</h4>
        <p><sup>1</sup> This isn't completely true: although there are 25 pronouns
          on the top 100 list, some of them are not used only as pronouns.
          "One" can be used as a pronoun: "The dragon ate one."
          But it can also be used as an adjective: "The dragon ate one princess."</p>
        <p><sup>2</sup> It is becoming increasingly acceptable to use "themself" when
        referring to a single person of indeterminate gender, so you can say that their
        are ten reflexive pronouns. This is similar to how "they" has been used for
        many, many years to refer to a single person that might be a man, or might
        be a woman --we don't know, it doesn't matter to the sentence. But it is
        usually better to use "themselves" instead of "themself".</p>
        <p className="example">The customer can leave the movie theater whenever <Pron x='they' /> want.</p>
        <p className="example">A pedestrian slipped on the ice and hurt <Pron x='themself' />.</p>
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