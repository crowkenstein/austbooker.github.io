// galleryBuilder.js
document.addEventListener("DOMContentLoaded", function() {
  if (typeof siteLinks !== 'undefined') {
    var gallery = document.querySelector('.gallery');
    if (gallery) {
      gallery.innerHTML = siteLinks.map(item => `
        <li class="gallery-item">
          <a href="${item.href}">
            <img src="${item.img}" alt="${item.title}" loading="lazy">
            <div><h3>${item.title}</h3></div>
          </a>
        </li>
      `).join('');
      // Add the dynamic column class
      if (siteLinks.length <= 2) {
        gallery.classList.add('gallery-2col');
      } else if (siteLinks.length <= 10) {
        gallery.classList.add('gallery-3col');
      } else {
        gallery.classList.add('gallery-4col');
      }
    }
  }
}); 