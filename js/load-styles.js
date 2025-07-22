// Load all CSS files
const cssFiles = [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css',
    'css/colors.css',
    'css/base.css',
    'css/navigation.css', 
    'css/layout.css',
    'css/gallery.css',
    'css/grid-index.css',
    'css/template.css',
    'https://fonts.googleapis.com/css?family=Muli'
];

cssFiles.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
});