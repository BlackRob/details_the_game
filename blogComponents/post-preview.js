import Avatar from '../blogComponents/avatar'
import Date from '../blogComponents/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="">{title}</a>
        </Link>
      </h3>
      <div className="dateDiv">
        <Date dateString={date} />
      </div>
      <p className="heroPostExcerpt">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
      <style jsx>
        {`
          .heroPostImageDiv {}
          .heroPostContent {}
          .heroPostTitle {}
          .heroPostTitleLink {}
          .dateDiv {}
        `}
      </style>
    </div>
  )
}
