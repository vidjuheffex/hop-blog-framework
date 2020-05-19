const SITEWRAP = require('../elements/SITEWRAP.js');
const getPostById = require('../scheme/get-post-by-id.hop');
const save = require('./save.js');
const publish = require('./publish.js');

service editor ( o ) {
  let initialId = "";
  let initialValue = "";
  let initialTitle = "";
  let initialPublished = false;
  let initialDateCreated = "";
  let initialDateUpdated = "";

  if (o && o.id){
    const post = getPostById(o.id);
    initialId = post.id;
    initialValue = post.content;
    initialTitle = post.title;
    initialPublished = post.published;
    initialDateCreated = post.dateCreated;
    initialDateUpdated = post.dateUpdated;
  }

  return (
    <sitewrap>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css" />
    <script src="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js" />
    <script src='../helpers/normalize.js' lang="hopscript" />
    <script defer>
    const normalize = require('../helpers/normalize.js');
    </script>
    ~{
      const state = hop.reactProxy({
        id: ${initialId},
        title: ${initialTitle},
        published: ${initialPublished},
        saving: false,
      });
      let editor;
      const togglePublish = () => {
        state.saving = "publishing";
        ${publish}({id: state.id, published: state.published}).post((r) => {
          state.saving = false;
          state.published = !state.published
        });
      }
      const save = () => {
        state.saving = "saving";
        ${save}({id: state.id, title: state.title, content: editor.value()}).post((r) => {
          state.saving = false;

          state.id = r;
        });
      }
      const updateTitle = (el) => {
        state.title=el.value;
      }
    }
    <div class="row align-items-center mb-3">
    <div class="col">
      <input oninput=~{updateTitle(this)} class="form-control form-control-lg" placeholder="Post Title" value=~{state.title} />
    </div>

    
    <!-- Save Button Reactive -->
    <react>
    ~{

      let saveBtnDisabled = () => {
        if (Boolean(state.saving || !state.title)) {
          return true;
        } else {
          return undefined;
        }
      }
      
      let saveBtnContent = () => {
        if (state.saving === "saving") {
          return (
            <span>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="sr-only">Loading...</span></span>
          )
        } else {
          return "Save"
        }
      }
     
      return (
            <div class="col-auto">
               <button disabled=${saveBtnDisabled()}
                  class="btn btn-primary btn-lg"
                  onclick=~{save()}
               >
                 ${saveBtnContent()}
               </button>
            </div>
      )
    }
    </react>
    


    <!--  Publish Button Reactive -->
    <react>
    ~{
      let publishBtnContent = () => {
        if (state.saving === "publishing") {
          return (
            <span>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="sr-only">Loading...</span></span>
          )
        } else if (state.published) {
          return "Unpublish"
        } else {
          return "Publish"
        }
      }
      let publishBtnClasses = `btn btn-${state.published ? "danger" : "secondary"} btn-lg`;
      let publishBtnDisabled = () => {
        if (!state.id || Boolean(state.saving)) {
          return true;
        } else {
          return undefined;
        }
      }
      let publishButton = <button disabled=${publishBtnDisabled()}
                                  onclick=~{togglePublish()}
                                  class=${publishBtnClasses}>
                                  ${publishBtnContent()}
                          </button>
      return (
        <div class="col-auto">
          ${publishButton}
        </div>
      )            
    }
    </react>


    
    </div>
    <div class="mb-3">
    <span class="text-muted">/hop/post?title=</span><span><react>~{
      if(state.title) {
        return normalize(state.title)
      } else {
        return <span></span>;
      }}</react></span>
    </div>

    <!-- Text Editor -->
    <textarea id="editor" />
    ~{editor = new SimpleMDE({
        element: document.getElementById('editor'),
        initialValue: ${initialValue}});}
    </sitewrap>)
}
