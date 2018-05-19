document.addEventListener("DOMContentLoaded", function() {
  init();
});

let elements;

let init = function() {
  elements = document.getElementsByClassName('clickable');
  
  [...elements].forEach(element => {
    let id = element.id;

    element.addEventListener('click', () => {

      document.getElementById(id).classList.add("expanded");
      
    });
  });
}