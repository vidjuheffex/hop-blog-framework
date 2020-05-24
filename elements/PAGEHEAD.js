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
        </head>)

module.exports = PAGEHEAD;
