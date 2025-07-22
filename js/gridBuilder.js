// gridBuilder.js
document.addEventListener("DOMContentLoaded", function() {
    if (typeof siteLinks !== 'undefined') {
      var grid = document.querySelector('.grid');
      if (grid) {
        grid.innerHTML = siteLinks.map(item => `
          <li class="grid-item">
            <a href="${item.href}">
              <img src="${item.img}" alt="${item.title}" loading="lazy">
              <div><h3>${item.title}</h3></div>
            </a>
          </li>
        `).join('');
        // Note: We don't need the dynamic column classes anymore 
        // since our CSS handles responsive scaling automatically
      }
    }
  });