import Avatar from '../blogComponents/avatar'
import Date from '../blogComponents/date'
import CoverImage from '../blogComponents/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="heroPostImageDiv">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="heroPostContent">
        <div>
          <h3 className="heroPostTitle">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="heroPostTitleLink">{title}</a>
            </Link>
          </h3>
          <div className="dateDiv">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <style jsx>
        {`
          .heroPostImageDiv {
            width: 100%;
          }
          .heroPostContent {}
          .heroPostTitle {}
          .heroPostTitleLink {}
          .dateDiv {}
        `}
      </style>
    </section>
  )
}
