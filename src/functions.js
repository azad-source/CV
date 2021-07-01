import data from '@data_folder/data.json';
const skillsArr = data['skills'];
const portfoliosArr = data['portfolios'];

function scrollToTargetAdjusted(element) {
    var headerOffset = 40;
    var bodyRect = document.body.getBoundingClientRect().top;
    var elementRect = element.getBoundingClientRect().top;
    var elementPosition = elementRect - bodyRect;
    var offsetPosition = elementPosition - headerOffset;

    console.log(offsetPosition);

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function addPortfolios() {
    portfoliosWrap = document.querySelector(".portfolios-wrapper");

    for (var section in portfoliosArr) {

        if (section.length > 0) {
            sectionTitle = addElm('h3', 'portfolios-title');
            sectionTitle.innerHTML = section;
        }

        portfoliosList = addElm('div', 'portfolios-list');
        sect = portfoliosArr[section];

        for (var item in sect) {
            if (sect[item]['image'].length > 0) {
                portfoliosItem = addElm('div', 'portfolios-list-item');
                portfoliosItemLink = addElm('a');
                portfoliosItemImgWrap = addElm('div', 'portfolios-list-item-img');
                portfoliosItemImg = addElm('img');
                portfoliosItemName = addElm('div', 'portfolios-list-item-name');

                portfoliosItemImg.src = sect[item]['image'];
                portfoliosItemImg.alt = sect[item]['name'];
                portfoliosItemLink.href = sect[item]['link'];
                portfoliosItemLink.setAttribute('target', '_blank');
                portfoliosItemName.innerHTML = sect[item]['name'];

                portfoliosItemImgWrap.appendChild(portfoliosItemImg);
                portfoliosItemLink.appendChild(portfoliosItemImgWrap);
                portfoliosItemLink.appendChild(portfoliosItemName);
                portfoliosItem.appendChild(portfoliosItemLink);
                portfoliosList.appendChild(portfoliosItem);
            }
        }

        portfoliosWrap.appendChild(sectionTitle);
        portfoliosWrap.appendChild(portfoliosList);
    }
}

function addSkills() {
    var i = 0;
    var j = 0;
    for (var section in skillsArr) {
        i++;

        skillItemSect = addElm('div', 'skills-block skills-block-' + i);
        skillItemSect.innerHTML = `<h4>${section}</h4>`;
        document.querySelector('.skills-wrap').appendChild(skillItemSect);

        sect = skillsArr[section];
        for (var item in sect) {
            j++;

            skillItemElm = addElm('div', 'skill-progress');
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
            skillItemSect.appendChild(skillItemElm);
        }
    }
}

function createPDF() {
    var element = document.getElementById('toPrint');
    var opt = {
        margin: 1,
        filename: 'Azad_MAMEDOV_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: [310, 414.5], orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

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

function addElm(elm, classes = '') {
    let element = document.createElement(elm);
    if (classes) element.classList.add(...classes.split(' '));
    return element;
}

window.onload = function() {
    const anchors = document.querySelectorAll('a.scroll-to')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href')
            scrollToTargetAdjusted(document.querySelector(blockID));
            burger_menu_close.click();
        })
    }

    window.addEventListener('scroll', function(e) {
        elmSkills = document.getElementById('skills');
        skillsWrap = elmSkills.querySelector('.skills-wrap');
        offset = 150;

        if (document.documentElement.scrollTop + offset >= elmSkills.offsetTop && !skillsWrap.childNodes.length) {
            addSkills();
        }
    });

    document.getElementById('download_pdf').addEventListener('click', function() {
        addSkills();
        createPDF();
    });
    addPortfolios();
}

document.addEventListener('click', e => {
    switch (e.target.id) {
        // Open burger menu
        case 'burger_menu':
            document.getElementById('burger_menu_overlay').classList.add('overlay-active');
            document.querySelector('header nav.mobile').classList.add("mobile-nav-active");
            break;
        // Close burger menu
        case 'burger_menu_close':
            document.querySelector('header nav.mobile').classList.remove("mobile-nav-active");
            document.getElementById('burger_menu_overlay').classList.remove('overlay-active');
            break;
        case 'burger_menu_overlay':
            document.getElementById('burger_menu_close').click();
            document.getElementById('burger_menu_overlay').classList.remove('overlay-active');
            break;
        case 'goTopBtn':
            backToTop();
            break;
    }
})

// Scroll to top
window.addEventListener('scroll', trackScroll);