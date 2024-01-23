import Head from "next/head";
import SiteHeader from "../components/siteHeader";
import SiteFooter from "../components/siteFooter";
import TypeButtonDiv from "../components/typeButtonDiv";
import YouTubeVid from "../components/youTubeVid";
import Fold from "../components/fold";
import MyHeadStuff from "../components/myHeadStuff";
import {
  Adj,
  Noun,
  Punc,
  Conj,
  Verb,
  Pron,
} from "../components/elementAliases";

const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Adjectives" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">Adjectives</h2>
        <p className="description">
          Adjectives are used before nouns or pronouns. Adjectives "modify"
          nouns, which means they give extra information about the word they're
          attached to.
        </p>
      </div>
      <div className="content">
        <Fold
          title={<h3>How to use adjectives in details</h3>}
          content={
            <>
              <h4>With nouns</h4>
              <p>
                Consider the sentence, "I'm scared of bears". You can change
                that sentence by adding an adjective before the noun "bears".
                Any adjective would work—red, angry, Italian, wet. Choose one
                that makes sense to you.
              </p>
              <p className="example">
                I'm scared of <Adj x="mechanical" /> <Noun x="bears" />.
              </p>
              <h4>With pronouns</h4>
              <p>
                Adjectives can also be used with pronouns:{" "}
                <span className="sBG">
                  <Pron x="He" />
                  &nbsp;
                  <Verb x="was" />
                  &nbsp;
                  <Adj x="sad" />
                </span>
                , or{" "}
                <span className="sBG">
                  <Pron x="I" />
                  &nbsp;
                  <Verb x="ate" />
                  &nbsp;
                  <Adj x="very" />
                  &nbsp;
                  <Pron x="few" />
                </span>
                , or{" "}
              </p>
              <p className="example">
                Everyone is tired of hearing about <Adj x="foolish" />{" "}
                <Pron x="me" /> and my adventures.
              </p>
              <p>
                Be careful though when using adjectives with pronouns. They
                usually cannot be used directly before a pronoun, like{" "}
                <span className="sBG">
                  ❌ <Adj x="big" /> <Noun x="he" />
                </span>
                . They can sometimes be used after indefinite pronouns:
                <span className="sBG">
                  <Pron x="Somebody" /> <Adj x="special " />{" "}
                  <Punc x="asked about you." />
                </span>
              </p>
              <h4>With (some) verb forms</h4>
              <p>
                Some verb forms—notably the <i>-ing</i> form—can be used as
                nouns. When they are, they can be modified with adjectives.
              </p>
              <p className="example">
                Karen's <Adj x="constant" /> <Verb x="drinking" /> made the
                office an unpleasant place to work.
              </p>
            </>
          }
        />
        <Fold
          title={<h3>Using more than one adjective</h3>}
          content={
            <>
              <p>
                When using more than one adjective with a noun, there are two
                things to remember. First, you have to use adjectives in a
                certain order. You can say{" "}
                <span className="sBG">
                  <Adj x="a" />
                  &nbsp;
                  <Adj x="dirty" />
                  <Punc x="," />
                  &nbsp;
                  <Adj x="red" />
                  &nbsp;
                  <Noun x="car" />
                </span>
                &nbsp; but not{" "}
                <span className="sBG">
                  ❌ <Adj x="a" />
                  &nbsp;
                  <Adj x="red" />
                  <Punc x="," />
                  &nbsp;
                  <Adj x="dirty" />
                  &nbsp;
                  <Noun x="car" />
                </span>
                . The "order of adjectives" rules are tricky, and too
                complicated to discuss here, but as a general rule the adjective
                that is most closely linked with the identity of the noun goes
                closest to it. Being "red" is more a defining characteristic of
                the car than being "dirty", so "red" goes closer to "car".
              </p>
              <p>
                The second thing to remember is that you need to put commas
                between the separate adjectives, unless the adjective helps to
                define what type the noun is. So, although we would write{" "}
                <span className="sBG">
                  <Adj x="a" />
                  &nbsp;
                  <Adj x="long" />
                  <Punc x="," />
                  &nbsp;
                  <Adj x="hot" />
                  &nbsp;
                  <Noun x="night" />
                </span>
                —with commas between "long" and "hot"—we would write{" "}
                <span className="sBG">
                  <Adj x="a" />
                  &nbsp;
                  <Adj x="long" />
                  <Punc x="," />
                  &nbsp;
                  <Adj x="hot" />
                  &nbsp;
                  <Adj x="summer" />
                  &nbsp;
                  <Noun x="night" />
                </span>
                . There's no comma between "hot" and "summer", because although
                they're both adjectives, "summer" tells what type of night we're
                talking about, so it's almost closer to being part of the noun
                than an independent adjective.
              </p>
            </>
          }
        />
        <Fold
          title={<h3>Using nouns as adjectives</h3>}
          content={
            <>
              <p>
                One fact to remember about Engish is that sometimes the same
                word can be used in different ways. For example, "French" can
                refer to the people of France, or it can be an adjective that
                refers to things from or related to France. When in doubt about
                what type a word is,&nbsp;
                <a href="https://www.merriam-webster.com/dictionary/French">
                  check the dictionary
                </a>
                . In fact, <abbr title="Always Check The Dictionary">ACTD</abbr>
                .
              </p>
              <p>
                Based on this, one might wonder whether it's okay to use a noun
                card as an adjective. Well, you can do it—the game won't prevent
                you—but you probably shouldn't. Other people who see it might
                consider it a mistake, and it does sort of go against the spirit
                of the game. If you have a noun card, the challenge is to use it
                as a noun, not repurpose it as an adjective. But, you shouldn't
                let this "rule" interfere with your creativity. For example,
                assume we have this sentence:
              </p>
              <p className="example">
                The <Adj x="Russian" /> <Noun x="bears" /> were fighting.
              </p>
              <p>
                We could change it by adding a conjunction and an article
                (adjective):
              </p>
              <p className="example">
                The <Adj x="Russian" /> <Conj x="and" /> <Adj x="the" />{" "}
                <Noun x="bears" /> were fighting.
              </p>
              <p>
                That's a clever and creative way to use a conjunction and an
                adjective at the same time, and we shouldn't let some
                technicality (the color of "Russian" indicates it's an
                adjective, but now it's functioning as a noun) stop us.
              </p>
              <p>
                Another way in which a noun can be used as an adjective is when
                we use its possessive form:
              </p>
              <p className="example">
                <Noun x="Bob's" /> <Noun x="uncle" /> is an archeologist.
              </p>
              <p>
                As you can see from the color of "Bob's", it is still considered
                a noun, even though it's acting like an adjective (it gives an
                extra detail about the noun "uncle"—whose uncle? Bob's.)
              </p>
            </>
          }
        />
      </div>
      <div className="sidebar">
        <TypeButtonDiv />
      </div>
    </main>
    <SiteFooter />
    <style jsx>{`
      a,
      a:visited {
        color: black;
        text-decoration: underline;
      }
      a:hover,
      a:active {
        color: black;
      }
    `}</style>
  </div>
);

export default ThisPage;
