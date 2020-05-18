const NAVBAR = require('./NAVBAR.js');
const PAGEHEAD = require('./PAGEHEAD.js');

const SITEWRAP = function ( attr, ... nodes ) {
  return (
    <html lang="en">
      <pagehead />
      <body>
        <navbar />
        <main class="container pt-3">
          ${nodes}
        </main>
      </body>
    </html>
  )
}

module.exports = SITEWRAP;

