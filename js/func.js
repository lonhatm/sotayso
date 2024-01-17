// nút reaload khi ấn xoay xoay ---------------------------

element = document.getElementById("thongbao-reload");

// reset the transition by...
element.addEventListener("click", function(e) {
  e.preventDefault;
  
  // -> removing the class
  element.classList.remove("reloadspin");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // Oops! This won't work in strict mode. Thanks Felis Phasma!
  // element.offsetWidth = element.offsetWidth;
  // Do this instead:
  void element.offsetWidth;
  
  // -> and re-adding the class
  element.classList.add("reloadspin");
}, false);




// mở overlay -------------------------------

function openOverlay(overlay) {
  console.log(document.getElementById(overlay))
  document.getElementById(overlay).classList.toggle("open-overlay")
  document.getElementById("overlay").classList.toggle("open-overlay")
}


// chuyển trang ------------------------------------

window.goToPage = function(button, page) {
  // nút chuyển trang
  var tab = document.querySelector("#ui-nav").querySelectorAll("button");
  for (const button of tab) {
    button.classList.remove("is-open");
  }
  button.classList.add("is-open");

  // chuyển trang
  var PAGE = document.querySelectorAll("main");
  for (i = 0; i < PAGE.length; i++) {
    PAGE[i].classList.remove("page-in");
  }
  document.getElementById(page).classList.add("page-in");
  document.getElementById(page).scrollTop = 0;
};

// bay về trang chủ
document.getElementById("defaultOpen").click();

function dropdown(id) {
  btn = document.getElementById(id);
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
