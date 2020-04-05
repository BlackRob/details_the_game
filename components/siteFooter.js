export default function siteHeader() {
  return (
    <footer>
      <a href="http://workingclasshouses.com/coding.html"
        target="_blank" rel="noopener noreferrer">
        designed and coded by robert austin
        </a>
      <style jsx>{`
        footer {
          width: 100%;
          background-color: var(--headerbg);
          color: var(--active_outline);
          display: flex;
          flex: 0 0 80px;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </footer>
  )
}