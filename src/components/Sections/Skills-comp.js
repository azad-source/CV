import addElm from '@component_folder/create-dom-element.js';
import render from '@component_folder/render.js';
import data from '@data_folder/data.json';

export default class {
    constructor(wrapper) {
        this.wrapper = wrapper;
    }

    init() {
        let section = addElm('section', 'section-block', false, 'skills');
        let contentWrapper = addElm('div', 'content-wrapper');
        let h2 = addElm('h2', false, 'Skills');
        let skillsWrap = addElm('div', 'skills-wrap');
        let skillsArr = data['skills'];

        let i = 0;
        let j = 0;
        for (let skillsSection in skillsArr) {
            i++;
            let skillItemSect = addElm('div', 'skills-block skills-block-' + i);
            let h4 = addElm('h4', false, skillsSection);
            render(skillItemSect, h4);
            render(skillsWrap, skillItemSect);

            let sect = skillsArr[skillsSection];
            for (var item in sect) {
                j++;

                let skillItemElm = addElm('div', 'skill-progress');
                skillItemElm.innerHTML = `
                					<div class="skill-progress-title">
                						<span class="skill-progress-title-percent">${sect[item]}</span>
                						<span class="skill-progress-title-item">${item}</span>
                					</div>
                					<div class="skill-progress-max"></div>
                					<div class="skill-progress-current" style="width: ${sect[item]};">
                						<div class="skill-progress-current-inner"></div>
                					</div>
                					`;
                render(skillItemSect, skillItemElm);
            }
        }

        render(contentWrapper, h2);
        render(contentWrapper, skillsWrap);
        render(section, contentWrapper);
        render(this.wrapper, section);
    }
}