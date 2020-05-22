const SITEWRAP = require('../elements/SITEWRAP.js');
const getPostByUrl = require('../scheme/get-post-by-url.hop');
const getMarkdown = require('../scheme/get-markdown');

service post (o) {
  const p = getPostByUrl(o.title)
  
  return <sitewrap>
           <div class="mb-5">
             <h1 class="display-4">${p.title}</h1>
             <h6 class="text-muted">${p.dateUpdated}</h6>
             ${getMarkdown(p.content)}
           </div>
         </sitewrap>;
}

