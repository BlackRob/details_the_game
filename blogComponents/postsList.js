import PostPreview from './post-preview'

export default function PostsList({ posts }) {
  return <ul>
    {posts.map(post => (
      <PostPreview
        key={post.slug}
        title={post.title}
        date={post.date}
        slug={post.slug}
        excerpt={post.excerpt}
      />
    ))}
    <style jsx>
      {`
        ul {
          list-style: none inside;
          margin-block-start: 0;
          margin-block-end: 0;
          padding-inline-start: 15px;
        }
        li {
          margin: 10px 7px 10px 0px;
        }
        a, a:visited {
          color: black;
          text-decoration: none;
        }
        a:hover {
          color: var(--active_outline);
        }
        .dateDiv {
          font-size: 90%;
          padding: 0 30px 0 25px;
          width: 10rem;
        }
      `}
    </style>
  </ul>
}
