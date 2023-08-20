import Date from "./date";
import Link from "next/link";
import { withStyles, makeStyles } from "@mui/styles";
// import Button from '@material-ui/core/Button';
import Tooltip from "@mui/material/Tooltip";
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
      <HtmlTooltip
        title={excerpt}
        enterDelay={200}
        leaveDelay={0}
        classes={{ tooltip: classes.customWidth }}
      >
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
          h3 {
            margin-top: 0.3em;
            margin-bottom: 0.15em;
          }
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
          a,
          a:visited {
            color: inherit;
            text-decoration: none;
          }
          a:hover {
            color: var(--insert);
            text-decoration: underline;
          }
        `}
      </style>
    </li>
  );
}

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: 12,
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  customWidth: {
    maxWidth: 400,
  },
}));
