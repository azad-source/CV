import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import './styles/sass/main.scss';
import render from '@component_folder/render.js';
import Header from '@component_folder/Header-comp.js';
import Footer from '@component_folder/Footer-comp.js';
import Content from '@component_folder/Content-comp.js';
import './functions.js';


const fragment = document.createDocumentFragment();

// add header
const header = new Header(fragment);
header.init();

// add main content
const content = new Content(fragment);
content.init();

// add footer
const footer = new Footer(fragment);
footer.init();

render(document.body, fragment);



// Scroll to top
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);


function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 5);
    }
}