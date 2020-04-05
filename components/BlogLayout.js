import Head from 'next/head'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'

export default function BlogLayout(props) {
  return (
    <div className="container">
      <Head>
        <title>About this...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />
      <main>
        {props.children}
        <div className="sidebar">
          <TypeButtonDiv />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}