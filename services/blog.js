const SITEWRAP = require('../elements/SITEWRAP.js');

const dbInit = require('../scheme/db-init.hop');
const getPostList = require('../scheme/get-post-list.hop');

service blog () {
  return (
    <sitewrap>
      <h1>Posts</h1>
      <ul>
        ${
          getPostList()
            .map(post => {
              const url = `/hop/post?title=${post.url}`;
              return <li>
                       <a href=${url}>
                         ${post.title}
                       </a><span class="text-muted">${post.dateUpdated}</span>
                     </li>
            })}
      </ul>
    </sitewrap>
  )
}

