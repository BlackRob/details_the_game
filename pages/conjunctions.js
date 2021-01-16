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
        <p className="description">Conjunctions join two words, phrases or clauses.
        Everyone knows the simple conjunctions like "and", "but" and "or", but there are
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
          <p>"Compound subjects" are subjects made up of more than one noun:</p>
          <p className="example">The <Noun x="King" />&nbsp;<Conj x='and' />&nbsp;<Noun x="Queen" /> laughed at me.</p>
          <p>"Compound predicates" have more than one verb:</p>
          <p className="example">The aliens <Verb x="pointed" />&nbsp;<Conj x='and' />&nbsp;<Verb x="laughed" /> at me.</p>
          <p>"Compound adjectives" are made up of more than one adjective:</p>
          <p className="example">My <Adj x="mean" />&nbsp;<Conj x='and' />&nbsp;<Adj x="stupid" /> sister laughed at me.</p>
          <p>"Compound adverbs" are made up of more than one adverb:</p>
          <p className="example">Sasha's cat <Adv x="cruelly" />&nbsp;<Conj x='and' />&nbsp;<Adv x="mercilessly" /> laughed at me.</p>
          <p>I think the pattern is clear by now, but there are also compound
            pronouns <span className="sBG"><Pron x="him" />&nbsp;<Conj x="or" />&nbsp;<Pron x="her" /></span> and
            prepositions <span className="sBG"><Prep x="inside" />&nbsp;<Conj x="and" />&nbsp;<Prep x="outside" /></span>.
            (Conjunctions are really important!)
            </p>
        </>} />
        <Fold title={<h3>Coordinating conjunctions</h3>} content={<>
          <p>Coordinating conjunctions combine two or more words, phrases or independent clauses.
          The items [words, phrases, or independent clauses] are of equal importance in 
          the sentence. (This is the key difference between coordinating and subordinating 
          conjunctions: subordinate conjunctions are followed by a clause that is less 
          important to the meaning of the sentence).</p>
          <p>Coordinating conjunctions are subdivided into smaller groups based on 
            how they are used.
          
          
          
          Coordinating conjunctions 
          also have to come between the words or phrases the modify (although sometimes these same 
          words can be used as subordinating conjunctions or adverbs, which don't follow the 
          same "must come between" rule).</p>
          
          <h4>Correlative conjunctions --using two conjunctions at once</h4>
          <p>Correlative conjunctons are pairs of words that combine to establish a relationship between 
            two items in a sentence. Some common pairs are <b>
              neither-nor</b>, <b>either-or</b>, <b>both-and</b> and <b>not only-but also</b>.
              In the examples below, notice that the items joined by the conjunctions are 
              of the same type / structure.</p>
          <p className="example"><Conj x="Neither" /> <Pron x="you" /> <Conj x="nor" /> <Pron x="I" /> know where Batman lives.</p>
          <p className="example">The dragon will <Conj x="either" /> <Verb x="eat" /> <Pron x="us" /> <Conj x="or" /> <
            Verb x="let" /> <Pron x="us" /> <Verb x="go" />.</p>
          <p className="example"><Conj x="Both" /> <Noun x="vampires" /> <Conj x="and" /> <
            Noun x="werewolves" /> hunt their victims at night.</p>
          <p className="example">I <Adv x="not only" /> <Verb x="play" /> <Noun x="guitar" /> <Conj x="but" /> <
            Adv x="also" /> <Verb x="write" /> <Noun x="songs" /> about cats.</p>
            
          <h4>Correlative conjunctions --using two conjunctions at once</h4>
          <p>Correlative conjunctons are pairs of words that combine to establish a relationship between
            two items in a sentence. Some common pairs are <b>
              neither-nor</b>, <b>either-or</b>, <b>both-and</b> and <b>not only-but also</b>.
              In the examples below, notice that the items joined by the conjunctions are
              of the same type / structure.</p>

          <p>"For" is a little strange because it's usually used as a preposition, but sometimes 
          it can be used as a coordinating conjunction. When it's used as a conjunction 
          it has to come between the two things it's "coordinating", and it only works 
          with clauses. "For" as a conjunction shows "causation" --the clause following the 
            conjunction gives a reason or explanation for the first one.</p>
          <p className="example">Tom likes <Verb x="to run" /> <Conj x='and' /> <Verb x="to swim" />.</p>
          <h4>And</h4>
          <p>Remember that "and" joins two or more things of the same type. You can write
            "noun and noun" or "verb and verb" but not "verb and noun":</p>
          <p className="example">Tom likes <Verb x="to run" /> <Conj x='and' /> <Verb x="to swim" />.</p>
          <p className="example">Tom likes to swim <Prep x="in" /> <Noun x="lakes" /> <Conj x='and' /> <Noun x="rivers" />.</p>
          <p className="example">❌ Tom likes <Verb x="to swim" /> <Conj x='and' /> <Noun x="rivers" />.</p>
          <p>Also remember that when you combine more than two things, a comma goes between
            all items except the last two:</p>
          <p className="example">Tom likes to swim <Prep x="in" /> <Noun x="lakes" />, <Noun x="rivers" />, <Noun x="oceans" />  <Conj x='and' /> <Noun x="volcanoes" />.</p>
          <h4>Nor</h4>
          <p>Used when combining two or more things that are both negative or excluded. Often (but
             not always) combined with  the conjunction, "neither":</p>
          <p className="example"><Conj x="Neither" /> <Noun x="Bill" /> <Conj x='nor' /> <Noun x="Angelica" /> won the race.</p>
          <p>Alternatively (to avoid the word "neither"):</p>
          <p className="example">Bill <Verb x="did" /> <Adv x="not"/> win the race, <Conj x='nor' /> <Verb x="did" /> Angelica.</p>
          <h4>But</h4>
          <p>"But" is used to show a contrast between two things. A key difference between "but" and "and" and "or" is
            that "but" can <i>only</i> join two items.</p>
          <p className="example">I <Verb x="like" /> <Noun x="dogs" /> <Conj x='but' /> <Verb x="hate" /> <Noun x="cats" />.</p>
          <p className="example">❌ I <Verb x="like" /> <Noun x="dogs" />, <Noun x="birds" />  <Conj x='but' /> <Verb x="hate" /> <Noun x="cats" />.</p>
          <h4>Or</h4>
          <p>The rules for using "or" are the same as the rules for "and".</p>
          <p className="example"><Noun x="Sasha" /> <Conj x='or' /> <Noun x="Masha" /> will probably win the race.</p>
          <p className="example">I like to eat cookies <Prep x="before" /> <Noun x="breakfast" /> <Conj x='or' /> <Prep x="after" /> <Noun x="lunch" />.</p>
          <h4>Yet</h4>
          <p>"Yet" is like "but" in that it shows a contrast between [only] two
            things, but its use emphasizes that the speaker is somewhat surprised:</p>
          <p className="example">My sister is <Adj x="young" /> <Conj x='yet' /> <Adj x="wise" />.</p>
          <p>[We usually don't expect wisdom from young people.]</p>
          <p className="example">The rebels <Verb x="were losing" /> <Conj x='yet' /> <Verb x="kept fighting" />.</p>
          <h4>So</h4>
          <p>Which just means that you can write </p>
          <p>or</p>
          <p className="example">I gave my daughter a cookie <Conj x='because' /> she was hungry.</p>
          <p className="example"><Conj x='Because' /> she was hungry<Punc x=',' /> I gave my daughter a cookie.</p>
        </>} />
        <Fold title={<h3 >Subordinating conjunctions</h3>} content={<>
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
        <p><sup>1</sup> The value of this acronym is debateable --read <a
          href="https://www.quickanddirtytips.com/education/grammar/weird-coordinating-conjunctions-yet-for-and-so">this</a> to
        understand why-- but for our purpose here (to remember what our choices are
        when we have to choose a conjunction to use) it will suffice.</p>
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