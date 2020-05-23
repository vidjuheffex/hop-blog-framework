const savePost = require('../scheme/save-post.hop');
const normalize = require('../helpers/normalize.js');

service save ( o ) {
  let id = o && o.id;
  let published = o && o.published;
  let dateCreated = o && o.dateCreated;

  if(!id){
    id = #:js-string->jsstring(#:genuuid());
  }
  if (!published) {
    published = false;
  }
  savePost(id, o.title, normalize(o.title), o.content, published, dateCreated);
  return id;
}

module.exports = save;
