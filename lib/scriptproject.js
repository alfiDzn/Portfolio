const contactme = document.querySelector('.contactme');

contactme.addEventListener('click', function() {
    window.location.href = 'index.html';
})

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
})