import Date from './date'
import Link from 'next/link'
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
// import Typography from '@material-ui/core/Typography';

export default function PostPreview({
  title,
  date,
  slug,
  excerpt,
  categories,
}) {
  const classes = useStyles();

  return (
    <li>
      <HtmlTooltip title={excerpt} enterDelay={200} leaveDelay={0} classes={{ tooltip: classes.customWidth }}>
        <h3>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>{title}</a>
          </Link>
        </h3>
      </HtmlTooltip>
      <div className="dateAndTagsDiv">
        <Date dateString={date} />
        <div className="tags">{categories}</div>
      </div>
      <style jsx>
        {`  
          li {
            padding: 4px 7px;
            border-radius: 3px;
            transition: all 0.2s;
            color: black;
          }
          .dateAndTagsDiv {
            font-size: 80%;
            display: flex;
            width: 100%;
          }
          .tags {
            margin-left: 20px;
            font-weight: 600;
          }
          a, a:visited {
            color: inherit;
            text-decoration: none;
          }
          a:hover {
            color: var(--punc);
          }
          li:hover {
            background-color: var(--headerbg);
            color: var(--punc);
          }
        `}
      </style>
    </li>
  )
}

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  customWidth: {
    maxWidth: 400,
  },
}));

{/* <Fold title={<h3>
  <Link as={`/posts/${slug}`} href="/posts/[slug]">
    <a className="">{title}</a>
  </Link>
</h3>}
  content={excerpt} />
  <div className="dateDiv">
    <Date dateString={date} />
  </div>
  <style jsx>
    {`
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
  </style> */}