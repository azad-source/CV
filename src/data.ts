import { faFacebook, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import avatar from './images/avatar.png';
import portfolio_webdev from './images/portfolios/webdev.png';
import portfolio_calculator from './images/portfolios/calculator.png';
import portfolio_momentum from './images/portfolios/momentum.png';
import portfolio_virtualKeyboard from './images/portfolios/virtual-keyboard.png';
import portfolio_pureWater from './images/portfolios/pure-water.png';
import portfolio_timelineDashboard from './images/portfolios/timeline-dashboard.png';
import portfolio_achord from './images/portfolios/achord.png';

export const contactsInfo = {
    post: '443058',
    city: 'Samara',
    region: 'Samarskaya oblast',
    country: 'Russia',
    eMail: 'azad_63_mamedov@mail.ru',
    phone: '+7 927 695 15 62',
    linkedin: 'https://www.linkedin.com/in/azad-mamedov/',
};

export const data = {
    avatar,
    name: 'Azad MAMEDOV',
    position: 'Frontend Developer',
    contacts: [
        {
            title: 'country',
            href: null,
            value: contactsInfo.country,
            icon: null,
        },
        {
            title: 'region',
            href: null,
            value: contactsInfo.region,
            icon: null,
        },
        {
            title: 'city',
            href: null,
            value: contactsInfo.city,
            icon: null,
        },
        {
            title: 'e-mail',
            href: 'mailto:azad_63_mamedov@mail.ru',
            value: contactsInfo.eMail,
            icon: faEnvelope,
        },
        {
            title: 'telegram',
            href: 'https://t.me/azad_63_mamedov',
            value: '@azad_63_mamedov',
            icon: faTelegram,
        },
        {
            title: 'facebook',
            href: 'https://www.facebook.com/azad.mamedov.338/',
            value: 'azad.mamedov.338',
            icon: faFacebook,
        },
        {
            title: 'linkedin',
            href: contactsInfo.linkedin,
            value: 'azad-mamedov-0563489a',
            icon: faLinkedin,
        },
        {
            title: 'phone',
            href: `tel:${contactsInfo.phone.replace(/\s/g, '')}`,
            value: contactsInfo.phone,
            icon: null,
        },
    ],
    about: 'I have more than 3 years of experience in web development and I really like to work with customers and provide high-quality service and quick responses. I like to discover new technologies, search out for effective decisions, and grow as a professional. Working with a variety of technologies and tools helps me to use proven best practices for existing challenges, predict application behavior and prevent bugs and incidents. Contact me if you want to work with a reliable and experienced developer. Lets get the job done!',
    education: [
        {
            degree: 'Bachelor Of Engineering (aircraft engines and power plants)',
            establishment: 'Samara State Aerospace University',
            date: 'september 2008 - july 2011',
            description: '',
        },
        {
            degree: 'Master Of Engineering (Aircraft Engine)',
            establishment: 'Samara State Aerospace University',
            date: 'september 2011 - july 2014',
            description: '',
        },
        {
            degree: 'Frontend developer',
            establishment: 'EPAM courses',
            date: 'september 2020 - december 2020',
            description:
                'JS Core, Event Loop, JavaScript Asynchronous, features of es6/7/8, ReactJS',
        },
    ],
    experience: [
        {
            employe: 'Mechanical Engineer',
            company: 'Safran SMARTEC - Samara',
            date: 'feb  2014 - dec 2018',
            description:
                "I've been doing the structural linear and nonlinear analysis of the intermediate engine mount. I've been creating of finite element model with application of boundary conditions and definition materials property. I also ran calculations and did post-processing of the calculation results.",
            languages: null,
            tools: 'Software: ICEM, Patran, Ansys Workbench, Samcef, Abaqus',
        },
        {
            employe: 'Web Developer',
            company: 'Plusmedia - Samara',
            date: 'jan 2019 – feb 2021',
            description:
                "I've been developing, supporting and seo facilitating of websites on cms modx, bitrix, wordperss, joomla. I've been preparing of environment for the website release, installation of modules (nginx, apache, php, sql etc) and their configuration. Languages used in development: html5, css3, javascript, jquery, php, mysql.",
            languages: 'Languages: HTML5, CSS3, Jquery, PHP7.x, Mysql',
            tools: 'Git, Photoshop, Figma, Sublime Text',
        },
        {
            employe: 'Frontend developer',
            company: 'SKB Kontur',
            date: 'mar 2021 – to Present',
            description:
                "I am developing a UI for the company's EDI products on React.js framework with Redux and using typescript. I build projects on webpack or configure an exisiting one. I cover the code with tests using jest (unit testing), creevey (screenshot testing) and storybook, as well as doing a code review. I prepare html responsive web designs for any device from figma mockups.",
            languages:
                'Languages/Frameworks/Libraries: HTML5, CSS3, SASS/SCSS, JavaScript, TypeScript, ReactJS, Redux',
            tools: 'Tools: VS Code, Gitlab, Webpack, Storybook, Jest, Figma, MongoDBCompas, YouTrack',
        },
    ],
    portfolios: [
        {
            title: 'Java Script',
            items: [
                {
                    name: 'Webdev',
                    link: 'https://azad-source.github.io/webdev/',
                    image: portfolio_webdev,
                },
                {
                    name: 'Calculator',
                    link: 'https://azad-source.github.io/calculator/',
                    image: portfolio_calculator,
                },
                {
                    name: 'Momentum',
                    link: 'https://azad-source.github.io/momentum/',
                    image: portfolio_momentum,
                },
                {
                    name: 'Virtual keyboard',
                    link: 'https://azad-source.github.io/virtual-keyboard/',
                    image: portfolio_virtualKeyboard,
                },
                {
                    name: 'Pure water',
                    link: 'https://azad-source.github.io/pure-water/',
                    image: portfolio_pureWater,
                },
                {
                    name: 'Timeline dashboard',
                    link: 'https://azad-source.github.io/timeline-dashboard/',
                    image: portfolio_timelineDashboard,
                },
            ],
        },
        {
            title: 'React.js',
            items: [
                {
                    name: 'Achord',
                    link: 'https://achord.ru/',
                    image: portfolio_achord,
                },
            ],
        },
    ],
    skills: [
        {
            title: 'languages',
            items: [
                { name: 'HTML5', progress: '90%', start: new Date('01.01.2019') },
                { name: 'CSS3', progress: '90%', start: new Date('01.01.2019') },
                { name: 'JavaScript', progress: '75%', start: new Date('01.01.2019') },
                { name: 'TypeScript', progress: '55%', start: new Date('01.01.2021') },
                { name: 'PHP7+', progress: '40%', start: new Date('01.01.2019') },
                { name: 'SQL', progress: '40%', start: new Date('01.01.2019') },
            ],
        },
        {
            title: 'CMS / Frameworks / library',
            items: [
                { name: 'ReactJS', progress: '75%', start: new Date('02.01.2020') },
                { name: 'React Native', progress: '15%', start: new Date('02.01.2022') },
                { name: 'Redux', progress: '65%', start: new Date('02.01.2020') },
                { name: 'Node JS', progress: '30%', start: new Date('05.01.2021') },
                { name: 'Bitrix, MODX, WordPress', progress: '70%', start: new Date('01.01.2019') },
                { name: 'Jquery', progress: '70%', start: new Date('01.01.2019') },
            ],
        },
        {
            title: 'other',
            items: [
                { name: 'Linux', progress: '40%', start: new Date('01.01.2019') },
                { name: 'Aache/Nginx', progress: '45%', start: new Date('01.01.2019') },
                { name: 'Git', progress: '70%', start: new Date('05.01.2019') },
                { name: 'Webpack/Gulp', progress: '40%', start: new Date('08.01.2019') },
                { name: 'SASS/SCSS', progress: '70%', start: new Date('01.01.2020') },
                { name: 'Storybook', progress: '50%', start: new Date('05.01.2021') },
                { name: 'jest', progress: '30%', start: new Date('01.02.2021') },
                { name: 'creevey', progress: '50%', start: new Date('01.11.2021') },
                { name: 'MongoDB', progress: '20%', start: new Date('05.01.2021') },
            ],
        },
    ],
    langs: [
        {
            language: 'english',
            level: 'A2',
            description: 'intermediate, conversational, competent',
        },
        {
            language: 'french',
            level: 'B1',
            description: 'had experience of correspondence and communication with native speakers',
        },
    ],
};
