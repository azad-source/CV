import { faFacebook, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import avatar from './images/avatar.png';
import portfolio_webdev from './images/portfolios/webdev.png';
import portfolio_calculator from './images/portfolios/calculator.png';
import portfolio_momentum from './images/portfolios/momentum.png';
import portfolio_virtualKeyboard from './images/portfolios/virtual-keyboard.png';
import portfolio_pureWater from './images/portfolios/pure-water.png';
import portfolio_timelineDashboard from './images/portfolios/timeline-dashboard.png';

export const data = {
    avatar,
    contacts: {
        name: {
            href: false,
            title: 'Azad MAMEDOV',
            icon: false,
        },
        position: {
            href: false,
            title: 'Frontend Developer',
            icon: false,
        },
        country: {
            href: false,
            title: 'Russia',
            icon: false,
        },
        region: {
            href: false,
            title: 'Samarskaya oblast',
            icon: false,
        },
        city: {
            href: false,
            title: 'Samara',
            icon: false,
        },
        eMail: {
            href: 'mailto:azad_63_mamedov@mail.ru',
            title: 'azad_63_mamedov@mail.ru',
            icon: faEnvelope,
        },
        telegram: {
            href: 'https://t.me/azad_63_mamedov',
            title: '@azad_63_mamedov',
            icon: faTelegram,
        },
        facebook: {
            href: 'https://www.facebook.com/azad.mamedov.338/',
            title: 'azad.mamedov.338',
            icon: faFacebook,
        },
        linkedin: {
            href: 'https://www.linkedin.com/in/azad-mamedov-0563489a/',
            title: 'azad-mamedov-0563489a',
            icon: faLinkedin,
        },
        phone: {
            href: 'tel:+79276951562',
            title: '+7 927 695 15 62',
            icon: false,
        },
    },
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
                'Structural linear and nonlinear analysis of the intermediate engine mount for LEAP-1, starting from the creation of finite element model, application of boundary conditions and definition materials property, and ending with the launch of the calculation and post processing of results. Life time calculation and modal analysis to determine natural frequencies. Software I used: ICEM (to create the mesh) Patran (to create meshing and boundary conditions) Ansys Workbench (for geometry preparation, to create mesh, boundary condition and to start the calculation) Samcef (to create condition to the limits and launch of the linear / non-linear computation (asef / mechanics)) Abaqus (to create boundary condition and to start the computation linear / nonlinear) At the end, an analysis of the results, and a report.',
        },
        {
            employe: 'Web Developer',
            company: 'Plusmedia - Samara',
            date: 'jan 2019 – feb 2021',
            description:
                'Development, support and seo promotion of websites of any complexity on cms modx, bitrix, simpla, wordperss, joomla. Working with API of modx and bitrix. Preparing of environment for the website release, installation of modules (nginx, apache, php, sql etc) and their configuration. Request processing speed optimization on the website. Languages used in development: html5, css3, javascript, jquery, php, mysql. At the moment I am studying the development of websites on React.',
        },
        {
            employe: 'Frontend developer',
            company: 'SKB Kontur',
            date: 'mar 2021 – to Present',
            description:
                'Develop the SPA in React JS framework, working with Redux architecture using complex Object-Oriented concepts in improving the performance of the websites.',
        },
    ],
    portfolios: [
        {
            title: 'Java Script ES5/ES6/ES7',
            items: [
                {
                    name: 'Webdev',
                    link: './portfolios/webdev/',
                    image: portfolio_webdev,
                },
                {
                    name: 'Calculator',
                    link: './portfolios/calculator/',
                    image: portfolio_calculator,
                },
                {
                    name: 'Momentum',
                    link: './portfolios/momentum/',
                    image: portfolio_momentum,
                },
                {
                    name: 'Virtual keyboard',
                    link: './portfolios/virtual-keyboard/',
                    image: portfolio_virtualKeyboard,
                },
                {
                    name: 'Pure water',
                    link: './portfolios/pure-water/',
                    image: portfolio_pureWater,
                },
                {
                    name: 'Timeline dashboard',
                    link: './portfolios/timeline-dashboard/',
                    image: portfolio_timelineDashboard,
                },
            ],
        },
    ],
    skills: [
        {
            title: 'CMS / Frameworks / library',
            items: [
                { name: 'ReactJS, Redux', progress: '45%' },
                { name: 'React Components', progress: '45%' },
                { name: 'Node JS', progress: '30%' },
                { name: 'Bitrix, MODX, WordPress', progress: '70%' },
                { name: 'Jquery', progress: '70%' },
            ],
        },
        {
            title: 'languages',
            items: [
                { name: 'HTML5', progress: '90%' },
                { name: 'CSS3', progress: '90%' },
                { name: 'JavaScript ES5/6/7', progress: '70%' },
                { name: 'TypeScript', progress: '55%' },
                { name: 'PHP7+', progress: '40%' },
                { name: 'SQL', progress: '40%' },
            ],
        },
        {
            title: 'other',
            items: [
                { name: 'Linux', progress: '40%' },
                { name: 'Aache/Nginx', progress: '45%' },
                { name: 'Git', progress: '70%' },
                { name: 'Webpack/Gulp', progress: '40%' },
                { name: 'SASS/LESS', progress: '70%' },
                { name: 'Storybook', progress: '50%' },
                { name: 'MongoDB', progress: '20%' },
            ],
        },
    ],
    language: [
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
