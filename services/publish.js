const publishPost = require('../scheme/publish-post');

service publish ( o ) {
  publishPost(o.id, o.published)
}

module.exports = publish;
