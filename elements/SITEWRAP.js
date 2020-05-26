const PAGEHEAD = require('./PAGEHEAD.js');

const SITEWRAP = function ( attr, ... nodes ) {
  getLinkClasses = (path) => {
    let base = 'nav-item ';
    if(attr && attr.path && attr.path === path) {
      base += ' active';
    }
    return base;
  }
  return (
    <html lang="en">
      <pagehead />
      <body>
        <nav class="navbar navbar-expand text-light navbar-dark bg-primary">
          <a href="/hop/blog" class="navbar-brand">call-with.cc</a>
          <ul class="navbar-nav">
            <li class=${getLinkClasses('/hop/blog')}>
              <a href="/hop/blog" class="nav-link">Blog</a>
            </li>
            <li class=${getLinkClasses('/hop/about')}>
              <a href="/hop/about" class="nav-link">About</a>
            </li>
          </ul>
        </nav>
        <main class="container pt-3">
          ${nodes}
        </main>
      </body>
    </html>
  )
}

module.exports = SITEWRAP;

