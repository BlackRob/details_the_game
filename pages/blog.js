// the blog is a modification of the blog-starter example from next.js 
// https://github.com/zeit/next.js/tree/canary/examples/blog-starter

import MoreStories from '../blogComponents/more-stories'
import HeroPost from '../blogComponents/hero-post'
import { getAllPosts } from '../blogLib/api'
import Head from 'next/head'
import React from 'react'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import MyBlogHeadStuff from '../blogComponents/myBlogHeadStuff'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return <div className="container">
    <Head>
      <MyBlogHeadStuff title="Blog" thumbnail="/public/" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">The Grumbly Blog</h2>
        <p className="description">These posts share news about Grumbly Games, grammar tips
        and advice on how to play details.
          </p>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
      </div>
      <div className="content">
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}