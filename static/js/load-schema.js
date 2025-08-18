function loadJSONLD(file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            let script = document.createElement('script');
            script.type = 'application/ld+json';
            script.text = JSON.stringify(data);
            document.head.appendChild(script);
        })
        .catch(error => console.error('Error loading JSON-LD:', error));
}

// Load the JSON-LD files
loadJSONLD('/json/localbusiness.json');
loadJSONLD('/json/breadcrumb.json');
// Conditionally load product.json only on relevant pages
if (window.location.pathname.includes('classes')) {
    loadJSONLD('/json/product.json');
}