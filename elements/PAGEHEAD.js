const PAGEHEAD = () =>
      (
        <head title="vidjuheffex"
        css=${[
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
          "https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css"
       ]}
       script=${[
         "https://cdn.jsdelivr.net/npm/prismjs@1.20.0/prism.min.js",
         "https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js"]}>
         <meta
           name="viewport"
           content="width=device-width, initial-scale=1, shrink-to-fit=no" />
       </head>)

module.exports = PAGEHEAD;
