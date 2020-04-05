import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'

const ThisPage = () => (
  <div className="container">
    <Head>
      <title>Pronouns</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Pronouns
        </h2>
        <p className="description">Pronouns either take the place of nouns
        or make reference to them. They are very important, but there aren't
        very many of them: there are just over 100 pronouns in English,
        but we use them all the time!
          </p>
      </div>
      <div className="content">
        <section>
          <h3>Types of pronouns</h3>
          <p>
            Pronouns are some of the most frequently used words in English:
            25 of the 100 most common English words are pronouns!<sup>1</sup> so
            you will need to use a lot of nouns when you play details.
            Pronouns are usually broken into categories, so you should learn
            about the different types of categories so you can use them
            (in details and in life.)
          </p>
          <h4>Personal / Subject pronouns</h4>
          <h4>Object pronouns</h4>
          <h4>Possessive pronouns</h4>
          <h4>Reflexive pronouns</h4>
          <h4>Intensive pronouns</h4>
          <h4>Indefinite pronouns</h4>
          <h4>Demonstrative pronouns</h4>
          <h4>Interrogative pronouns</h4>
          <h4>Relative pronouns</h4>
          <h4>Archaic pronouns</h4>
          <p>The following video gives examples of how to use pronouns:</p>
          <YouTubeVid vidID="dntgsqKjQ0Y" />
          <p><sup>1</sup> This isn't completely true: although there are 25 pronouns
          on the top 100 list, some of them are not used only as pronouns.
          "One" can be used as a pronoun: "The dragon ate one."
          But it can also be used as an adjective: "The dragon ate one princess."</p>
        </section>
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