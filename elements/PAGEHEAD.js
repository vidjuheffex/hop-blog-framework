const PAGEHEAD = () =>
      (
        <head
          title="call-with.cc"
          css=${[
            "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
          ]}
          script=${["https://code.jquery.com/jquery-3.5.1.slim.min.js",
                  "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
                  "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"]}>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
        <link rel="apple-touch-icon" sizes="180x180" href="/home/jules/Code/website/public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/home/jules/Code/website/public/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/home/jules/Code/website/public/favicon-16x16.png" />
        <link rel="manifest" href="/home/jules/Code/website/public/site.webmanifest" />
        <link rel="mask-icon" href="/home/jules/Code/website/public/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/home/jules/Code/website/public/favicon.ico" />
        <link rel="stylesheet" href="/home/jules/Code/website/site.css" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="msapplication-config" content="/home/jules/Code/website/public/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        </head>)

module.exports = PAGEHEAD;
