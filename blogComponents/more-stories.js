import PostPreview from '../blogComponents/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="">
        More Stories
      </h2>
      <div className="">
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      <style jsx>
        {`
          .heroPostImageDiv {}
          .heroPostContent {}
          .heroPostTitle {}
          .heroPostTitleLink {}
          .dateDiv {}
        `}
      </style>
    </section>
  )
}
