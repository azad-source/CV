import addElm from '@component_folder/create-dom-element.js';
import render from '@component_folder/render.js';
import AboutSection from '@component_folder/Sections/About-comp.js'
import ExperienceSection from '@component_folder/Sections/Experience-comp.js'
import EducationSection from '@component_folder/Sections/Education-comp.js'
import PortfoliosSection from '@component_folder/Sections/Portfolios-comp.js'
import SkillsSection from '@component_folder/Sections/Skills-comp.js'
import LanguagesSection from '@component_folder/Sections/Languages-comp.js'
import ContactSection from '@component_folder/Sections/Contact-comp.js'

export default class {
    constructor(wrapper) {
        this.wrapper = wrapper;
    }

    init() {
        let mainWrapper = addElm('div', 'main-wrapper');
        new AboutSection(mainWrapper).init();
        new ExperienceSection(mainWrapper).init();
        new EducationSection(mainWrapper).init();
        new PortfoliosSection(mainWrapper).init();
        new SkillsSection(mainWrapper).init();
        new LanguagesSection(mainWrapper).init();
        new ContactSection(mainWrapper).init();
        render(this.wrapper, mainWrapper);
    }
}