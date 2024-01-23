import Link from "next/link";

export default function siteHeader() {
  return (
    <header>
      <div className="Header_logo1">
        <Link href="/">
          <a alt="logo">GRUMBLY</a>
        </Link>
      </div>
      <div className="Header_logo2">
        <Link href="/">
          <a alt="logo">GAMES</a>
        </Link>
      </div>
      <div className="Header_menu">
        {/* <Link href="#learn"><a alt="learn">Learn!</a></Link> */}
        <Link href="/blog">
          <a alt="blog">Blog</a>
        </Link>
        <Link href="/about">
          <a alt="about">About</a>
        </Link>
      </div>
      <div className="Header_game">
        <a
          href="https://details.grumbly.games"
          rel="noopener noreferrer"
          target="_blank"
          alt="play"
        >
          <div className="GameLink">
            Play
            <br />
            details
          </div>
        </a>
      </div>
      <style jsx>
        {`
          header {
            font-size: 2em;
            background-color: var(--headerbg);
            height: auto;
            padding: 1.5vmin 4vmin;
            width: 100%;
            display: grid;
            grid-template-columns: 60% 20% 20%;
            grid-template-rows: 50% 50%;
            grid-template-areas: "logo1 menu game" "logo2 menu game";
          }
          @media screen and (min-width: 600px) {
            header {
              grid-template-columns: auto 1fr auto 13%;
              grid-template-rows: auto;
              grid-template-areas: "logo1 logo2 menu game";
              font-size: 36px;
            }
          }

          .Header_logo1 {
            grid-area: logo1;
          }
          .Header_logo1 a,
          .Header_logo1 a:visited {
            color: var(--adj);
            text-decoration: none;
          }
          .Header_logo2 {
            grid-area: logo2;
          }
          .Header_logo2 a,
          .Header_logo2 a:visited {
            color: var(--noun);
            text-decoration: none;
          }
          .Header_logo1 a:hover,
          .Header_logo2 a:hover {
            color: var(--insert);
          }
          .Header_logo1 a:active,
          .Header_logo2 a:active {
            color: var(--insert);
          }
          .Header_logo1,
          .Header_logo2 {
            padding-right: 1rem;
            display: flex;
            text-align: left;
            align-items: center;
            justify-content: left;
          }

          .Header_menu,
          .Header_game {
            margin-left: auto;
            font-size: 0.4em;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .Header_menu a,
          .Header_menu a:visited {
            padding: 7px;
            color: var(--active_outline);
            text-decoration: none;
          }
          .Header_menu a:hover,
          .Header_menu a:active {
            color: var(--insert);
          }
          .Header_menu {
            grid-area: menu;
            flex-direction: column;
          }
          @media screen and (min-width: 600px) {
            .Header_menu {
              flex-direction: row;
            }
          }
          .Header_game {
            grid-area: game;
          }
          .Header_game a {
            text-decoration: none;
          }

          .GameLink {
            text-align: center;
            border: 2px solid var(--active_outline);
            background-color: var(--verb);
            border-radius: 0.5vmin;
            padding: 10px;
            transition: filter 0.15s ease, background-color 0.15s ease;
          }
          .GameLink:hover,
          .GameLink:focus,
          .GameLink:active {
            background-color: var(--intrj);
            border: 2px solid var(--punc);
            filter: drop-shadow(0 0 0.75rem var(--adv));
            color: black;
          }
        `}
      </style>
    </header>
  );
}
