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
      <MyHeadStuff title="Privacy policy for details" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">Privacy policy</h2>
        <p className="description">
          Privacy policy for web, Android and iOS versions of details:
        </p>
      </div>
      <div className="content">
        <h3>Privacy policy for web, Android and iOS versions of details:</h3>
        "details" doesn't save or use any information about its users. It
        doesn't require an account and doesn't remember your history.
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
