import Head from "next/head";
import SiteHeader from "../components/siteHeader";
import SiteFooter from "../components/siteFooter";
import TypeButtonDiv from "../components/typeButtonDiv";
import YouTubeVid from "../components/youTubeVid";
import Fold from "../components/fold";
import MyHeadStuff from "../components/myHeadStuff";
import { Adv, Conj, Verb, Adj, Pron, Noun } from "../components/elementAliases";

const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Adverbs" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">Adverbs</h2>
        <p className="description">
          Adverbs are words that modify verbs, adjectives and other adverbs. We
          use adverbs to express the relative scale / intensity / quality of
          something. Example:{" "}
        </p>
        <p className="example">
          My cat is <Adj x="evil" />.
        </p>
        <p>
          "<i>How</i> evil is your cat?"
        </p>
        <p className="example">
          My cat is <Adv x="very" /> <Adj x="evil" />.
        </p>
      </div>
      <div className="content">
        <Fold
          title={<h3>Using adverbs in details</h3>}
          content={
            <>
              <p>
                In the real world, adverbs are extremely common in spoken
                speech, but in writing it is considered bad style to use too
                many of them. When you write, you should try to avoid
                unnecessary adverbs. But when people talk, they use them
                constantly!<sup>1</sup>&nbsp; In details, you can use an adverb
                on its own or together with the word it's modifying.
              </p>
              <p className="example">
                <Adv x="Even" /> my brother <Adv x="very rarely" /> puts{" "}
                <Adv x="so" /> much sugar in his tea.
              </p>
              <p>
                In the previous example, "Even" adds emphasis to "my" (a
                possessive adjective), "rarely" tells <i>how</i> he puts _____
                (adverb modifying a verb), "very" modifies "rarely" (adverb
                modifying adverb: how rarely? very), and "so" gives a sense of
                scale to the adjective "much".
              </p>
            </>
          }
        />
        <Fold
          title={<h3>The five types of adverbs</h3>}
          content={
            <>
              <p>
                Adverbs (and adverb phrases) add details to a sentence by
                providing answers to five possible questions: <b>how</b>,{" "}
                <b>when</b>, <b>where</b>, <b>how much</b> and <b>how often</b>.
                Adverbs are grouped based on which question they answer.
              </p>
              <h4>How? Adverbs of manner</h4>
              <p className="example">
                I <Verb x="ate" /> my dinner <Adv x="quickly" />.
              </p>
              <p className="example">
                The werewolf <Adv x="silently" /> <Verb x="stalked" /> his
                victim.
              </p>
              <h4>When? Adverbs of time</h4>
              <p className="example">
                Carol <Adv x="recently" /> <Verb x="visited" /> Barcelona.
              </p>
              <p className="example">
                My daughter <Adv x="eventually" /> <Verb x="got up" /> and
                washed the dishes.
              </p>
              <h4>Where? Adverbs of place</h4>
              <p className="example">
                Olya <Verb x="ate" /> her lunch <Adv x="outside" />.
              </p>
              <p className="example">
                The lizard people <Verb x="are" /> <Adv x="everywhere" />.
              </p>
              <p className="example">
                <Verb x="Come" /> <Adv x="here" />!
              </p>
              <h4>How much? To what extent? Adverbs of degree</h4>
              <p className="example">
                The lawyers <Verb x="were" /> <Adv x="very" />{" "}
                <Adj x="unhappy" />.
              </p>
              <p className="example">
                The penguins <Adv x="completely" /> <Verb x="ruined" /> my
                dinner party.
              </p>
              <p className="example">
                The detectives <Verb x="solved" /> the crime <Adv x="quite" />{" "}
                <Adv x="quickly" />.
              </p>
              <h4>How often? Adverbs of frequency</h4>
              <p className="example">
                Cats <Adv x="sometimes" /> <Verb x="follow" /> me home.
              </p>
              <p className="example">
                Lisa <Adv x="rarely" /> <Verb x="drinks" /> champagne.
              </p>
              <p className="example">
                Insects <Verb x="are" /> <Adv x="constantly" />{" "}
                <Verb x="biting" /> me!
              </p>
            </>
          }
        />
        <Fold
          title={<h3>Adverbs with verbs</h3>}
          content={
            <>
              <p>
                The most basic use of adverbs is to modify verbs, so a good
                strategy in details when you have an adverb card and a verb card
                is to try to place them in the sentence together. For example,
                if I have the sentence
              </p>
              <p className="example">Fat babies like cake.</p>I could add add
              the adverb and verb combination{" "}
              <span className="sBG">
                <Adv x="occasionally" /> <Verb x="eating" />
              </span>
              :
              <p className="example">
                Fat babies like <Adv x="occasionally" /> <Verb x="eating" />{" "}
                cake.
              </p>
            </>
          }
        />
        <Fold
          title={<h3>Adverbs with adjectives</h3>}
          content={
            <>
              <p>
                Adverbs are regulary used to modify adjectives.{" "}
                <span className="sBG">
                  <Adv x="very" />
                  &nbsp;
                  <Adj x="ugly" />
                </span>{" "}
                <span className="sBG">
                  <Adv x="not" />
                  &nbsp;
                  <Adj x="bad" />
                </span>{" "}
                <span className="sBG">
                  <Adv x="obviously" />
                  &nbsp;
                  <Adj x="fake" />
                </span>{" "}
                <span className="sBG">
                  <Adv x="stunningly" />
                  &nbsp;
                  <Adj x="beautiful" />
                </span>
                .
              </p>
            </>
          }
        />
        <Fold
          title={<h3>Adverbs with adverbs!</h3>}
          content={
            <>
              <p>
                Adverbs less commonly modify other adverbs.{" "}
                <span className="sBG">
                  <Adv x="almost" />
                  &nbsp;
                  <Adv x="completely" />
                </span>{" "}
                <span className="sBG">
                  <Adv x="very" />
                  &nbsp;
                  <Adv x="eagerly" />
                </span>{" "}
                <span className="sBG">
                  <Adv x="quite" />
                  &nbsp;
                  <Adv x="suddenly" />
                </span>{" "}
                <span className="sBG">
                  <Adv x="surprisingly" />
                  &nbsp;
                  <Adv x="well" />
                </span>
                .
              </p>
            </>
          }
        />
        <Fold
          title={<h3>Adverbs acting like conjunctions!</h3>}
          content={
            <>
              <p>
                Some adverbs can perform the job of a conjunction (joining a
                clause to a sentence). Appropriately enough, these are called
                "conjunctive adverbs". When used this way, the clause introduced
                by the adverb still adds a "detail" to some other part of the
                sentence. Example:
              </p>
              <p className="example">
                <Pron x="I" /> <Verb x="love" /> <Pron x="you" />{" "}
                <Adv x="like" /> <Noun x="bears" /> <Verb x="love" />{" "}
                <Noun x="honey" />.
              </p>
              <p>
                The adverb "like" is adding a detail to the base sentence, it
                tells "how much" I love her (as much as bears love honey).
              </p>
              <p>
                Conjunctive adverbs also sometimes work in as a pair with a
                conjunction or another adverb, such as <b>if-then</b>,{" "}
                <b>where-there</b> and <b>as-so</b>.
              </p>
              <p className="example">
                <Conj x="If" /> <Pron x="you" /> <Verb x="are" />{" "}
                <Adj x="right" /> <Adv x="then" /> <Pron x="we" />{" "}
                <Verb x="are" /> <Adj x="doomed" />.
              </p>
            </>
          }
        />
        <Fold
          title={<h3>"Not" is free with verbs</h3>}
          content={
            <>
              <p>
                When using a verb, sometimes we want to use the negative form of
                it. This usually means just adding the adverb "not".
              </p>
              <p className="example">
                The dog <Verb x="is" /> <Adv x="not" /> <Verb x="barking" />.
              </p>
              <p>
                In order to make it easier for players to use negative verbs,
                "not" can be added to any verb card, in the same way that
                articles can be freely added to noun (or adjective, adverb or
                verb) cards. For example, if we have the sentence
              </p>
              <p className="example">
                <Pron x="I" /> <Verb x="am" />!
              </p>
              <p>
                and we have a verb card and a noun card, we could write{" "}
                <span className="cVerb">not eating</span> and{" "}
                <span className="cNoun">the dog</span>, and details will insert
                it correctly into the sentence:
              </p>
              <p className="example">
                <Pron x="I" /> <Verb x="am" /> <Adv x="not" />{" "}
                <Verb x="eating" /> <Adj x="the" /> <Noun x="dog" />!
              </p>
            </>
          }
        />
        <p>
          <sup>1</sup>Adverbs are often not used literally. People use them for
          emphasis, and sometimes people exaggerate.
        </p>
        <p className="example">
          I am <Adv x="so" /> happy for you!
        </p>
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
