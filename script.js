document.addEventListener('DOMContentLoaded', function() {
    var expElement = document.querySelector('.exp');
    var navElement = document.querySelector('nav'); // Adjust the selector as needed
    var navLinks = navElement.querySelectorAll('a'); // Select all <a> elements within nav

    expElement.addEventListener('mouseenter', function() {
        navElement.style.color = 'white'; // Change nav text color to white
        navLinks.forEach(function(link) {
            link.style.color = 'white'; // Change each <a> element's text color to white
        });
    });

    expElement.addEventListener('mouseleave', function() {
        navElement.style.color = ''; // Revert nav text color
        navLinks.forEach(function(link) {
            link.style.color = ''; // Revert each <a> element's text color
        });
    });
});