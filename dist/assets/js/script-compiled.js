'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

document.addEventListener("DOMContentLoaded", function () {
  init();
});

var elements = void 0;

var init = function init() {
  elements = document.getElementsByClassName('clickable');

  [].concat(_toConsumableArray(elements)).forEach(function (element) {
    var id = element.id;

    element.addEventListener('click', function () {

      document.getElementById(id).classList.add("expanded");
    });
  });
};
