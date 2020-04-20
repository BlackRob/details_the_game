import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostSlugs, getPostBySlug } from '../../blogLib/api'
import Date from '../../blogComponents/date'
import markdownToHtml from '../../blogLib/markdownToHtml'
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import SiteHeader from '../../components/siteHeader'
import SiteFooter from '../../components/siteFooter'
import TypeButtonDiv from '../../components/typeButtonDiv'
import MyBlogHeadStuff from '../../blogComponents/myBlogHeadStuff'


export default function BlogTemplate({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return <div className="container">
    <Head>
      <MyBlogHeadStuff slug={post.slug} thumbnail={post.ogImage} />
    </Head>
    <SiteHeader />
    <main>
      <div className="intro">
        <div className="postNav">
          <div><Link href={`/posts/${post.prev}`} as={`/posts/${post.prev}`} ><a>Previous Post</a></Link></div>
          <div><Link href="/blog" as="/blog"><a>All Posts</a></Link></div>
          <div><Link href={`/posts/${post.next}`} as={`/posts/${post.next}`} ><a>Next Pos</a></Link></div>
        </div>
      </div>
      <div className="content">
        <h2 className="postTitle">{post.title}</h2>
        <div className="dateAndTagsDiv">
          <Date dateString={post.date} />
          <div className="tags">{post.categories}</div>
        </div>
        <div className="dangerousContent" dangerouslySetInnerHTML={{ __html: post.content }}>
        </div>
      </div>
      <div className="sidebar">
        <TypeButtonDiv />
      </div>
    </main>
    <SiteFooter />
    <style jsx>
      {`
        .dangerousContent {
          width: 100%;
          margin-bottom: 20px;
        }
        .postNav {
          display: flex;
          width: 100%;
          padding: 0px;
          justify-content: space-between;
        }
        .postNav a {
          color: var(--headerbg);
          text-decoration: underline;
          font-size: 90%;
          padding: 7px;
          border-radius: 3px;
          transition: all 0.3s;
        }
        .postNav a:hover {
          background-color: var(--headerbg);
          color: var(--punc);
          text-decoration: underline;
          font-size: 90%;
        }
        .postTitle {}
        .dateAndTagsDiv {
          font-size: 80%;
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .tags {
          font-weight: 600;
        }
      `}
    </style>
  </div >
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.id, [
    'title',
    'date',
    'slug',
    'author',
    'categories',
    'excerpt',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')
  //const slug = params.id

  const slugs = getPostSlugs().map(slug => { return slug.substring(0, slug.length - 3) })
  const thisSlugIndex = slugs.indexOf(params.id)
  let prev = ""
  let next = ""
  if (slugs.length === 0) {
    prev = post.slug
    next = post.slug
  } else if (thisSlugIndex === 0) {
    prev = slugs[slugs.length - 1]
    next = slugs[1]
  } else if (thisSlugIndex === slugs.length - 1) {
    prev = slugs[slugs.length - 2]
    next = slugs[0]
  } else {
    prev = slugs[thisSlugIndex - 1]
    next = slugs[thisSlugIndex + 1]
  }

  return {
    props: {
      post: {
        ...post,
        content,
        prev,
        next,
      },
    },
  }
}

export async function getStaticPaths() {
  const slugs = getPostSlugs().map(slug => { return slug.substring(0, slug.length - 3) })

  return {
    paths: slugs.map(slug => { return { params: { id: slug } } }),
    fallback: false,
  };
}
