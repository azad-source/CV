import addElm from '@component_folder/create-dom-element.js';
import render from '@component_folder/render.js';
import data from '@data_folder/data.json';

export default class {
    constructor(wrapper) {
        this.wrapper = wrapper;
    }

    init() {
        let section = addElm('section', 'section-block', false, 'portfolios');
        let contentWrapper = addElm('div', 'content-wrapper');
        let h2 = addElm('h2', false, 'Portfolios');
        let portfoliosWrap = addElm('div', 'portfolios-wrap');
        let portfoliosArr = data['portfolios'];

        for (let portfolioSection in portfoliosArr) {

            let sectionTitle = addElm('h3', 'portfolios-title', portfolioSection);
            let portfoliosList = addElm('div', 'portfolios-list');
            let sect = portfoliosArr[portfolioSection];

            function importAll(r) {
                let images = {};
                r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
                return images;
            }

            const images = importAll(require.context('../../assets/images/portfolios', false, /\.(png|jpe?g|svg)$/));

            for (let item in sect) {
                if (sect[item]['image'].length > 0) {
                    let portfoliosItem = addElm('div', 'portfolios-list-item');
                    let portfoliosItemLink = addElm('a');
                    let portfoliosItemImgWrap = addElm('div', 'portfolios-list-item-img');
                    let portfoliosItemImg = addElm('img');
                    let portfoliosItemName = addElm('div', 'portfolios-list-item-name');
                    let imgName = sect[item]['image'];
                    portfoliosItemImg.src = images[imgName].default;
                    portfoliosItemImg.alt = sect[item]['name'];
                    portfoliosItemLink.href = sect[item]['link'];
                    portfoliosItemLink.setAttribute('target', '_blank');
                    portfoliosItemName.innerHTML = sect[item]['name'];

                    render(portfoliosItemImgWrap, portfoliosItemImg);
                    render(portfoliosItemLink, portfoliosItemImgWrap);
                    render(portfoliosItemLink, portfoliosItemName);
                    render(portfoliosItem, portfoliosItemLink);
                    render(portfoliosList, portfoliosItem);
                }
            }

            render(portfoliosWrap, sectionTitle);
            render(portfoliosWrap, portfoliosList);
        }

        render(contentWrapper, h2);
        render(contentWrapper, portfoliosWrap);
        render(section, contentWrapper);
        render(this.wrapper, section);
    }
}