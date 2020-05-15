// the blog is a modification of the blog-starter example from next.js 
// https://github.com/zeit/next.js/tree/canary/examples/blog-starter

import PostsList from '../blogComponents/postsList'
import { getAllPosts } from '../blogLib/api'
import Head from 'next/head'
import React from 'react'
import SiteHeader from '../components/siteHeader'
import SiteFooter from '../components/siteFooter'
import TypeButtonDiv from '../components/typeButtonDiv'
import MyBlogHeadStuff from '../blogComponents/myBlogHeadStuff'

export default function Index({ allPosts }) {
  return <div className="container">
    <Head>
      <MyBlogHeadStuff title="Blog" thumbnail="/public/" />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <h2 className="title">The Grumbly Blog</h2>
        <p className="description">These posts share news about Grumbly Games, grammar tips
        and advice on how to play details. Almost all of them link to supporting videos
        on Youtube. You should watch the videos, they're excellent.
        </p>
      </div>
      <div className="content">
        <h2>Posts</h2>
        <PostsList posts={allPosts} />
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
    'excerpt',
    'categories',
  ])

  return {
    props: { allPosts },
  }
}