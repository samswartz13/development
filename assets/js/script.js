

// let elements;
// let modal = document.getElementById('modal');
// let close = document.getElementById('modal-close');
const projects = {
  blueLaurel: {
    title: "Blue Laurel Health",
    img: "assets/images/bluelaurel-sm.jpg",
    role: "Frontend Lead & Architect, and UX Designer",
    description: "When I was presented with the opportunity to work on Blue Laurel, I couldn't turn it down. The technology was cutting edge, and it was one of those projects where you could really believe in the cause. We were looking to build an app that would allow patients to track their health care needs from all of their doctors in one place.",
    technology: "Angular 4, ng-cli, Webpack, Docker"
  },
  designSystem: {
    title: "Design System Data Visualization",
    img: "assets/images/designsystem-sm.jpg",
    role: "UX Development Lead",
    description: "As Pitney Bowes becomes a more data driven company, it became increasingly important to come up with reusable charting patterns to display all that data. I worked with our UX Design lead to come up with 15 reusable chart designs and implemented them in D3.",
    technology: "Angular JS, D3, NPM, Bower"
  },
  romyoga: {
    title: "Romyoga",
    img: "assets/images/romyoga.png",
    role: "Frontend Lead & Architect, and UX Designer",
    description: "Romy, the owner of Romyoga, asked me to redesign her current site for her small in-home yoga studio. I designed and built both the front and back end of her site. I created my own responsive CMS and front-end which were tailor-fit to meet her needs using HTML, CSS, Javascript and PHP.",
    technology: "HTML5, Javascript (ES5), CSS3, PHP"
  },
  barAcademy: {
    title: "Bar Academy 101",
    img: "assets/images/baracademy-sm.jpg",
    role: "Frontend Developer, UX Designer",
    description: "Rob, the owner of BarAcaemy 101 approached me to design and build a custom website for his beer and wine tasting business. I both designed and developed his site using modern techniques. Since it's a small site, I opted to write it in plain JS rather then to pull in a framework.",
    technology: "HTML5, Javascript (ES5), CSS3, Gulp, Browsersync"
  },
}

let elements = {
  tiles: document.getElementsByClassName('clickable'),
  modal: document.getElementById('modal'),
  close: document.getElementById('modalClose'),
  bg: document.getElementById('modalBg'),
  title: document.getElementById('modalTitle'),
  role: document.getElementById('modalRole'),
  description: document.getElementById('modalDescription'),
  technology: document.getElementById('modalTechnology'),
  img: document.getElementById('modalImg')
}


elements.close.addEventListener('click', () => {
  elements.modal.classList.remove("active");
})
elements.bg.addEventListener('click', () => {
  elements.modal.classList.remove("active");
})

let init = function(tiles) {
  
  [...tiles].forEach(tile => {
    let id = tile.id;

    tile.addEventListener('click', () => {

      elements.modal.classList.add("active");
      populateModal(id);
      
    });
  });
}

let populateModal = function(id) {
  console.log('id', id);
  console.log('projects', projects[id]);
  elements.title.innerText = projects[id].title;
  elements.role.innerText = projects[id].role;
  elements.img.style.backgroundImage = "url(" + projects[id].img + ")";
  elements.description.innerText = projects[id].description;
  elements.technology.innerText = projects[id].technology;

}

document.addEventListener("DOMContentLoaded", function() {
  init(elements.tiles);
});

