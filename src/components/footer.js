import cx from 'classnames'

export default () =>
  <footer className={cx(`pv4 ph3 ph5-m ph6-l o-80 bg-rainbows`)}>
    <small className={cx(`f6 db tc`)}><b className={cx(`ttu`)}>This is open source software</b>, Be kind rewind</small>
    <nav className={cx(`tc mt3`)}>
      <div className={cx(`f6 dib mh2 pb2 pb0-ns link mid-gray`)}>
        <span className={cx(`dib pr2 grow relative`)}>&#x1F4D6; </span>
        <a href="https://twitter.com/sambreed" title="Follow me on Twitter">Sign my guestbook</a>
      </div>
      <div className={cx(`f6 dib mh2 pb2 pb0-ns link mid-gray`)}>
        <span className={cx(`dib pr2 grow relative`)}>&#x1F621; </span>
        <a href="https://github.com/wookiehangover/wookiehangover.com/issues/new" title="Complaints">Complaints</a>
      </div>
      <div className={cx(`f6 dib mh2 pb2 pb0-ns link mid-gray`)}>
        <span className={cx(`dib pr2 grow relative`)}>&#x1F481;&#x1F3FB; </span>
        <a href="mailto:samuel.breed@gmail.com" title="Send me an Email">Suggestions</a>
      </div>
    </nav>
  </footer>
