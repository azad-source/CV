import addElm from '@component_folder/create-dom-element.js';
import render from '@component_folder/render.js';
import data from '@data_folder/data.json';
import avatar from '@images_folder/avatar.png';

export default class {
    constructor(wrapper) {
        this.wrapper = wrapper;
    }

    init() {
        let section = addElm('section', 'section-block', false, 'contact');
        let contentWrapper = addElm('div', 'content-wrapper');
        let h2 = addElm('h2', false, 'Contact');
        let contactWrap = addElm('div', 'contact-wrapper');
        let ul = addElm('ul', 'contact-items');
        let contactArr = data['contacts'];

        for (let key in contactArr) {
            let li = addElm('li');
            let contactTitle = addElm('span', 'contact-item-name', `${this.upFirstLettre(key)}: `);
            let contactHref = '';
            if (contactArr[key]['href'] && contactArr[key]['href'] !== '') {
                contactHref = addElm('a', 'contact-item-value', `${contactArr[key]['title']}`);
                contactHref.href = contactArr[key]['href'];
            } else {
                contactHref = addElm('span', 'contact-item-value', `${contactArr[key]['title']}`);
            }

            render(li, contactTitle);
            render(li, contactHref);
            render(ul, li);
        }

        let contactPhoto = addElm('div', 'contact-photo');
        let img = addElm('img');
        img.src = avatar;
        render(contactPhoto, img);
        render(contactWrap, ul);
        render(contactWrap, contactPhoto);
        render(contentWrapper, h2);
        render(contentWrapper, contactWrap);
        render(section, contentWrapper);
        render(this.wrapper, section);
    }

    upFirstLettre(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
}