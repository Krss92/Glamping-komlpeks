document.addEventListener('DOMContentLoaded', function() {
    var srpskiLink = document.querySelector('a[href="index.html"]');
    var engleskiLink = document.querySelector('a[href="index-en.html"]');
  
    srpskiLink.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'index.html';
    });
  
    engleskiLink.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'index-en.html';
    });
  });