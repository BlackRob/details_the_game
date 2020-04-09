//import Layout from "../components/BlogLayout";
//import BlogList from "../components/BlogList";

import Head from "next/head"
import { Component } from 'react'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import MyHeadStuff from '../components/myHeadStuff'
import { attributes, react as HomeContent } from '../posts/home.md'

export default class Blog extends Component {
  render() {
    let { title, cats } = attributes;

    return <div className="container">
      <Head>
        <MyHeadStuff title="Blog" />
      </Head>
      <SiteHeader />
      <main>
        <div className="intro">
          <h2 className="title">The Grumbly Blog</h2>
          <p className="description">These posts share news about Grumbly Games, details,
          or
          </p>
        </div>
        <div className="content">
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar">
          <TypeButtonDiv />
        </div>
      </main>
      <SiteFooter />
      <style jsx>{`

    `}</style>
    </div >
  }
}
