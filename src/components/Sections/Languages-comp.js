import addElm from '@component_folder/create-dom-element.js';
import render from '@component_folder/render.js';
import data from '@data_folder/data.json';

export default class {
    constructor(wrapper) {
        this.wrapper = wrapper;
    }

    init() {
        let section = addElm('section', 'section-block', false, 'languages');
        let contentWrapper = addElm('div', 'content-wrapper');
        let h2 = addElm('h2', false, 'Languages');
        let languageWrap = addElm('div', 'language-wrap');
        let ul = addElm('ul', 'language-items');
        let languageArr = data['language'];

        for (let key in languageArr) {
            let li = addElm('li');
            let langName = addElm('span', 'language-item-name', `${this.upFirstLettre(languageArr[key]['language'])}: `);
            let langLevel = addElm('span', 'language-item-value', `( ${languageArr[key]['level']} ${languageArr[key]['description']} )`);
            render(li, langName);
            render(li, langLevel);
            render(ul, li);
        }

        render(languageWrap, ul);
        render(contentWrapper, h2);
        render(contentWrapper, languageWrap);
        render(section, contentWrapper);
        render(this.wrapper, section);
    }

    upFirstLettre(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

}