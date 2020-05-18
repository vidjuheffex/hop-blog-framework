// components
const SITEWRAP = require('../elements/SITEWRAP.js');

// data fetchers
const getPostList = require('../scheme/get-post-list.hop');

function getPostLink(id){
  return `/hop/editor?id=${id}`
}

service admin() {
  return (
    <sitewrap>
      <div class="row align-items-center">
        <h1 class="col">
          Admin
        </h1>
        <div class="col-auto">
          <a href="/hop/editor" class="btn btn-block btn-primary">Create a New Post</a>
        </div>
      </div>
      
      <table class="table">
        ${getPostList().map((post)=>{
          function getBadge(published){
            if (published) {
              return <span></span>
            } else {
              return <span class="badge badge-secondary">Draft</span>
            }
          }
          
          return (<tr>
                    <td>
                      ${getBadge(post.published)}
                    </td>
                    <td>
                      ${post.title}
                    </td>
                    <td>
                      <a href=${getPostLink(post.id)}>Edit</a>
                    </td>
                  </tr>)
        })}
      </table>
    </sitewrap>
  )
}
