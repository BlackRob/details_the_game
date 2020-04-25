import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import MyHeadStuff from '../components/myHeadStuff'
import { Conj, Noun, Verb, Adj, Adv, Pron, Prep, Punc } from '../components/elementAliases'


const About = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="About" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          About this...
        </h2>
        <p className="description">
          "Grumbly Games" was created to promote the game "details". details is
          a sentence-building game that tries to make learning grammar fun: it's based
          on the simple observation that one of the main differences between
          native and second-language speakers is that native speakers
          use longer sentences. So, how to make long sentences? Easy. You start with
          a short sentence and add more details.
        </p>
        <YouTubeVid vidID="Irvcf6dCk-k" caption="placeholder video" />
      </div>
      <div className="content">
        <h3>An example</h3>
        <p>Details add information to a sentence. For example, take the sentence</p>
        <p className="example"><Adj x="The" /> <Noun x="dog" /> <Verb x='is' />&nbsp;
        <Adj x="hungry" /><Punc x="." /></p>
        <p>The speaker is telling the listener something, providing the listener with
        information. Now, suppose there are two dogs, a brown one and a green one.
        Maybe only one of them is hungry; the speaker can express this by adding
        a detail:</p>
        <p className="example"><Adj x="The" /> <Adj x="green" /> <Noun x="dog" />&nbsp;
        <Verb x='is' /> <Adj x="hungry" /><Punc x="." /></p>
        <p>The adjective "green" provides extra information: it answers the question,
        "Which dog is hungry?"</p>
        <p>Perhaps the green dog feels something in addition to hunger, and we want to share that fact.
        No problem, just add another detail:</p>
        <p className="example"><Adj x="The" /> <Adj x="green" /> <Noun x="dog" />&nbsp;
        <Verb x='is' />&nbsp;<Adj x="hungry" />&nbsp;<Conj x="and" />&nbsp;<Adj x="sad" /><Punc x="." /></p>
        <p>Perhaps we also want to say something about the brown dog:</p>
        <p className="example"><Adj x="The" /> <Adj x="green" /> <Noun x="dog" />&nbsp;
        <Verb x='is' /> <Adj x="hungry" /> <Conj x="and" /> <Adj x="sad" />&nbsp;
        <Conj x="but" /> <Adj x="the" /> <Adj x="brown" /> <Noun x="dog" />&nbsp;
        <Verb x='is' /> <Adj x="happy" /><Punc x="." /></p>
        <p>And maybe this situation we're describing is only true sometimes:</p>
        <p className="example"><Prep x='At' /> <Noun x="sunrise" /><Punc x="," />&nbsp;
        <Adj x="the" /> <Adj x="green" /> <Noun x="dog" /> <Verb x='is' /> <Adj x="hungry" />&nbsp;
        <Conj x="and" /> <Adj x="sad" /> <Conj x="but" /> <Adj x="the" />&nbsp;
        <Adj x="brown" /> <Noun x="dog" /> <Verb x='is' /> <Adj x="happy" /><Punc x="." /></p>
        <p>We can go on and on, making the sentence longer and longer just by adding details.</p>

        <h3>details is about sharing</h3>
        <p>
          Playing details and making long sentences is fun and cool, but you know what's cooler?
          Sharing! details was designed to make it easy to play with other people. All you have to do
          is click the "share" button while you're playing. A popup will open that will let
          you share your sentence on various social media platforms. Anyone who sees it
          can click on the screenshot and start playing the game. In fact, you can click on the
          image below and add more details to this sentence.
        </p>
        <figure>
          <a href="/details/1vAt~2zsunrise~3a~4xthe~5xgreen~6zdog~7yis~8xhungry~9uand~10xsad~11ubut~12xthe~13xbrown~14zdog~15yis~16xhappy~17f~~0t~1y~2u~3v~4z">
            <img src="/greenandbrown.png"></img>
            <figcaption>click to play!</figcaption>
          </a>
        </figure>
      </div>
      <div className="sidebar">
        <TypeButtonDiv />
      </div>

    </main>
    <SiteFooter />

    <style jsx>{`
    `}</style>
  </div>
)

export default About;
