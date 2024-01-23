import Head from "next/head";
import SiteHeader from "../components/siteHeader";
import SiteFooter from "../components/siteFooter";
import TypeButtonDiv from "../components/typeButtonDiv";
import YouTubeVid from "../components/youTubeVid";
import Fold from "../components/fold";
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

const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Conjunctions" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">Conjunctions</h2>
        <p className="description">
          Conjunctions join two words, phrases or clauses. Everyone knows the
          simple conjunctions like "and", "but" and "or", but there are actually
          many more. These conjunctions allow us to make complex sentences and
          express relationships between different facts. For example, a person
          could say, "Tom likes Sally" and "Sally makes him laugh". These are
          two separate sentences. If we combine them with a conjunction, though,
          we can give extra information to the listener:
        </p>
        <p className="example">
          Tom likes Sally <Conj x="because" /> Sally makes him laugh.
        </p>
        <p>
          The facts are no longer separate: the listener now knows that one fact
          explains the other. Now we know <i>why</i> Tom likes Sally.
        </p>
      </div>
      <div className="content">
        <Fold
          title={<h3>Different ways to use conjunctions</h3>}
          content={
            <>
              <p>
                Conjunctions are part of several named grammatical
                constructions: "compounds", relative clauses, <i>et cetera</i>.
                It's important to be familiar with all of them, because
                conjunctions are essential to making complex sentences.{" "}
              </p>
            </>
          }
        />
        <Fold
          title={<h3>"Compound" word phrases</h3>}
          content={
            <>
              <p>
                "Compound subjects" are subjects made up of more than one noun:
              </p>
              <p className="example">
                The <Noun x="King" />
                &nbsp;
                <Conj x="and" />
                &nbsp;
                <Noun x="Queen" /> laughed at me.
              </p>
              <p>"Compound predicates" have more than one verb:</p>
              <p className="example">
                The aliens <Verb x="pointed" />
                &nbsp;
                <Conj x="and" />
                &nbsp;
                <Verb x="laughed" /> at me.
              </p>
              <p>
                "Compound adjectives" are made up of more than one adjective:
              </p>
              <p className="example">
                My <Adj x="mean" />
                &nbsp;
                <Conj x="and" />
                &nbsp;
                <Adj x="stupid" /> sister laughed at me.
              </p>
              <p>"Compound adverbs" are made up of more than one adverb:</p>
              <p className="example">
                Victoria <Adv x="cruelly" />
                &nbsp;
                <Conj x="and" />
                &nbsp;
                <Adv x="mercilessly" /> laughed at me.
              </p>
              <p>
                I think the pattern is clear by now, but there are also compound
                pronouns like{" "}
                <span className="sBG">
                  <Pron x="him" />
                  &nbsp;
                  <Conj x="or" />
                  &nbsp;
                  <Pron x="her" />
                </span>{" "}
                and prepositions like{" "}
                <span className="sBG">
                  <Prep x="inside" />
                  &nbsp;
                  <Conj x="and" />
                  &nbsp;
                  <Prep x="outside" />
                </span>
                .
              </p>
              <p>Conjunctions are really important!</p>
            </>
          }
        />
        <Fold
          title={<h3>Coordinating conjunctions</h3>}
          content={
            <>
              <p>
                Coordinating conjunctions combine two or more words, phrases or
                independent clauses. The items [words, phrases, or independent
                clauses] are of equal importance in the sentence. (This is the
                key difference between coordinating and subordinating
                conjunctions: subordinate conjunctions are followed by a clause
                that is less important to the meaning of the sentence).
              </p>
              <p>
                There are only four regular coordinating conjunctions in
                English: <b>and</b>, <b>or</b>, <b>nor</b>, <b>but</b>.
              </p>
              <h4>And</h4>
              <p>
                Remember that "and" joins two or more things of the same type.
                You can write "noun and noun" or "verb and verb" but not "verb
                and noun":
              </p>
              <p className="example">
                Tom likes <Verb x="to run" /> <Conj x="and" />{" "}
                <Verb x="to swim" />.
              </p>
              <p className="example">
                Tom likes to swim <Prep x="in" /> <Noun x="lakes" />{" "}
                <Conj x="and" /> <Noun x="rivers" />.
              </p>
              <p className="example">
                ❌ Tom likes <Verb x="to swim" /> <Conj x="and" />{" "}
                <Noun x="rivers" />.
              </p>
              <p>
                Also remember that when you combine more than two things, a
                comma goes between all items except the last two:
              </p>
              <p className="example">
                Tom likes to swim <Prep x="in" /> <Noun x="lakes" />,{" "}
                <Noun x="rivers" />, <Noun x="oceans" /> <Conj x="and" />{" "}
                <Noun x="volcanoes" />.
              </p>
              <p>
                Some people, however, prefer to also use a comma between the
                last two items (before the conjunction). This is also fine.
              </p>
              <p className="example">
                Tom likes to swim <Prep x="in" /> <Noun x="lakes" />,{" "}
                <Noun x="rivers" />, <Noun x="oceans" />, <Conj x="and" />{" "}
                <Noun x="volcanoes" />.
              </p>
              <h4>Or</h4>
              <p>
                The rules for using "or" are the same as the rules for "and".
              </p>
              <p className="example">
                <Noun x="Sasha" /> <Conj x="or" /> <Noun x="Masha" /> will
                probably win the race.
              </p>
              <p className="example">
                I like to eat cookies <Prep x="before" /> <Noun x="breakfast" />{" "}
                <Conj x="or" /> <Prep x="after" /> <Noun x="lunch" />.
              </p>
              <h4>Nor</h4>
              <p>
                Used when combining two or more things that are both negative or
                excluded. Often (but not always) combined with the conjunction,
                "neither":
              </p>
              <p className="example">
                <Conj x="Neither" /> <Noun x="Bob" /> <Conj x="nor" />{" "}
                <Noun x="Angelika" /> won the race.
              </p>
              <p>
                If nor is not used with neither, there must be some other
                "negative" word used in the sentence to partner with nor:
              </p>
              <p className="example">
                Bob <Verb x="did" /> <Adv x="not" /> win the race,{" "}
                <Conj x="nor" /> <Verb x="did" /> Angelika.
              </p>
              <p>
                Sometimes nor can be seen on its own. In these cases it refers
                back to something "negative" in a previouse sentence:
              </p>
              <p className="example">
                "I don't like pancakes," said Bob.
                <br />
                "<Conj x="Nor" /> do I," said Angelika.
              </p>
              <h4>But</h4>
              <p>
                "But" is used to show a contrast between two things. A key
                difference between "but" and "and" and "or" is that "but" can{" "}
                <i>only</i> join two items.
              </p>
              <p className="example">
                I <Verb x="like" /> <Noun x="dogs" /> <Conj x="but" />{" "}
                <Verb x="hate" /> <Noun x="cats" />.
              </p>
              <p className="example">
                ❌ I <Verb x="like" /> <Noun x="dogs" />, <Noun x="birds" />{" "}
                <Conj x="but" /> <Verb x="hate" /> <Noun x="cats" />.
              </p>
              <p>"But" can also be used as a subordinating conjunction!</p>
              <p>---</p>
              <p>
                There are also several part-time conjunctions. These words are
                more often used as adverbs or prepositions, but are also
                frequently used as conjunctions. The following are just a few
                examples, not an exclusive list:
              </p>
              <h4>For</h4>
              <p>
                "For" is a little strange because it's usually used as a
                preposition, but sometimes it can be used as a coordinating
                conjunction. When it's used as a conjunction it has to come
                between the two things it's "coordinating", and it only works
                with clauses. "For" as a conjunction shows "causation" —the
                clause following the conjunction gives a reason or explanation
                for the first one.
              </p>
              <p className="example">
                I don't eat mushrooms, <Conj x="for" /> I am allergic to them.
              </p>
              <h4>Yet</h4>
              <p>
                "Yet" is like "but" in that it shows a contrast between [only]
                two things, but its use emphasizes that the speaker is somewhat
                surprised:
              </p>
              <p className="example">
                My sister is <Adj x="young" /> <Conj x="yet" /> <Adj x="wise" />
                .
              </p>
              <p>[We usually don't expect wisdom from young people.]</p>
              <p className="example">
                The rebels <Verb x="were losing" /> <Conj x="yet" />{" "}
                <Verb x="kept fighting" />.
              </p>
              <h4>So</h4>
              <p>
                "So" can be used as an adverb (common) or as an adjective or
                pronoun (infrequent), but sometimes it's a conjunction. It
                generally shows that something is the result of something else:
              </p>
              <p className="example">
                I gave the parrot a cookie <Conj x="so" /> he would shut up.
              </p>
              <p>or shows that something is the reason for something else:</p>
              <p className="example">
                It's dark outside <Conj x="so" /> we should go to sleep.
              </p>
            </>
          }
        />
        <Fold
          title={<h3>Subordinating conjunctions</h3>}
          content={
            <>
              <p>
                Subordinating conjunctions combine the main clause and a{" "}
                <i>subordinate</i> clause in a sentence. That might sound
                complicated, but it isn't really. It just means you can make
                sentences like:
              </p>
              <p className="example">
                I ate an apple <Conj x="because" /> I'm a winner.
              </p>
              <p>
                Note that the <i>main clause</i> is "I ate an apple", and the{" "}
                <i>subordinate clause</i> is "because I'm a winner". It should
                be clear that the main clause is more important. The subordinate
                clause only exists to provide extra details about the main
                clause (in this case, answering <i>why?</i>).
              </p>
              <p>
                There are a few facts you should remember in order to understand
                subordinating conjunctions:
              </p>
              <ol>
                <li>
                  A clause is a group of words that has a noun and a verb, but
                  isn't its own sentence. (Clauses are the parts that complex
                  sentences are made of.)
                </li>
                <li>
                  Some sentences have two clauses: a main clause, and a
                  subordinate clause. The subordinate clause is used to add
                  details to (provide extra information about) the main clause.
                </li>
                <li>
                  Subordinate clauses start with a{" "}
                  <i>subordinating conjunction</i>, like "but", "so", "because",
                  "although", <i>et cetera</i>.
                </li>
                <li>
                  The subordinate clause can come before or after the main
                  clause, but if it comes first it has to be followed by a
                  comma.
                </li>
              </ol>
              <p>Which just means that you can write </p>
              <p className="example">
                I gave my daughter a cookie <Conj x="because" /> she was hungry.
              </p>
              <p>or</p>
              <p className="example">
                <Conj x="Because" /> she was hungry
                <Punc x="," /> I gave my daughter a cookie.
              </p>
              <p>---</p>
              <p>
                Some subordinating conjunctions are used to show a
                cause-and-effect relationship between two clauses:
              </p>
              <p className="example">
                The poor man left a tip, <Conj x="though" /> he didn't want to.
              </p>
              <p>
                Conjunctions of this type include <b>as</b>, <b>unless</b>,{" "}
                <b>since</b>, <b>though</b> and <b>because</b>.
              </p>
              <p>
                Other subordinating conjunctions show a relationship in time or
                space between two clauses:
              </p>
              <p className="example">
                I stopped buying fast food <Conj x="once" /> I learned how to
                cook.
              </p>
              <p className="example">
                <Conj x="Whenever" /> I see the moon, I cry.
              </p>
              <p>
                Conjunctions of this type include <b>once</b>, <b>while</b>,{" "}
                <b>wherever</b>, <b>whenever</b>, <b>before</b>, and{" "}
                <b>after</b>.
              </p>
            </>
          }
        />

        <Fold
          title={
            <h3>Correlative conjunctions —using two conjunctions at once</h3>
          }
          content={
            <>
              <p>
                Correlative conjunctons are pairs of words that combine to
                establish a relationship between two items in a sentence. Some
                common pairs are <b>neither-nor</b>, <b>either-or</b>,{" "}
                <b>both-and</b> and <b>not only-but also</b>. In the examples
                below, notice that the items joined by the conjunctions are of
                the same type / structure.
              </p>
              <p className="example">
                <Conj x="Neither" /> <Pron x="you" /> <Conj x="nor" />{" "}
                <Pron x="I" /> know where Batman lives.
              </p>
              <p className="example">
                The dragon will <Conj x="either" /> <Verb x="eat" />{" "}
                <Pron x="us" /> <Conj x="or" /> <Verb x="let" /> <Pron x="us" />{" "}
                <Verb x="go" />.
              </p>
              <p className="example">
                <Conj x="Both" /> <Noun x="vampires" /> <Conj x="and" />{" "}
                <Noun x="werewolves" /> hunt their victims at night.
              </p>
              <p className="example">
                I <Adv x="not only" /> <Verb x="play" /> <Noun x="guitar" />{" "}
                <Conj x="but" /> <Adv x="also" /> <Verb x="write" />{" "}
                <Noun x="songs" /> about crocodiles.
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
    <style jsx>{``}</style>
  </div>
);

export default ThisPage;
