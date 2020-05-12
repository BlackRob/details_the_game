import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'
import { Conj, Noun, Verb, Adj, Adv, Pron, Prep, Punc } from '../components/elementAliases'

const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Conjunctions" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Conjunctions
        </h2>
        <p className="description">Conjunctions join two words, phrases or clauses.<sup>1
          </sup> Everyone knows the simple conjunctions like "and", "but" and "or", but there are
          actually many more. These conjunctions allow us to make complex sentences and
          express relationships between different facts. For example, a person could say,
          "Tom likes Sally" and "Sally makes him laugh". These are two separate sentences.
          If we combine them with a conjunction, though, we can give extra information to
          the listener:
        </p>
        <p className="example">Tom likes Sally <Conj x='because' /> Sally makes him laugh.</p>
        <p>
          The facts are no longer separate: the listener now knows that one fact explains
          the other. Now we know <i>why</i> Tom likes Sally.
        </p>
        <YouTubeVid vidID="3GpOd3vuOGg" caption="placeholder video" />
      </div>
      <div className="content">
        <Fold title={<h3>Different ways to use conjunctions</h3>} content={<>
          <p>Conjunctions are part of several named grammatical constructions:
          "compounds", relative clauses, <i>et cetera</i>. It's important to be familiar
          with all of them, because conjunctions are essential to making
            complex sentences. </p>
        </>} />
        <Fold title={<h3>"Compound" word phrases</h3>} content={<>
          <p>"Compound" subjects are subjects made up of more than one noun:</p>
          <p className="example">The <Noun x="King" />&nbsp;<Conj x='and' />&nbsp;<Noun x="Queen" /> laughed at me.</p>
          <p>"Compound" predicates have more than one verb:</p>
          <p className="example">The aliens <Verb x="pointed" />&nbsp;<Conj x='and' />&nbsp;<Verb x="laughed" /> at me.</p>
          <p>"Compound" adjectives are made up of more than one adjective:</p>
          <p className="example">My <Adj x="mean" />&nbsp;<Conj x='and' />&nbsp;<Adj x="stupid" /> sister laughed at me.</p>
          <p>"Compound" adverbs are made up of more than one adverb:</p>
          <p className="example">Sasha's cat <Adv x="cruelly" />&nbsp;<Conj x='and' />&nbsp;<Adv x="mercilessly" /> laughed at me.</p>
          <p>I think the pattern is clear by now, but there are also compound
            pronouns <span className="sBG"><Pron x="him" />&nbsp;<Conj x="or" />&nbsp;<Pron x="her" /></span> and
            prepositions <span className="sBG"><Prep x="inside" />&nbsp;<Conj x="and" />&nbsp;<Prep x="outside" /></span>.
            (Conjunctions are really important!)
            </p>
        </>} />
        <Fold title={<h3>Coordinating conjunctions: FANBOYS</h3>} content={<>
          <p>Coordinating conjunctions combine two or more ________. There are
          seven of them in English --For, And, Nor, But, Or, Yet, So-- and there is also
          a convenient acronym that can help us remember them: FANBOYS.
          </p>
          <h4>For</h4>
          <h4>And</h4>
          <h4>Nor</h4>
          <h4>But</h4>
          <h4>Or</h4>
          <h4>Yet</h4>
          <h4>So</h4>
          <p>Which just means that you can write </p>
          <p>or</p>
          <p className="example">I gave my daughter a cookie <Conj x='because' /> she was hungry.</p>
          <p className="example"><Conj x='Because' /> she was hungry<Punc x=',' /> I gave my daughter a cookie.</p>
        </>} />
        <Fold title={<h3 name="subbyConj">Subordinating conjunctions</h3>} content={<>
          <p>When a sentence has a main clause and a subordinate clause, if the
          subordinate clause goes first it's followed by a comma.</p>
          <p>This might sound complicated, but it isn't really. You just need to
          remember a few things:</p>
          <ol>
            <li>A clause is a group of words that has a noun and a verb, but isn't
              it's own sentence</li>
            <li>Some sentences have two clauses: a main clause, and a
            subordinate clause; the subordinate clause is used to add details
              to (provide extra information about) the main clause</li>
            <li>Subordinate clauses start with a <i>subordinating conjunction</i>, like
            "but", "so", "because", "although", <i>et cetera</i></li>
            <li>The subordinate clause can come before or after the main clause,
              but if it comes first it has to be followed by a comma</li>
          </ol>
          <p>Which just means that you can write </p>
          <p className="example">I gave my daughter a cookie <Conj x='because' /> she was hungry.</p>
          <p>or</p>
          <p className="example"><Conj x='Because' /> she was hungry<Punc x=',' /> I gave my daughter a cookie.</p>
          <p>Note that the <i>main clause</i> is "I gave my daughter a cookie",
          and the <i>subordinate clause</i> is "she was hungry". It should be
          clear that the main clause is more important. The subordinate clause only
          exists to provide extra details about the main clause (in this case,
          answering <i>why?</i>).</p>
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