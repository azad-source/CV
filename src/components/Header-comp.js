import addElm from '@component_folder/create-dom-element.js';
import render from '@component_folder/render.js';
import sections from '@data_folder/sections.json';
import avatar from '@images_folder/avatar.png';

export default class {
    constructor(wrapper) {
        this.wrapper = wrapper;
    }

    init() {
        let header = addElm('header');
        render(header, this.topMenu());
        render(header, this.burgerMenu());
        render(this.wrapper, header);
        this.addHandlers();
    }

    topMenu() {
        let nav = addElm('nav');
        let ul = addElm('ul');
        for (var key in sections) {
            let li = addElm('li');
            let a = addElm('a', 'scroll-to', sections[key], false, '#' + key, sections[key]);
            render(li, a);
            render(ul, li);
        }
        render(nav, ul);

        return nav;
    }

    burgerMenu() {
        let burgerMenu = document.createDocumentFragment();
        let burgerMenuBtn = addElm('div', 'burger-menu-wrap');
        render(burgerMenuBtn, addElm('i', 'fas fa-bars burger-menu-icon', false, 'burger_menu'));
        let burgerMenuOverlay = addElm('div', 'burger-menu-overlay', false, 'burger_menu_overlay');
        let nav = addElm('nav', 'mobile');
        let navInner = addElm('div', 'mobile-header-nav');
        let avaWrap = addElm('div', 'mobile-ava-wrapper');
        let avaImg = addElm('img');
        avaImg.src = avatar;
        avaImg.alt = 'avatar';
        let avaName = addElm('span', 'mobile-ava-name', 'Azad MAMEDOV');
        let burgerMenuCloseBtn = addElm('i', 'fas fa-times burger-menu-close', false, 'burger_menu_close');
        let ul = addElm('ul');

        for (var key in sections) {
            let li = addElm('li');
            let a = addElm('a', 'scroll-to', sections[key], false, '#' + key, sections[key]);
            render(li, a);
            render(ul, li);
        }

        render(avaWrap, avaImg);
        render(avaWrap, avaName);
        render(navInner, avaWrap);
        render(navInner, burgerMenuCloseBtn);
        render(navInner, ul);
        render(nav, navInner);
        render(burgerMenu, burgerMenuBtn);
        render(burgerMenu, burgerMenuOverlay);
        render(burgerMenu, nav);

        return burgerMenu;
    }

    scrollToTargetAdjusted(element) {
        let headerOffset = 40;
        let bodyRect = document.body.getBoundingClientRect().top;
        let elementRect = element.getBoundingClientRect().top;
        let elementPosition = elementRect - bodyRect;
        let offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    addHandlers() {
        window.onload = () => {
            const anchors = document.querySelectorAll('a.scroll-to')
            for (let anchor of anchors) {
                anchor.addEventListener('click', e => {
                    e.preventDefault()
                    const blockID = anchor.getAttribute('href')
                    this.scrollToTargetAdjusted(document.querySelector(blockID));
                    burger_menu_close.click();
                })
            }
        }
    }

}