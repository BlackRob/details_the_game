import Head from "next/head";
import SiteHeader from "../components/siteHeader";
import SiteFooter from "../components/siteFooter";
import TypeButtonDiv from "../components/typeButtonDiv";
import YouTubeVid from "../components/youTubeVid";
import MyHeadStuff from "../components/myHeadStuff";
import {
  Conj,
  Noun,
  Verb,
  Adj,
  Adv,
  Pron,
  Prep,
  Punc,
} from "../components/elementAliases";

const About = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="About" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">About Grumbly Games</h2>
        <p className="description">
          "Grumbly Games" was created to share and promote the game "details"
          and provide a simple explanation of some tricky points of grammar.
          It's not really a game company, but we have some ideas for other
          fun/educational language learning games. Maybe we'll make them some
          day.
        </p>
        <p>
          Grumbly Games was created by Robert Austin ("We"). He's mostly a
          writer, and has a portfolio&nbsp;
          <a
            href="https://robert.grumbly.games/"
            rel="noopener noreferrer"
            target="_blank"
            alt="Robert Austin's portfolio"
          >
            here
          </a>
        </p>
        <h2 className="title">About details</h2>
        <p className="description">
          "details" is a sentence-building game that tries to make learning
          grammar fun: it's based on the simple observation that one of the main
          differences between native and second-language speakers is that native
          speakers use longer sentences. So, how to make long sentences? Easy.
          You start with a short sentence and add details.
        </p>
        <p className="description">
          You can play details right here, using the button at the top right
          corner of the header, but there's also a version available in the
          Apple app store and in the Google Play store. The app and web versions
          aren't the same: the app versions are newer and more refined, but the
          web version works well, and has some features that make it better for
          use in a classroom.
        </p>
      </div>
      <div className="content">
        <h3>An example of how to play details</h3>
        <p>
          Details add information to a sentence. For example, take the sentence
        </p>
        <p className="example">
          <Adj x="The" /> <Noun x="dog" /> <Verb x="is" />
          &nbsp;
          <Adj x="hungry" />
          <Punc x="." />
        </p>
        <p>
          The speaker is telling the listener something, providing the listener
          with information. Now, suppose there are two dogs, a brown one and a
          green one. Maybe only one of them is hungry; the speaker can express
          this by adding a detail:
        </p>
        <p className="example">
          <Adj x="The" /> <Adj x="green" /> <Noun x="dog" />
          &nbsp;
          <Verb x="is" /> <Adj x="hungry" />
          <Punc x="." />
        </p>
        <p>
          The adjective "green" provides extra information: it answers the
          question, "Which dog is hungry?"
        </p>
        <p>
          Perhaps the green dog feels something in addition to hunger, and we
          want to share that fact. No problem, just add another detail:
        </p>
        <p className="example">
          <Adj x="The" /> <Adj x="green" /> <Noun x="dog" />
          &nbsp;
          <Verb x="is" />
          &nbsp;
          <Adj x="hungry" />
          &nbsp;
          <Conj x="and" />
          &nbsp;
          <Adj x="sad" />
          <Punc x="." />
        </p>
        <p>Let's also want to say something about the brown dog:</p>
        <p className="example">
          <Adj x="The" /> <Adj x="green" /> <Noun x="dog" />
          &nbsp;
          <Verb x="is" /> <Adj x="hungry" /> <Conj x="and" /> <Adj x="sad" />
          &nbsp;
          <Conj x="but" /> <Adj x="the" /> <Adj x="brown" /> <Noun x="dog" />
          &nbsp;
          <Verb x="is" /> <Adj x="happy" />
          <Punc x="." />
        </p>
        <p>And maybe this situation we're describing is only true sometimes:</p>
        <p className="example">
          <Prep x="At" /> <Noun x="sunrise" />
          <Punc x="," />
          &nbsp;
          <Adj x="the" /> <Adj x="green" /> <Noun x="dog" /> <Verb x="is" />{" "}
          <Adj x="hungry" />
          &nbsp;
          <Conj x="and" /> <Adj x="sad" /> <Conj x="but" /> <Adj x="the" />
          &nbsp;
          <Adj x="brown" /> <Noun x="dog" /> <Verb x="is" /> <Adj x="happy" />
          <Punc x="." />
        </p>
        <p>
          We can go on and on, making the sentence longer and longer just by
          adding details.
        </p>

        <h3>details is about sharing</h3>
        <p>
          Playing details and making long sentences is fun and cool, but you
          know what's cooler? Sharing! details was designed to make it easy to
          share your sentences. In the app version, you can easily share images
          or a video of your sentence. It uses the built-in sharing
          functionality in iOS and Android, so it works as you would expect.
        </p>
        <p>
          {" "}
          The web version here is a little different. It let's you share an
          image of the game state and a link of an active game, and anyone with
          the link can continue to play it. This doesn't impact your game: it's
          a branch. All you have to do is click the "share" button while you're
          playing. A popup will open that will let you share your sentence on
          various social media platforms. Anyone who sees it can click on the
          screenshot (or link, depending on the platform) and start playing the
          game. In fact, you can click on the image below and add more details
          to this sentence.
        </p>
        <figure>
          <a
            href="https://details.grumbly.games/MXZBdH4yenN1bnJpc2V+M2F+NHh0aGV+NXhncmVlbn42emRvZ343eWlzfjh4aHVuZ3J5fjl1YW5kfjEweHNhZH4xMXVidXR+MTJ4dGhlfjEzeGJyb3dufjE0emRvZ34xNXlpc34xNnhoYXBweX4xN2Z+fjB0fjF5fjJ1fjN2fjR6"
            rel="noopener noreferrer"
            target="_blank"
            alt="click to play"
          >
            <img src="/greenandbrown.png"></img>
            <figcaption>click to play!</figcaption>
          </a>
        </figure>

        <h3>Privacy Policy</h3>
        <p>
          details doesn't require an account, and it doesn't store or transmit
          user data. You can view the game's full privacy statement at{" "}
          <a
            href="https://grumbly.games/privacypolicy"
            rel="noopener noreferrer"
            target="_blank"
            alt="privacy policy for details the game"
          >
            https://grumbly.games/privacypolicy
          </a>
          .
        </p>
      </div>
      <div className="sidebar">
        <TypeButtonDiv />
      </div>
    </main>
    <SiteFooter />

    <style jsx>{``}</style>
  </div>
);

export default About;
