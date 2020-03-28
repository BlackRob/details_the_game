import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'


const About = () => {
  return <div className="container">
    <Head>
      <title>About this...</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Hi! Welcome to Grumbly Games!
        </h2>
        <p className="description">
          This site is intended to help you learn English grammar
          by playing games. Right now, we only have one game, "details".
          In details you make long sentences by adding details to a
          shorter sentence, then share them with your friends.
          Try it! It's fun!
        </p>
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
      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
    `}</style>
  </div>
}

export default About;
