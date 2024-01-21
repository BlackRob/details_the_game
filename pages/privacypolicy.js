import Head from "next/head";
import SiteHeader from "../components/siteHeader";
import SiteFooter from "../components/siteFooter";
import TypeButtonDiv from "../components/typeButtonDiv";
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

const Privacy = () => (
  <div className="container">
    <Head>
      <MyHeadStuff title="Privacy policy for details" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">Privacy policy</h2>
        <h4 className="description">
          (for web, Android and iOS versions of details)
        </h4>
      </div>
      <div className="content">
        <a
          href="https://play.google.com/store/apps/details?id=com.details_reactnative"
          rel="noopener noreferrer"
          target="_blank"
          alt="google play store page for details the game"
        >
          Link to "details the game" in Google Play store,
        </a>
        <a
          href="https://apps.apple.com/us/app/details-the-game/id6449182298"
          rel="noopener noreferrer"
          target="_blank"
          alt="apple store page for details the game"
        >
          Link to "details the game" in Apple App store,
        </a>
        <p>
          This app doesn't require an account. It doesn't track you and doesn't
          share or collect any data. Once it's installed, it doesn't even need
          the internet. There are no ads. You don't have anything to worry about
          privacy-wise with this app.
        </p>
      </div>
      <div className="sidebar">
        <TypeButtonDiv />
      </div>
    </main>
    <SiteFooter />

    <style jsx>{``}</style>
  </div>
);

export default Privacy;
