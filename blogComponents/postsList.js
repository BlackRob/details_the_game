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
        categories={post.categories}
      />
    ))}
    <style jsx>
      {`
        ul {
          list-style: none inside;
          margin-block-start: 0;
          margin-block-end: 0;
          padding-inline-start: 7px;
        }
      `}
    </style>
  </ul>
}
