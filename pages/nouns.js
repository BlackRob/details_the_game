import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import YouTubeVid from '../components/youTubeVid'
import Fold from '../components/fold'
import MyHeadStuff from '../components/myHeadStuff'

const ThisPage = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Nouns" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">
          Nouns
        </h2>
        <p className="description">Nouns describe a person, place, thing or idea.
        "Noun" is the biggest category of words in English.
        Dog is a noun. Cat is a noun. Love is a noun. Pizza is a noun...
          ("You" and "I" are not <i>nouns</i>. "You" and "I", and "him" and "her", are <i>pronouns</i>. 🤨)
        </p>
      </div>
      <div className="content">
        <h3>How to use nouns in details</h3>
        <p>
          Nouns are very, very common, so you will need to use a lot of nouns when you play details.
          Here are some ways that you can use noun cards:
          </p>
        <YouTubeVid vidID="LNxWTS25Tbk" />
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