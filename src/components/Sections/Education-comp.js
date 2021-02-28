import addElm from '@component_folder/create-dom-element.js';
import render from '@component_folder/render.js';
import data from '@data_folder/data.json';

export default class {
    constructor(wrapper) {
        this.wrapper = wrapper;
    }

    init() {
        let section = addElm('section', 'section-block', false, 'education');
        let contentWrapper = addElm('div', 'content-wrapper');
        let h2 = addElm('h2', false, 'Education');
        let experienceWrap = addElm('div', 'experience-wrap');
        let i = 0;
        let position = 'left';
        let experienceArr = data['education'];

        for (let key in experienceArr) {
            if (i % 2 === 0) {
                position = 'left';
            } else {
                position = 'right';
            }

            let experienceBlock = addElm('div', `experience-block experience-block-${position}`);
            let h3 = addElm('h3', false, experienceArr[key]['degree']);
            let experienceText = addElm('div', 'experience-block-text');
            let company = addElm('strong', false, `${experienceArr[key]['establishment']} `);
            let date = addElm('em', false, `(${experienceArr[key]['date']})`);
            let experDescr = addElm('div');
            let p = addElm('p', false, experienceArr[key]['description']);
            let experiencePoint = addElm('div', 'fa fa-circle experience-point');

            render(experDescr, company);
            render(experDescr, date);
            render(experDescr, p);
            render(experienceText, experDescr);
            render(experienceBlock, h3);
            render(experienceBlock, experienceText);
            render(experienceBlock, experiencePoint);
            render(experienceWrap, experienceBlock);
            i++;
        }

        render(contentWrapper, h2);
        render(contentWrapper, experienceWrap);
        render(section, contentWrapper);
        render(this.wrapper, section);
    }
}