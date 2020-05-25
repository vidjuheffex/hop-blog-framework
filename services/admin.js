// components
const SITEWRAP = require('../elements/SITEWRAP.js');

// data fetchers
const getPostList = require('../scheme/get-post-list.hop');
const deletePostById = require('../scheme/delete-post-by-id.hop');

service deletePost (o) {
  return deletePostById(o.id);
}

function getEditorLink(id){
  return `/hop/editor?id=${id}`
}

function getDeleteLink(id){
  return `/hop/delete?id=${id}`
}

service admin() {
  return (
    <sitewrap>
      ~{
        const state = hop.reactProxy({
          id: "",
        })

        const setDeleteId = (id) => {
          state.id = id
        }

        const clearDeleteId = () => {
          state.id = ""
        }

        const handleDeleteClick = () => {
          ${deletePost}({id: state.id}).post((id)=>{
            const el = document.querySelector(`[data-post-id="${state.id}"]`);
            el.parentNode.removeChild(el);
            $('#confirmModal').modal('hide')
          })
        }
      }
      <div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">Confirm Post Delete</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Are you sure you want to delete this post?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick=~{handleDeleteClick()}>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <h1 class="col">
          Admin
        </h1>
        <div class="col-auto">
          <a href="/hop/editor" class="btn btn-block btn-primary">Create a New Post</a>
        </div>
      </div>    
      
      <table class="table">
        ${getPostList(false).map((post)=>{
          function getBadge(published){
            if (published) {
              return <span class="badge badge-primary">Published</span>
            } else {
              return <span class="badge badge-secondary">Draft</span>
            }
          }
          
          return (<tr data-post-id=${post.id}>
                    <td class="text-center">
                      ${getBadge(post.published)}
                    </td>
                    <td>
                      ${post.title}
                    </td>
                  <td class="text-right">
                    <a class="btn btn-link" href=${getEditorLink(post.id)}>Edit</a>
                    <button data-toggle="modal" 
                            data-target="#confirmModal" 
                            class="btn btn-link text-danger"
                            onclick=~{setDeleteId(${post.id})}>
                              Delete
                    </button>
                  </td>
                  </tr>)
        })}
      </table>
    </sitewrap>
)
}
