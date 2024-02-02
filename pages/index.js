import Head from "next/head";
import SiteHeader from "../components/siteHeader";
import SiteFooter from "../components/siteFooter";
import TypeButtonDiv from "../components/typeButtonDiv";
import YouTubeVid from "../components/youTubeVid";
import MyHeadStuff from "../components/myHeadStuff";
import { Adj, Noun, Conj, Punc, Verb, Adv } from "../components/elementAliases";

const Home = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Grumbly Games" />
    </Head>

    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">Welcome to Grumbly Games!</h2>
        <p className="description">
          This site is meant to help you learn English grammar by playing games.
          Right now, there's only one game, "details", but there might be more
          in the future. In details, you make a long sentence by adding details
          to a shorter sentence, then share it with your friends or your teacher
          or study group. Try it, it's fun!
        </p>
        <p className="description">
          Although details is meant for students and people who like word games,
          many of the articles on this site are meant for English teachers.
          They're mostly on odd grammar points or suggest fun activities for a
          class. Use them or share them, they're free.
        </p>
      </div>

      <div className="content">
        <h3>How to get details</h3>
        <p>
          Good news, you don't have to get anything, you can play details right
          here, just click the button at the top of the screen. But there is an
          app version, and it's better. So if you want to play on a mobile
          device, get the app.
        </p>
        <p>
          <a
            href="https://play.google.com/store/apps/details?id=com.details_reactnative"
            rel="noopener noreferrer"
            target="_blank"
            alt="google play store page for details the game"
          >
            Link to "details the game" in Google Play store,
          </a>
        </p>
        <p>
          <a
            href="https://apps.apple.com/us/app/details-the-game/id6449182298"
            rel="noopener noreferrer"
            target="_blank"
            alt="apple store page for details the game"
          >
            Link to "details the game" in Apple App store,
          </a>
        </p>
        <h3>How to play details</h3>
        <p>
          details is easy! When you start a game, you get a new sentence and
          five cards. Each card corresponds to one of the{" "}
          <b>eight types of words in English</b> (nouns, verbs, etc.). To play,
          think of words or phrases that you could add to the sentence by using
          one or more of your cards. Every time you add words to the sentence
          you get one more card. If you use all your cards, you win!
        </p>
        <p>
          Here's a short video that shows how to play details (web version).{" "}
        </p>

        <YouTubeVid vidID="8qAy85pGBKs" caption=" " />

        <h3>The rules of details</h3>
        <p>
          details doesn't really have a lot of rules, you can play it however
          you want. <i>But</i> there are some facts you should know to make your
          game more fun.
        </p>
        <ul>
          <li>
            <b>You can't change anything that's already written.</b>
          </li>
          <li>
            <b>You get articles for free.</b> This means if you want to add a
            noun, "vinegar" for example, you can write{" "}
            <span className="cNoun">the&nbsp;vinegar</span> or{" "}
            <span className="cNoun">a&nbsp;vinegar</span> on the noun card, and
            the game will automatically separate it into{" "}
            <span className="sBG">
              <Adj x="the" />
              &nbsp;
              <Noun x="vinegar" />
            </span>
            .
          </li>
          <li>
            <b>
              You can also add articles to adjective, adverb and verb cards.
            </b>{" "}
            Although these words don't need articles, when you want to add a
            noun and an adjective at the same time the adjective goes between
            the noun and the article. To add "the red wolf" to a sentence, write{" "}
            <span className="cAdj">the red</span> on the adjective card and{" "}
            <span className="cNoun">wolf</span> on the noun card to get{" "}
            <span className="sBG">
              <Adj x="the" />
              &nbsp;
              <Adj x="red" />
              &nbsp;
              <Noun x="wolf" />
            </span>
            . In the same way, you might want to write{" "}
            <span className="sBG">
              <Adj x="the" />
              &nbsp;
              <Verb x="howling" />
              &nbsp;
              <Noun x="wolf" />
            </span>{" "}
            or{" "}
            <span className="sBG">
              <Adj x="the" />
              &nbsp;
              <Adv x="very" />
              &nbsp;
              <Adj x="angry" />
              &nbsp;
              <Noun x="wolf" />
            </span>
            .
          </li>
          <li>
            <b>You get the adverb "not" for free.</b> This means if you want to
            use the negative form of a verb you can, you don't need a separate
            adverb card. So to write "is not" , you just write{" "}
            <span className="cVerb">is&nbsp;not</span> on the verb card, and the
            game will automatically separate it into{" "}
            <span className="sBG">
              <Verb x="is" />
              &nbsp;
              <Adv x="not" />
            </span>
            .
          </li>
          <li>
            <b>You are responsible for punctuation.</b> If you want to add
            another noun between{" "}
            <span className="sBG">
              <Noun x="aliens" />
              &nbsp;
              <Conj x="and" />
              &nbsp;
              <Noun x="ninjas" />
            </span>
            , you have to put the comma on the noun card before you place it in
            the sentence. Thus, adding{" "}
            <span className="cNoun">,&nbsp;vampires</span> to your sentence
            gives you{" "}
            <span className="sBG">
              <Noun x="aliens" />
              <Punc x="," />
              &nbsp;
              <Noun x="vampires" />
              &nbsp;
              <Conj x="and" />
              &nbsp;
              <Noun x="ninjas" />
            </span>
          </li>
          <li>
            <b>details doesn't check spelling or grammar.</b> Just like in life,
            you are responsible for your own mistakes.
          </li>
          <li>
            There are two goals when playing details:{" "}
            <b>use up all your word cards</b> and{" "}
            <b>make a cool and grammatically correct sentence</b>.
          </li>
          <li>
            <b>
              You can add new sentences before or after the original sentence
            </b>
            .
          </li>
          <li>
            Every time you add to the sentence, you get a new word card, but{" "}
            <b>if you use all your cards you win!</b>
          </li>
        </ul>
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
);

export default Home;
