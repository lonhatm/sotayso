
function dropdown(id) {
  btn = document.getElementById(id)
  //e.stopPropagation();
  btn.classList.toggle("show-dropdown");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content
function dropdown(id) {
  document.getElementById(id).classList.toggle("show-dropdown");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropdown-content')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-dropdown')) {
        openDropdown.classList.remove('show-dropdown');
      }
    }
  }
}

*/
