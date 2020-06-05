import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'
import { Verb, Adv, Noun, Adj, Prep } from '../components/elementAliases'

const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Verbs" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Verbs
        </h2>
        <p className="description">
          Verbs "do" the action of the sentence (sometimes). Learning
          to use verbs correctly in English is one of the trickiest
          parts of the language. Some forms of verbs can also be used
          as nouns or adjectives.</p>
        <YouTubeVid vidID="D5Y11hwjMNs" caption="placeholder video" />
      </div>
      <div className="content">
        <Fold title={<h3>Two main types of verbs: transitive and intransitive</h3>} content={<>
          <p>The first type of verbs, "transitive", or "action" verbs
          describe something that actually happens... there's usually motion
          involved: to run, to jump, to laugh, to cry. </p>
          <p className="example">The zombies <Verb x='chased' /> me.</p>
          <p>Transitive verbs usually take an object (a noun or phrase that
            completes the verb by answering the questions <i>who?</i> or <i>what?</i>).
            If we just wrote, <b>The zombies chased</b>, someone
            would expect to know <i>who</i> or <i>what</i> they were chasing. </p>
          <p>"Intransitive" verbs are different --nothing happens! Instead,
          these verbs express a state of being. All of the following
          examples use intransitive verbs.</p>
          <p className="example">The zombies <Verb x='are' /> ugly.</p>
          <p className="example">Unicorns <Verb x='exist' />.</p>
          <p className="example">My parents <Verb x='waited' />.</p>
          <p className="example">The walrus <Verb x='slept' />.</p>
          <p>No one who reads or hears those sentences expects an extra
            word to complete the thought. No one wonders, "Unicorns exist <i>what</i>?"</p>
          <p>Some verbs can be transitive or intransitive, depending on how
            they are used in the sentence.</p>
          <p className="example">The zombies <Verb x='smell' /> brains.</p>
          <p className="example">Unicorns <Verb x='smell' />.</p>
          <p>In the first sentence <i>smell</i> is transitive, and needs
          an object (What do the zombies smell? Brains!) In the second
          sentence, we're just stating a fact: unicorns have a particular odor.
          We're not saying it's good or bad, just that it exists.</p>
        </>} />
        <Fold title={<h3>The third type: helping verbs</h3>} content={<>
          <p>Helping verbs never appear on their own as the main verb in
          a sentence. They always need another verb to complete them.
          There are not many of them, but they are among the most common
          words in the language. Helping verbs are used to express
          the tense, aspect, mood or voice of the main verb.
          Helping verbs can be further subdivided into auxiliary verbs
            and modal verbs.</p>
        </>} />
        <Fold title={<h3>Auxiliary verbs: to be, to have, to do</h3>} content={<>
          <p>These are the three most important verbs in English! They are
            also weird, because they're irregular.</p>
          <h4>To be</h4>
          <p>"To be" has the separate forms <b>am</b>, <b>are</b>, <b>is</b> in
            the present and <b>was</b>, <b>were</b> in the past.
            The past participle is <b>been</b>.</p>
          <p>These forms of "be" are used with the past participle
          to form the passive voice, and with the present participle (the
            <i>-ing</i> form) to make the progressive/continuous tenses.</p>
          <p className="example">Karen <Verb x='is eating' /> a sandwich.</p>
          <p className="example">We <Verb x='were living' /> a lie.</p>
          <p className="example">My team <Verb x='was defeated' /> in the championship game.</p>
          <p className="example">The children <Verb x='were given' /> candy.</p>
          <p>Forms of "to be" can also be used on their own --without a main verb--
            as <i>linking verbs</i>, which means they just show a connection
            between the subject and a noun or adjective.</p>
          <p className="example">Karen <Verb x='is' /> <Adj x="a" /> <Noun x="monster" />.</p>
          <p className="example">That <Verb x='was' /> <Adj x="funny" />.</p>
          <h4>To have</h4>
          <p>"To have" has the forms <b>have</b> and <b>has</b> in the present
          and <b>had</b> in the past. The past participle is also <b>had</b>.</p>
          <p>These forms are used with the past participle to indicate the
          "perfect" aspect of a verb (i.e. to form the past/present/future perfect
          and perfect progressive tenses.)</p>
          <p className="example">We <Verb x='have eaten' /> breakfast already.</p>
          <p className="example">The criminal <Verb x='has escaped' /> from jail.</p>
          <p className="example">The cold weather <Verb x='will have killed' /> all the mosquitoes.</p>
          <p><b>Note that to form the perfect progessive tenses</b> you need a "to be"
          verb and a "to have" verb. Perfect tenses require a form of "to have" and
          a past participle, while progressive tenses require a "to be" verb and
          the present participle. In these tenses we use the past participle of
          "to be", <b>been</b>, together with the correct form of "to have".</p>
          <p className="example">The dogs <Verb x='had been eating' /> for fifteen minutes.</p>
          <p className="example">My enemies <Verb x='have been laughing' /> at me all day.</p>
          <p className="example">By the time Sam arrives the
            teacher <Verb x='will have been talking' /> for an hour.</p>
          <p>Also note that the verb "have" can also be used as a regular
            (intranstive) verb to show ownership.</p>
          <p className="example">I <Verb x='have' /> a million dollars in the bank.</p>
          <p>When used in this way it can be the main verb in complex tenses.</p>
          <p className="example">The Johnsons <Verb x='were having' /> a picnic.</p>
          <p className="example">The movie star <Verb x='had had' /> three previous wives.</p>
          <p>In the last example, the first <i>had</i> shows "past", and the
          second <i>had</i> is the past participle, so together they form
          the past perfect of "to have".</p>
          <h4>To do</h4>
          <p>"To do" has the forms <b>do</b>, <b>does</b> in the present
          and <b>did</b> in the past. The past participle is <b>done</b>.
          "To do" is often used as a main verb:</p>
          <p className="example">Bob <Verb x='did' /> his taxes.</p>
          <p>It can also be used as an auxiliary verb to form questions</p>
          <p className="example"><Verb x='Do' /> you <Verb x="like" /> tacos?</p>
          <p>Or to make the negative form of a verb</p>
          <p className="example">I <Verb x='do' /> <Adv x="not" /> <Verb x="like" /> tacos.</p>
          <p>Or to add emphasis</p>
          <p className="example">But I <Verb x="do like" /> pizza.</p>
        </>} />
        <Fold title={<h3>Modal verbs</h3>} content={<>
          <p>Modal verbs are used to show how or in what manner something is
            done, to show possibility, or to form conditionals and requests.</p>
          <p className="example">Birds <Verb x='can fly' />.</p>
          <p className="example">Nobody <Verb x='could explain' /> how to solve the problem.</p>
          <p className="example">No one <Verb x='dared eat' /> the extra spicy noodles.</p>
          <p className="example">The neighbors <Verb x='may learn' /> my secret.</p>
          <p className="example">The Professor <Verb x='might know' /> the answer.</p>
          <p className="example">You <Verb x='must stop' /> sneaking up on me!</p>
          <p className="example">We <Verb x='need' /> <Adv x='not' /> <Verb x='water' /> the garden because it rained.</p>
          <p className="example">You <Verb x='ought to eat' /> that cookie.</p>
          <p className="example">The meek <Verb x='shall inherit' /> the earth.</p>
          <p className="example">We <Verb x='should see' /> that new movie.</p>
          <p className="example">Everybody <Verb x='will know' /> I cheated.</p>
          <p className="example">If I was a king I <Verb x='would eat' /> chocolate every day.</p>
          <p>Modal verbs are a complicated subject, and if you are not exactly
          sure how to use one, you should <a href="https://www.merriam-webster.com/dictionary/should">check the dictionary</a>.
            <abbr title="Always Check The Dictionary">ACTD</abbr>!</p>
        </>} />
        <Fold title={<h3>Phrasal verbs</h3>} content={<>
          <p>Phrasal verbs are verbs that are made up of more than one word. The
          second word is usually a prepositon, but in a phrasal verb it does not
          function (always) as a preposition. Phrasal verbs have to be learned as
          vocabulary, because their meaning is often different than what one
          would expect from a combination of the root verb and the preposition.</p>
          <p className="example">The writer <Verb x='tore up' /> the first draft of his article.</p>
          <p>In this case, the preposition <b>up</b> still functions as a preposition
          (it takes an object), but the meaning of "tear up" is not obvious from
          "tear" and "up".</p>
          <p className="example">Do you want to <Verb x='hang out' />?</p>
          <p>Here, "out" no longer functions as a preposition (it doesn't
          have an object.)</p>
          <p>Phrasal verbs can also be made up of more than two words.</p>
          <p className="example">Why do you <Verb x='put up with' /> his attitude?</p>
          <p>Phrasal verbs are not obvious. Sometimes, the verb and a
          preposition can go together in the same order, but in one sentence
          they form a phrasal verb, but in another the preposition is part
          of a normal prepositional phrase that just happens to follow the verb.</p>
          <p className="example">Alice <Verb x='looked up' /> Ed's phone number.</p>
          <p className="example">We <Verb x='looked' /> <Prep x="up" /> the mountain.</p>
          <p>The first example uses the phrasal verb <b>look up</b>,
          in the second <b>up</b> starts a prepositonal phrase that functions
          as an adverb (it tells <i>where</i> we looked.) If you are not
          sure if a verb + preposition combination is a phrasal verb, you
          should <a href="https://www.merriam-webster.com/dictionary/seek%20out">check the dictionary</a>. &nbsp;
          <abbr title="Always Check The Dictionary">ACTD</abbr>!</p>
        </>} />
        <Fold title={<h3>Verbs acting like nouns</h3>} content={<>
          <p>Sometimes, verbs can act like nouns in a sentence. This normally
            happens with the infinitive or past or present participles.</p>
          <h4>Infinitives as nouns</h4>
          <p className="example"><Verb x='To live' /> is <Verb x="to love" />.</p>
          <p className="example">The object of the game is <Verb x="to win" />.</p>
          <p>An infinitive acting like a noun can be modified by adverbs or
          prepositional phrases just like any other verb. (Such a group
            of words is called an "infinitive phrase".)</p>
          <p className="example"><Verb x='To win' /> <Prep x="at" /> <Noun x="chess" /> takes skill.</p>
          <p className="example">Owls like <Verb x="to sleep" /> <Adv x="regularly" />.</p>
          <h4>Past participles as nouns</h4>
          <p>Sometimes people will use a past participle as a noun. When this
          happens, it is generally refers to some group with that characteristic,
          but the actual word for the group has been omitted.</p>
          <p className="example"><Adj x="The" /> <Verb x='dead' /> have risen from their graves!</p>
          <p className="example"><Adj x="My" /> <Verb x='beloved' /> is meeting me at sunset.</p>
          <p>In these cases, the past participle is being used as an adjective, but
          the noun it's modifying must be understood from context.
          One must simply understand that <span className="sBG"><Adj x="my" />&nbsp;<Verb x="beloved" />
            </span> means <span className="sBG"><Adj x="my" />&nbsp;<Verb x="beloved" />&nbsp;<Noun x="person" /></span>.</p>
          <p>Two more details to note about this usage: the past participle is treated as a
          singular, specific noun, so it is used with the article "the"; and it
          can be modified with an adjective
          i.e. <span className="sBG"><Adj x="the" />&nbsp;<Adj x="grateful" />&nbsp;<Verb x="dead" />
            </span> or an adverb <span className="sBG"><Adj x="the" />&nbsp;<Adj x="recently" />&nbsp;<Verb x="dead" /></span>.</p>
          <h4>Present participles as nouns (gerunds)</h4>
          <p>It is very common to use the <i>-ing</i> form of a verb as a noun
          to refer to the act itself.</p>
          <p className="example"><Verb x='Swimming' /> is great exercise.</p>
          <p className="example"><Verb x='Laughing' /> during funerals is considered rude.</p>
          <p className="example">I love <Verb x='cooking' />.</p>
          <p>Gerunds (present participles acting like nouns) can be modified by
          adjectives like nouns <span className="sBG"><Adj x="the" />&nbsp;<Adj x="wild" />&nbsp;<Verb x="dancing" />
            </span> or by adverbs like verbs <span className="sBG"><Adv x="quietly" />&nbsp;<Verb x="working" /></span></p>
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