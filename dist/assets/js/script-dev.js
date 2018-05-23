"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
  'use strict';

  var projects = {
    blueLaurel: {
      title: "Blue Laurel Health",
      grad: {
        dk: "#06c4e8",
        lt: "#8febfd"
      },
      role: "Frontend Lead & Architect, and UX Designer",
      description: "Blue Laurel was a really unique opportunity - it allowed me to use some new tech and I also really believed in the product. This Web App allows patients to track their personal health care info from all of their doctors in one place. I put together and led a team of three frontend developers for this freelance product, and we built the app with Angular.",
      technology: "Angular 4, ng-cli, Webpack, Docker, AWS"
    },
    designSystem: {
      title: "Design System Data Visualization",
      grad: {
        dk: "#f33b76",
        lt: "#ff6b9a"
      },
      role: "UX Development Lead",
      description: "Pitney Bowes has become a data driven company, and it became critical to come up with reusable charting patterns to display all that data. I worked with our UX Design lead to come up with 15 reusable chart designs and implemented them in D3. Each chart comes with step-by-step guidance which I wrote for easy implementation. We took this project the extra mile by making the charts Accessibility compliant. They're now available on our internal Design System and will be reused by other frontend development teams within their own products.",
      technology: "D3, Angular JS, NPM, Bower"
    },
    romyoga: {
      title: "Romyoga",
      grad: {
        dk: "#C6D046",
        lt: "#E1EA68"
      },
      role: "Frontend Lead & Architect, and UX Designer",
      description: "Romy, the owner of Romyoga, asked me to redesign her current site for her yoga studio. I designed and built both the front and back end of her site so she could maintain her own content. I created my own CMS which was tailor-fit to meet her needs using HTML, CSS, Javascript and PHP.",
      technology: "HTML5, Javascript (ES5), CSS3, PHP"
    },
    barAcademy: {
      title: "Bar Academy 101",
      grad: {
        dk: "#8979C3",
        lt: "#BCACF5"
      },
      role: "Frontend Developer, UX Designer",
      description: "Rob, the owner of BarAcaemy 101 approached me to design and build a custom website for his beer and wine tasting business. As a freelance project, I developed and designed his site. Since it's small, I opted to write it in plain JS rather then to pull in a framework.",
      technology: "HTML5, Javascript (ES5), CSS3, Gulp, Browsersync"
    }
  };

  var elements = {
    tiles: document.getElementsByClassName('clickable'),
    htmlBody: document.getElementById('body'),
    modal: document.getElementById('modal'),
    close: document.getElementById('modalClose'),
    bg: document.getElementById('modalBg'),
    title: document.getElementById('modalTitle'),
    role: document.getElementById('modalRole'),
    description: document.getElementById('modalDescription'),
    technology: document.getElementById('modalTechnology'),
    img: document.getElementById('modalImg')
  };

  elements.close.addEventListener('click', function () {
    closeModal();
  });
  elements.bg.addEventListener('click', function () {
    closeModal();
  });

  var closeModal = function closeModal() {
    elements.modal.classList.remove("active");
    elements.htmlBody.classList.remove("locked");
  };

  var init = function init(tiles) {

    [].concat(_toConsumableArray(tiles)).forEach(function (tile) {
      var id = tile.id;

      tile.addEventListener('click', function () {

        elements.htmlBody.classList.add("locked");
        elements.modal.classList.add("active");
        populateModal(id);
      });
    });
  };

  var populateModal = function populateModal(id) {
    var laptopImg = "url('assets/images/" + id + "-laptop.png'),";
    var gradientImg = "linear-gradient(to bottom left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, " + projects[id].grad.dk + " 50%, " + projects[id].grad.lt + " 100%)";

    elements.title.innerText = projects[id].title;
    elements.role.innerText = projects[id].role;
    elements.img.style.backgroundImage = laptopImg + gradientImg;
    elements.description.innerText = projects[id].description;
    elements.technology.innerText = projects[id].technology;
  };

  document.addEventListener("DOMContentLoaded", function () {
    init(elements.tiles);
  });
})();
