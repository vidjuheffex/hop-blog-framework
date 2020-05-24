const savePost = require('../scheme/save-post.hop');
const normalize = require('../helpers/normalize.js');

service save ( o ) {
  let id = o && o.id;

  id = savePost(id, o.title, normalize(o.title), o.content);
  return id;
}

module.exports = save;
