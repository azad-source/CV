import addElm from '@component_folder/create-dom-element.js';
import render from '@component_folder/render.js';

export default class {
    constructor(wrapper) {
        this.wrapper = wrapper;
    }

    init() {
        let footer = addElm('footer');
        render(footer, this.toTop());
        render(footer, this.copyright());
        render(this.wrapper, footer);
    }

    toTop() {
        let toTopBtn = addElm('a', 'back_to_top', false, 'goTopBtn', false, 'Наверх');
        let toTopBtnIcon = addElm('i', 'fas fa-arrow-up');
        render(toTopBtn, toTopBtnIcon);
        return toTopBtn;
    }

    copyright() {
        let copyrightElm = addElm('div', 'copyright', `© Azad MAMEDOV | CV | ${new Date().getFullYear()}`);
        return copyrightElm;
    }
}