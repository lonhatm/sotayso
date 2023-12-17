window.transitionToPage = function(href) {
    document.querySelector('main').classList.add("page-out");
    setTimeout(function() { 
        window.location.href = href
    }, 250)
}

// document.addEventListener('DOMContentLoaded', function(event) {
//     document.querySelector('body').style.opacity = 1
// })