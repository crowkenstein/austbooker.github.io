// sidebarLinks.js

(function() {
  // Wait until nav.html is loaded and siteLinks is available
  function addSidebarLinks() {
    if (typeof siteLinks !== 'undefined') {
      var navList = document.querySelector('.sidebar-nav');
      if (navList) {
        siteLinks.forEach(function(item) {
          var li = document.createElement('li');
          li.innerHTML = `<a href="${item.href}">${item.title}</a>`;
          navList.appendChild(li);
        });
      }
    }
  }

  // If nav.html is loaded via fetch, call this after nav is inserted
  if (document.querySelector('.sidebar-nav')) {
    addSidebarLinks();
  } else {
    // Listen for nav-placeholder changes (for dynamic nav.html loading)
    var navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
      var observer = new MutationObserver(function() {
        if (document.querySelector('.sidebar-nav')) {
          addSidebarLinks();
          observer.disconnect();
        }
      });
      observer.observe(navPlaceholder, { childList: true });
    }
  }
})(); 