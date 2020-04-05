import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'


const About = () => (
  <div className="container">
    <Head>
      <title>About this...</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          About this...
        </h2>
        <p className="description">
          "Grumbly Games" was created to promote the game "details".
          details is a game we invented to practice grammar: it was based
          on the simple observation that one of the main differences between
          native speakers and second-language learners is that native speakers
          use longer sentences, and sentences get longer when we add details to them.
        </p>
        <p>Details add information to a sentence. For example, take the sentence</p>
        <code>The dog is hungry.</code>
        <p>The speaker is telling the listener something, providing the listener with
        information. Now, suppose there are two dogs, a brown one and a green one.
        Maybe only one of them is hungry; the speaker can express this by adding
          a detail:</p>
        <code>The green dog is hungry.</code>
        <p>The adjective "green" provides extra information: it answers the question,
          "Which dog is hungry?"</p>
        <p>Perhaps the green dog is not just hungry, and we want to share that fact.
          No problem, just add another detail:</p>
        <code>The green dog is hungry and sad.</code>
        <p>Perhaps we also want to say something about the brown dog:</p>
        <code>The green dog is hungry and sad but the brown dog is happy.</code>
        <p>And maybe this situation we're describing is only true sometimes:</p>
        <code>At sunrise, the green dog is hungry and sad but the brown dog is happy.</code>
        <p>We can go on and on, making the sentence longer and longer just by adding details.</p>
      </div>
      <div className="content">
        <section>
          <YouTubeVid vidID="Irvcf6dCk-k" />
        </section>
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
