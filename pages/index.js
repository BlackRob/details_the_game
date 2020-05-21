import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import MyHeadStuff from '../components/myHeadStuff'
import { Adj, Noun, Conj, Punc } from '../components/elementAliases'


const Home = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Grumbly Games" />
    </Head>

    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Hi! Hello! Welcome!
        </h2>
        <p className="description">
          This site is intended to help you learn English grammar
          by playing games. Right now, we only have one game, "details".
          In details you make a long sentence by adding details to a
          shorter sentence, then share it with your friends.
          Try it. It's fun!
        </p>
      </div>
      <div className="content">
        <section>
          <h3>How to play details</h3>
          <p>details is easy! When you start a game, you get a new sentence and
          five cards. Each card corresponds to one of the eight types of words
          in English (nouns, verbs, etc.). To play, think of words or phrases
          that you could add to the sentence by using one or more of your cards.
          Every time you add words to the sentence you get one more card.
          If you use all your cards, you win! The following video shows the basics
          of the game: (note: this is a placeholder video)
          </p>
          <YouTubeVid vidID="HD0eam6fuJ4" caption="placeholder video" />
        </section>
        <section>
          <h3>The rules of details</h3>
          <p>details doesn't really have a lot of rules, you can play it however you
            want. <i>But</i> there are some facts you should know to make your game more fun.
          </p>
          <ul>
            <li><b>You can't change anything that's already written.</b></li>
            <li>
              <b>You get articles for free.</b> This means if you want to add a noun,
              "vinegar" for example, you can write <span className="cNoun">
                the&nbsp;vinegar</span> or <span className="cNoun">a&nbsp;vinegar</span> on
              the noun card, and the game will automatically separate it
              into <span className="sBG"><Adj x="the" />&nbsp;<Noun x="vinegar" /></span>
            </li>
            <li>
              <b>You can also add articles to adjective cards.</b> For example, to add an
              adjective and a noun, "the red wolf" for example, write <span className="cAdj">
                the red</span> on the adjective card and <span className="cNoun">wolf</span> on
              the noun card to get <span className="sBG"><Adj x="the" />&nbsp;<Adj x="red" />&nbsp;<Noun x="wolf" /></span>
            </li>
            <li>
              <b>You are responsible for punctutation.</b> If you want to add another
              noun between <span className="sBG"><Noun x="aliens" />&nbsp;<Conj x="and" />&nbsp;<Noun x="ninjas" /></span>,
              you have to put the comma on the noun card before you place it in the sentence.
              Thus, adding <span className="cNoun">,&nbsp;vampires</span> to your sentence gives
              you <span className="sBG"><Noun x="aliens" /><Punc x="," />&nbsp;<Noun x="vampires" />&nbsp;<Conj x="and" />&nbsp;<Noun x="ninjas" /></span>
            </li>
            <li>
              <b>details doesn't check spelling or grammar.</b> Just like in life,
              you are responsible for your own mistakes
            </li>
            <li>
              There are two goals when playing details: <b>use up all your word cards
              </b> and <b>make a cool and grammatically correct sentence</b>
            </li>
            <li>
              <b>You can add new sentences before or after the original sentence</b>
            </li>
            <li>
              Every time you add to the sentence, you get a new word card,
              but <b>if you use all your cards you win!</b>
            </li>
          </ul>
        </section>
      </div>
      <div className="sidebar">
        <TypeButtonDiv />
      </div>
    </main>

    <SiteFooter />

    <style jsx>{`
      li {
        margin: 10px 0px;
      }
    `}</style>

  </div>
)

export default Home
