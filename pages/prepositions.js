import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'
import { Prep, Adj, Noun, Verb, Pron, Conj } from '../components/elementAliases'

const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Prepositions" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">Prepositions</h2>
        <p className="description">Prepositions are words that show a relationship
        between two other words: the object of the preposition and another word
        in the sentence. Prepositions are always used with other words to
        form "prepositional phrases". Prepositional phrases can be used like
        adverbs or like adjectives --meaning they can answer questions like how,
        what, when, whom, which, et cetera-- to add details to a sentence. </p>
        <YouTubeVid vidID="uZt1xKtPbUQ" caption="Basic punctuation use in details" />
      </div>
      <div className="content">
        <Fold title={<h3>How to use prepositions in details</h3>} content={<>
          <p>The most common type of prepositional phrase has a preposition
          with a noun, like <span className="sBG"><Prep x="on" />&nbsp;<Adj x="the" />&nbsp;<Noun x="sidewalk" />
            </span>, <span className="sBG"><Prep x="before" />&nbsp;<Noun x="midnight" />
            </span>, <span className="sBG"><Prep x="under" />&nbsp;<Adj x="the" />&nbsp;<Noun x="sea" />
            </span> or <span className="sBG"><Prep x="with" />&nbsp;<Adj x="a" />&nbsp;<Noun x="knife" /></span>.
          </p>
          <p>Look at the following sentences and think about what the prepositional phrase
            is doing, what <i>detail</i> it's adding to the sentence.</p>
          <p className="example">We <Verb x="rode" /> our bicycles <Prep x='on' /> <Adj x='the' /> <Noun x='sidewalk' />.</p>
          <p>The prepositional phrase is acting like an adverb: it tells <i>where</i> the
          action (riding) took place.</p>
          <p className="example">The old witch <Verb x="was asleep" /> <Prep x='before' /> <Noun x='midnight' />.</p>
          <p>This prepositional phrase is acting like an adverb again: it tells <i>when</i> the
          action (falling asleep) took place.</p>
          <p className="example"><Adj x="The" /> <Noun x="monsters" /> <Prep x='under' /> <Adj x='the' /> <Noun x='sea' /> are angry.</p>
          <p>Here the prepositional phrase is acting like an adjective: it tells <i>which</i> monsters
          are angry.</p>
          <p>Although grammatically a preposition always has to be part of a prepositional phrase,
            when playing details you can <i>sometimes</i> use a preposition
            on its own to change the meaning of a sentence. This doesn't happen very
            often, but you should know that it is possible.</p>
          <p className="example">The lion <Verb x='ate' /> <Adj x='the' /> <Noun x='monkey' />.</p>
          <p>In the above sentence, "the monkey" is the object of the verb "ate": the monkey
          is what the lion ate. That's very sad! But we can change it if we add a preposition:</p>
          <p className="example">The lion <Verb x='ate' /> <Prep x="with" /> <Adj x='the' /> <Noun x='monkey' />.</p>
          <p>In the new sentence, "the monkey" is now the object of the prepositional
          phrase, and this prepositonal phrase adds a detail to the verb "ate".
          What did the lion eat? We don't know, but we know that when he ate, the
            monkey was there, too. </p>
        </>} />

        <Fold title={<h3>What type of words can be objects?</h3>} content={<>
          <p>Most of the time, a preposition is combined with a noun or a pronoun
              to form a prepositional phrase: <span className="sBG"><Prep x="in" />&nbsp;<Noun x="Paris" />
            </span>, <span className="sBG"><Prep x="with" />&nbsp;<Pron x="her" />
            </span>, <span className="sBG"><Prep x="because of" />&nbsp;<Adj x="the" />&nbsp;<Noun x="spiders" />
            </span> or <span className="sBG"><Prep x="next to" />&nbsp;<Pron x="them" /></span>.
          </p>
          <p>One thing to notice is that when a pronoun is used, you have to use
            the <i>object</i> form of the pronoun. Some pronouns require different forms
              for whether they are used as a subject or an object, like <b>who</b> (subject)
              and <b>whom</b> (object). The personal object pronouns are <b>me</b>, <b>him</b>, <b>her</b>, <b>us</b>,
              and <b>them</b>. <b>It</b> and <b>you</b> don't have separate object forms. You can
              write <span className="sBG"><Prep x="inside" />&nbsp;<Noun x="me" />
            </span>, but not <span className="sBG">❌ <Prep x="inside" />&nbsp;<Pron x="I" />
            </span>.</p>
          <p><i>Sometimes</i> you can make a prepositional phrase with a verb form --usually
            the <i>-ing</i> form: <span className="sBG"><Prep x="after" />&nbsp;<Verb x="eating" />
            </span>, <span className="sBG"><Prep x="before" />&nbsp;<Verb x="swimming" />
            </span>. In these cases, the verb form is acting like a noun ("eating" is an activity
              and activities are nouns).</p>
          <p><i>Sometimes</i> you can also use an entire phrase as the object of a
              preposition. This is actually very common... the phrase itself might contain
              several nouns, adjectives and even other prepositional phrases. Consider the sentence</p>
          <p className="example">Tom <Verb x="is eating" /> breakfast.</p>
          <p><i>With whom is he eating breakfast?</i></p>
          <p className="example">Tom <Verb x="is eating" /> breakfast <Prep x="with" /> <Adj x="white" /> <Noun
            x="dogs" />, <Adj x="black" /> <Noun x="cats" />, <Adj x="seven" /> <Noun x="monkeys" /> <Prep
              x="from" /> <Adj x="the" /> <Noun x="zoo" />, <Adj x="the" /> <Noun x="King" /> <Prep
              x="of" /> <Noun x="Spain" /> <Conj x="and" /> <Adj x="a jealous" /> <Noun x="ghost" />.</p>
          <p>Everything after <b>with</b> forms the object of the prepositional phrase... which
            answers the question, "with whom is Tom eating breakfast?"</p>
        </>} />

        <Fold title={<h3>Types of prepositions</h3>} content={<>
          <p>Prepositions are generally divided into different groups based
            on how they are used (what sort of questions do they answer).</p>
          <h4>Prepositions for time --when?</h4>
          <p><b>In</b>, <b>on</b> and <b>at</b> are sometimes used to talk about
            the time when things happened or are scheduled. <b>In</b> is used the
            way "in" as always used, to refer to something with known limits.
            For example, <i>March</i> has a beginning and an end, it is a specific, bounded
            period of time, so we would say <span className="sBG"><Prep
              x="in" />&nbsp;<Noun x="March" /></span>, <span className="sBG"><Prep
                x="in" />&nbsp;<Noun x="1984" /></span>, or <span className="sBG"><Prep
                  x="in" />&nbsp;<Adj x="the twentieth" />&nbsp;<Noun x="century" /></span>
          </p>
          <p><b>On</b> is used to refer to specific days or dates: <span className="sBG"><Prep
            x="on" />&nbsp;<Noun x="Tuesday" /></span>, <span className="sBG"><Prep
              x="on" />&nbsp;<Noun x="February 8th" /></span> or <span className="sBG"><Prep
                x="on" />&nbsp;<Noun x="Christmas" /></span></p>
          <p><b>At</b> is used to refer to specific times: <span className="sBG"><Prep
            x="at" />&nbsp;<Noun x="3 O'clock" /></span>, <span className="sBG"><Prep
              x="at" />&nbsp;<Noun x="noon" /></span> or <span className="sBG"><Prep
                x="at" />&nbsp;<Noun x="sunrise" /></span></p>
          <p>There are many other prepositons that can be used for talking about time such
            as <b>during</b>, <b>before</b>, <b>after</b>, <b>around</b>, <b>since</b> and <b>near</b>.
            Note that many time prepositions can also  be used for describing location. </p>
          <p className="example">I <Verb x="was driving" /> <Prep x="around" /> <Adj x="the" /> <Noun
            x="city" /> <Prep x="around" /> <Noun x="midnight" />.</p>

          <h4>Prepositions for place --where?</h4>
          <p>Prepositions for describing where something is or happens.</p>
          <p className="example">I <Verb x="drank" /> wine <Prep x="at" /> <Adj x="the" /> <Noun
            x="bar" />.</p>
          <p className="example">Cathy hates to see <Noun x="animals" /> <Prep x="in" /> <Noun x="cages" />.</p>
          <p className="example">She <Verb x="lives" /> <Prep x="near" /> <Adj x="the" /> <Noun x="train station" />.</p>
          <p className="example">Becky <Verb x="woke up" /> <Prep x="under" /> <Adj x="a" /> <Noun x="bridge" />.</p>

          <h4>Prepositions for direction --which way?</h4>
          <p>Prepositions for describing which way something is moving or directed towards.</p>
          <p className="example">The police <Verb x="shot" /> <Prep x="at" /> <Adj x="the" /> <Noun x="wizard" />.</p>
          <p className="example">My grandmother <Verb x="is walking" /> <Prep x="towards" /> <Pron x="me" />.</p>
          <p className="example">Let's <Verb x="fly" /> a rocket <Prep x="to" /> <Adj x="the" /> <Noun x="moon" />!</p>
          <p className="example">I <Verb x="ran" /> <Prep x="away from" /> <Adj x="the" /> <Noun x="police" />.</p>

          <h4>Prepositions for agents and instruments --who or what?</h4>
          <p>Prepositions used to describe who or what did something.</p>
          <p className="example">The novel <Verb x="was written" /> <Prep x="by" /> <Adj x="a real" /> <Noun x="vampire" />.</p>

          <h4>Prepositions of manner --how? in what way?</h4>
          <p>Prepositions for describing the style or way something was done.</p>
          <p className="example">Seven children <Verb x="jumped" /> <Prep x="like" /> <Noun x="rabbits" />.</p>
          <p className="example">The bear <Verb x="looked" /> at me <Prep x="with" /> <Noun x="fear" /> in his eyes.</p>
          <p className="example">Suzanne often <Verb x="travels" /> <Prep x="by" /> <Noun x="bus" />!</p>
          <p className="example">I <Verb x="eat" /> ice cream <Prep x="with" /> <Adj x="a" /> <Noun x="spoon" />.</p>
          <p className="example">The pioneers <Verb x="crossed" /> the country <Prep x="in" /> <Adj x="covered" /> <Noun x="wagons" />.</p>

          <h4>Prepositions of intent --why?</h4>
          <p>Prepositions for describing the reason something was done.</p>
          <p className="example">I <Verb x="did" /> it <Prep x="for" /> <Noun x="love" />.</p>
          <p className="example">The superheroes <Verb x="fought" /> <Prep x="for" /> <Noun x="justice" />.</p>
          <p className="example">The villains <Verb x="fought" /> <Prep x="to" /> <Noun x="win" />!</p>

          <h4>Prepositions of belonging --whose?</h4>
          <p>Prepositions for showing a relationship. They are not limited
            to ownership; they can be used to show association or origin, too.</p>
          <p className="example">Marcella read us a poem <Prep x="of" /> <Noun x="hers" />.</p>
          <p className="example"><Adj x="The" /> <Noun x="men" /> <Prep x="from" /> <Noun x="Mars" /> loved candy bars.</p>
          <p className="example"><Noun x="Families" /> <Prep x="with" /> <Adj x="young" /> <Noun x="children" /> need extra food.</p>
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