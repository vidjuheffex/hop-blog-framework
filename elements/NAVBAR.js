const NAVBAR = (attrs) => {
  getLinkClasses = (path) => {
    let base = 'nav-item ';
    if(attrs.path === path) {
      base += ' active';
    }
    return base;
  }
  
  return  (<nav class="navbar navbar-expand text-light navbar-dark bg-primary">
             <a href="/hop/blog" class="navbar-brand">call-with.cc</a>
           <ul class="navbar-nav">
             <li class=${getLinkClasses('/hop/blog')}>
               <a href="/hop/blog" class="nav-link">Blog</a>
           </li>
             <li class=${getLinkClasses('/hop/about')}>
               <a href="/hop/about" class="nav-link">About</a>
             </li>
          </ul>
   </nav>)
}

module.exports = NAVBAR;
