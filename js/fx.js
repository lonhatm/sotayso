window.transitionToPage = function(href) {
    document.querySelector('main').classList.add("page-hold");
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

// document.addEventListener('DOMContentLoaded', function(event) {
//     document.querySelector('body').style.opacity = 1
// })