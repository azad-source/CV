import addElm from '@component_folder/create-dom-element.js';
import render from '@component_folder/render.js';
import avatar from '@images_folder/avatar.png';
import data from '@data_folder/data.json';
import ExportDOCX_En from '@component_folder/ExportDOCXEn-comp.js';
import ExportDOCX_Fr from '@component_folder/ExportDOCXFr-comp.js';

export default class {
    constructor(wrapper) {
        this.wrapper = wrapper;
    }

    init() {
        let section = addElm('section', 'section-block', false, 'about');
        render(section, this.title());
        render(section, this.socials());
        render(this.wrapper, section);
    }

    title() {
        let titleBlock = addElm('div', 'about-block-1');
        let h1 = addElm('h1', false, 'Azad MAMEDOV');
        let position = addElm('div', 'position', 'Frontend Developer');
        let avatarWrap = addElm('div', 'ava-wrapper');
        let avatarImg = addElm('img');
        avatarImg.src = avatar;
        avatarImg.alt = 'avatar';
        render(avatarWrap, avatarImg);
        render(titleBlock, h1);
        render(titleBlock, position);
        render(titleBlock, avatarWrap);
        return titleBlock;
    }

    socials() {
        let descrBlock = addElm('div', 'about-block-2');
        let socialWrap = addElm('div', 'social-wrap');
        let ul = addElm('ul');
        let contacts = data['contacts'];

        for (var key in contacts) {
            if (!contacts[key]['href'] || !contacts[key]['font-awesome']) continue;
            let li = addElm('li');
            let a = addElm('a', false, false, false, contacts[key]['href'], contacts[key]['title']);
            a.target = '_blank';
            let i = addElm('i', contacts[key]['font-awesome']);
            render(a, i);
            render(li, a);
            render(ul, li);
        }

        render(socialWrap, ul);
        render(descrBlock, socialWrap);
        render(descrBlock, this.coverLeter());

        let btnCVWrap = addElm('div', 'btn-cv-wrap');
        render(btnCVWrap, this.btnCVDownloadEn());
        render(btnCVWrap, this.btnCVDownloadFr());
        render(descrBlock, btnCVWrap);

        return descrBlock;
    }

    coverLeter() {
        let about = addElm('div', 'about-text content-wrapper');
        let p = addElm('p', false, data['about']);
        render(about, p);
        return about;
    }

    btnCVDownloadEn() {
        let btn = addElm('button', 'btn-default', 'Download CV En', 'download_pdf');
        btn.addEventListener('click', e => new ExportDOCX_En());
        return btn;
    }

    btnCVDownloadFr() {
        let btn = addElm('button', 'btn-default', 'Download CV Fr', 'download_pdf');
        btn.addEventListener('click', e => new ExportDOCX_Fr());
        return btn;
    }


}