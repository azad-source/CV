(()=>{var e={8477:(e,t,n)=>{"use strict";const r=function(e,t){return e.appendChild(t)};function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const i=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=document.createElement(e);return n&&(t=l.classList).add.apply(t,o(n.split(" "))),r&&(l.textContent=r),a&&(l.id=a),i&&(l.href=i),s&&(l.title=s),l},s=JSON.parse('{"about":"About","experience":"Experience","education":"Education","portfolios":"Portfolios","skills":"Skills","languages":"Languages","contact":"Contact"}'),l=n.p+"48d35aba1536b813840a1cc1c2de5f5b.png";function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapper=t}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=i("header");r(e,this.topMenu()),r(e,this.burgerMenu()),r(this.wrapper,e),this.addHandlers()}},{key:"topMenu",value:function(){var e=i("nav"),t=i("ul");for(var n in s){var o=i("li"),a=i("a","scroll-to",s[n],!1,"#"+n,s[n]);r(o,a),r(t,o)}return r(e,t),e}},{key:"burgerMenu",value:function(){var e=document.createDocumentFragment(),t=i("div","burger-menu-wrap");r(t,i("i","fas fa-bars burger-menu-icon",!1,"burger_menu"));var n=i("div","burger-menu-overlay",!1,"burger_menu_overlay"),o=i("nav","mobile"),a=i("div","mobile-header-nav"),c=i("div","mobile-ava-wrapper"),u=i("img");u.src=l,u.alt="avatar";var d=i("span","mobile-ava-name","Azad MAMEDOV"),p=i("i","fas fa-times burger-menu-close",!1,"burger_menu_close"),f=i("ul");for(var h in s){var m=i("li"),v=i("a","scroll-to",s[h],!1,"#"+h,s[h]);r(m,v),r(f,m)}return r(c,u),r(c,d),r(a,c),r(a,p),r(a,f),r(o,a),r(e,t),r(e,n),r(e,o),e}},{key:"scrollToTargetAdjusted",value:function(e){var t=document.body.getBoundingClientRect().top,n=e.getBoundingClientRect().top-t-40;window.scrollTo({top:n,behavior:"smooth"})}},{key:"addHandlers",value:function(){var e=this;window.onload=function(){var t,n=c(document.querySelectorAll("a.scroll-to"));try{var r=function(){var n=t.value;n.addEventListener("click",(function(t){t.preventDefault();var r=n.getAttribute("href");e.scrollToTargetAdjusted(document.querySelector(r)),burger_menu_close.click()}))};for(n.s();!(t=n.n()).done;)r()}catch(e){n.e(e)}finally{n.f()}}}}])&&d(t.prototype,n),o&&d(t,o),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapper=t}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=i("footer");r(e,this.toTop()),r(e,this.copyright()),r(this.wrapper,e)}},{key:"toTop",value:function(){var e=i("a","back_to_top",!1,"goTopBtn",!1,"Наверх"),t=i("i","fas fa-arrow-up");return r(e,t),e}},{key:"copyright",value:function(){return i("div","copyright","© Azad MAMEDOV | CV | ".concat((new Date).getFullYear()))}}])&&f(t.prototype,n),o&&f(t,o),e}();const m=JSON.parse('{"Jx":{"Name":{"href":false,"title":"Azad MAMEDOV","font-awesome":false},"Position":{"href":false,"title":"Frontend Developer","font-awesome":false},"Country":{"href":false,"title":"Russia","font-awesome":false},"Region":{"href":false,"title":"Samarskaya oblast","font-awesome":false},"City":{"href":false,"title":"Samara","font-awesome":false},"e-mail":{"href":"mailto:azad_63_mamedov@mail.ru","title":"azad_63_mamedov@mail.ru","font-awesome":"fas fa-envelope"},"telegram":{"href":"https://t.me/azad_63_mamedov","title":"@azad_63_mamedov","font-awesome":"fab fa-telegram"},"facebook":{"href":"https://www.facebook.com/azad.mamedov.338/","title":"azad.mamedov.338","font-awesome":"fab fa-facebook"},"linkedin":{"href":"https://www.linkedin.com/in/azad-mamedov-0563489a/","title":"azad-mamedov-0563489a","font-awesome":"fab fa-linkedin"},"Phone":{"href":"tel:+79276951562","title":"+7 927 695 15 62","font-awesome":false}},"jZ":"I have more than 3 years of experience in web development and I really like to work with customers and provide high-quality service and quick responses. I like to discover new technologies, search out for effective decisions, and grow as a professional. Working with a variety of technologies and tools helps me to use proven best practices for existing challenges, predict application behavior and prevent bugs and incidents. Contact me if you want to work with a reliable and experienced developer. Lets get the job done!","f3":{"1":{"degree":"Bachelor Of Engineering (aircraft engines and power plants)","establishment":"Samara State Aerospace University","date":"september 2008 - july 2011","description":""},"2":{"degree":"Master Of Engineering (Aircraft Engine)","establishment":"Samara State Aerospace University","date":"september 2011 - july 2014","description":""},"3":{"degree":"Frontend developer","establishment":"EPAM courses","date":"september 2020 - december 2020","description":"JS Core, Event Loop, JavaScript Asynchronous, features of es6/7/8, ReactJS"}},"b8":{"1":{"employe":"Mechanical Engineer","company":"Safran SMARTEC - Samara","date":"feb  2014 - dec 2018","description":"Structural linear and nonlinear analysis of the intermediate engine mount for LEAP-1, starting from the creation of finite element model, application of boundary conditions and definition materials property, and ending with the launch of the calculation and post processing of results. Life time calculation and modal analysis to determine natural frequencies. Software I used: ICEM (to create the mesh) Patran (to create meshing and boundary conditions) Ansys Workbench (for geometry preparation, to create mesh, boundary condition and to start the calculation) Samcef (to create condition to the limits and launch of the linear / non-linear computation (asef / mechanics)) Abaqus (to create boundary condition and to start the computation linear / nonlinear) At the end, an analysis of the results, and a report."},"2":{"employe":"Web Developer","company":"Plusmedia - Samara","date":"jan 2019 – feb 2021","description":"Development, support and seo promotion of websites of any complexity on cms modx, bitrix, simpla, wordperss, joomla. Working with API of modx and bitrix. Preparing of environment for the website release, installation of modules (nginx, apache, php, sql etc) and their configuration. Request processing speed optimization on the website. Languages used in development: html5, css3, javascript, jquery, php, mysql. At the moment I am studying the development of websites on React."},"3":{"employe":"frontend developer","company":"SKB Kontur","date":"mar 2021 – to Present","description":"Develop the SPA in React JS framework, working with Redux architecture using complex Object-Oriented concepts in improving the performance of the websites."}},"vZ":{"Java Script ES5/ES6/ES7":{"1":{"name":"Webdev","link":"./portfolios/webdev/","image":"webdev.png"},"2":{"name":"Calculator","link":"./portfolios/calculator/","image":"calculator.png"},"3":{"name":"Momentum","link":"./portfolios/momentum/","image":"momentum.png"},"4":{"name":"Virtual keyboard","link":"./portfolios/virtual-keyboard/","image":"virtual-keyboard.png"},"5":{"name":"Pure water","link":"./portfolios/pure-water/","image":"pure-water.png"},"6":{"name":"Timeline dashboard","link":"./portfolios/timeline-dashboard/","image":"timeline-dashboard.png"}}},"nb":{"CMS / Frameworks / library":{"ReactJS, Redux":"45%","React Components":"45%","Node JS":"30%","Bitrix, MODX, WordPress":"70%","Jquery":"70%"},"Languages":{"HTML5":"90%","CSS3":"90%","JavaScript ES5/6/7":"40%","TypeScript":"40%","PHP7+":"40%","SQL":"40%"},"Other":{"linux":"40%","apache/nginx":"45%","git/git flow":"40%","webpack/gulp":"10%","SASS/LESS":"60%","Storybook":"40%","MongoDB":"20%"}},"dK":{"1":{"language":"english","level":"A2","description":"intermediate, conversational, competent"},"2":{"language":"french","level":"B1","description":"had experience of correspondence and communication with native speakers"}}}');function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.font="Helvetica",this.headColor="555555",this.textSpaceAfter=100,this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=new docx.Document({background:{color:"C45911"}});e.addSection({properties:{},children:[this.h1("Azad Mamedov"),this.space(),this.text("Samara 443058","555555",18),this.text("azad_63_mamedov@mail.ru","0366d6",18),this.text("+7 (927) 695 15 62","555555",18),this.text("https://www.linkedin.com/in/azad-mamedov-0563489a/","0366d6",18),this.space(200),this.h2("Work Experience"),this.space(),this.h3("Frontend developer"),this.text("SKB Kontur - Samara","888888",18),this.text("mar 2021 – to Present","888888",18),this.text("Develop the SPA in React JS framework, working with Redux architecture using complex Object-Oriented concepts in improving the performance of the websites."),this.text("Languages/Frameworks/Libraries: html5, css3, saas/scss, js es5/6/7, TypeScript, ReactJS, React Component, Redux, NodeJS","555555",18),this.text("Tools: VS Code, git, webpack, babel, Storybook, photoshop, figma","555555",18),this.space(1),this.h3("Web Developer"),this.text("Plusmedia - Samara","888888",18),this.text("january 2019 – feb 2021","888888",18),this.text("Development, support and seo promotion of websites of any complexity on cms modx, bitrix, simpla, wordperss, joomla. Working with API of modx and bitrix. Preparing of environment for the website release, installation of modules (nginx, apache, php, sql etc) and their configuration.","555555",18),this.text("Request processing speed optimization on the website.","555555",18),this.text("Languages: html5, css3, jquery, php7.x, mysql","555555",18),this.text("Tools: webpack, babel, gulp, git, photoshop, figma, VS Code, Sublime Text, PhpStorm, Intellij IDEA, Eclipse, netbeans","555555",18),this.text("CMS: Bitrix, MODX REVO/EVO, WordPress, Joomla, Simpla, UMI CMS","555555",18),this.text("Frameworks / libraries: react js, node js, codeigniter, yii, laravel","555555",18),this.text("IDE: VS Code, Sublime, PhpStorm, Intellij IDEA, Eclipse, Netbeans","555555",18),this.text("Other: Linux, Nginx, Apache","555555",18),this.space(1),this.h3("Mechanical engineer"),this.text("Safran SMARTEC - Samara","888888",18),this.text("february 2014 - december 2018","888888",18),this.text("Structural linear and nonlinear analysis of the intermediate engine mount for LEAP-1, starting from the creation of finite element model, application of boundary conditions and definition materials property, and ending with the launch of the calculation and post processing of results. Life time calculation and modal analysis to determine natural frequencies.","555555",18),this.text("Software I used :","555555",18),this.text("ICEM (to create finite element model (FEM))","555555",18),this.text("Patran (to create FEM and for the application of the boundary conditions)","555555",18),this.text("Ansys Workbench (for geometry preparation, to create FEM, for the application of the boundary conditions and to launch the calculation))","555555",18),this.text("Samcef (to create of the boundary conditions and to launch of the linear / non-linear calculation (asef / mechanics))","555555",18),this.text("Abaqus (to create of the boundary conditions and to launch of the linear / non-linear calculation)","555555",18),this.space(200),this.h2("Education"),this.space(),this.h3("Master’s Degree – Aircraft Engine"),this.text("Samara State Aerospace University","888888",18),this.text("september 2008 - july 2014","888888",18),this.space(200),this.h2("Skills"),this.space(),this.text("HTML5 (3 year), CSS3 (3 year), JS ES5/ES7 (3 year), Node JS (0.5 year), React JS (0.5 year), Webpack (0.5 year), php7.x (2 year), MySQL (1 year), Ansys Workbench (5 year), Patran (5 year), Samcef (4 year), Abaqus (4 year), ICEM (4 year), NX Unigraphics (4 year), Catia (4 year)","888888",18),this.space(200),this.h2("More"),this.space(),this.h3("Languages"),this.text("French: Reading/Writing/Communication","555555",18),this.text("English: Pre-Intermediate","555555",18),this.space(1)]}),docx.Packer.toBlob(e).then((function(e){console.log(e),saveAs(e,"Azad_MAMEDOV_CV_En.docx"),console.log("Document created successfully")}))}},{key:"h1",value:function(e){return new docx.Paragraph({children:[new docx.TextRun({text:e,bold:!0,size:40,color:this.headColor,font:{name:this.font}})],border:{bottom:{color:"cccddd",value:"single",size:6,space:5}}})}},{key:"h2",value:function(e){return new docx.Paragraph({children:[new docx.TextRun({text:e,bold:!1,size:32,color:this.headColor,font:{name:this.font}})],border:{bottom:{color:"cccddd",value:"single",size:6,space:5}}})}},{key:"h3",value:function(e){return new docx.Paragraph({children:[new docx.TextRun({text:e,bold:!0,size:24,color:this.headColor,font:{name:this.font}})],spacing:{after:this.textSpaceAfter}})}},{key:"h4",value:function(e){return new docx.Paragraph({children:[new docx.TextRun({text:e,bold:!0,size:22,color:this.headColor,font:{name:this.font}})]})}},{key:"text",value:function(e,t,n){return new docx.Paragraph({children:[new docx.TextRun({text:e,bold:!1,size:n,font:{name:this.font},color:t})],spacing:{after:this.textSpaceAfter}})}},{key:"space",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;return new docx.Paragraph({spacing:{after:e}})}},{key:"line",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cccddd",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return new docx.Paragraph({border:{bottom:{color:e,value:"single",size:t}}})}}])&&v(t.prototype,n),r&&v(t,r),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.font="Helvetica",this.headColor="555555",this.textSpaceAfter=100,this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=new docx.Document({background:{color:"C45911"}});e.addSection({properties:{},children:[this.h1("Azad Mamedov"),this.space(),this.text("Samara 443058","555555",18),this.text("azad_63_mamedov@mail.ru","0366d6",18),this.text("+7 (927) 695 15 62","555555",18),this.text("https://www.linkedin.com/in/azad-mamedov-0563489a/","0366d6",18),this.space(200),this.h2("Expérience professionnelle"),this.space(),this.h3("Frontend développeur"),this.text("SKB Kontur - Samara","888888",18),this.text("mars 2021 – actuellement","888888",18),this.text("Développer le SPA dans le framework React JS, en travaillant avec l'architecture Redux en utilisant des concepts complexes orientés objet pour améliorer les performances des sites Web"),this.text("Langues/Frameworks/Bibliothèques: html5, css3, saas/scss, js es5/6/7, TypeScript, ReactJS, React Component, Redux, NodeJS","555555",18),this.text("Outils: VS Code, git, webpack, babel, Storybook, photoshop, figma","555555",18),this.space(1),this.h3("Développeur Web"),this.text("Plusmedia - Samara","888888",18),this.text("janvier 2019 - février 2021","888888",18),this.text("Développement, support et promotion de sites sur cms modx, bitrix, simpla, wordperss. Préparation du serveur pour la création ou le déplacement du site (installation des modules nécessaires: nginx, php, mysql, etc., configuration du serveur pour un fonctionnement optimal du site).","555555",18),this.text("Optimisation du site par la vitesse.","555555",18),this.text("Langues: html5, css3, js es5/es6, php7.x, mysql","555555",18),this.text("Outils: webpack, babel, gulp, git, photoshop, figma, VS Code, Sublime Text, PhpStorm, Intellij IDEA, Eclipse, netbeans","555555",18),this.text("CMS: Bitrix, MODX REVO/EVO, WordPress, Joomla, Simpla, UMI CMS","555555",18),this.text("Frameworks / bibliothèques: react js, node js, codeigniter, yii, laravel","555555",18),this.text("IDE: VS Code, Sublime, PhpStorm, Intellij IDEA, Eclipse, Netbeans","555555",18),this.text("Autres: Linux, Nginx, Apache","555555",18),this.space(1),this.h3("Ingénieur mecanique"),this.text("Safran SMARTEC - Samara","888888",18),this.text("février 2014 - décembre 2018","888888",18),this.text("Création du maillage des modèles 2d et 3d. Création des conditions aux limites pour les instants différents. Les calculs mécaniques pour les modèles globales du carter intermédiaire du moteur LEAP-1 (A/B/C). Les calculs mécaniques pour le modèles zoom dans les zones très chargés. Il s’agit des calculs linéaire et non-linéaire. Les calculs modal pour déterminer des fréquences propres. Calculs durée de vie de la carter intermédiaire.","555555",18),this.text("Logiciel que j’ai utilisés :","555555",18),this.text("ICEM (pour créer le maillage)","555555",18),this.text("Patran (pour creer maillage et condition aux limites)","555555",18),this.text("Ansys Workbench (pour préparation de la géométrie, créer du maillage, condition aux limites et lancer du calcul)","555555",18),this.text("Samcef (pour créer condition aux limites et lancer du calcul linéaire/non-linéaire(asef/mécano))","555555",18),this.text("Abaqus (pour créer condition aux limites et lancer du calcul linéaire/non-linéaire)","555555",18),this.space(200),this.h2("Formation"),this.space(),this.h3("Baccalauréat en Moteur d'avion"),this.text("Aéronautique Université Samara État nommé d'après Académicien SP Korolev - Samara","888888",18),this.text("septembre 2008 - juillet 2014","888888",18),this.space(200),this.h2("Compétences"),this.space(),this.text("HTML5 (3 ans), CSS3 (3 ans), JS ES5/ES7 (3 ans), Node JS (0.5 ans), React JS (0.5 ans), Webpack (0.5 ans), php7.x (2 ans), MySQL (1 an), Ansys Workbench (5 ans), Patran (5 ans), Samcef (4 ans), Abaqus (4 ans), ICEM (4 ans), NX Unigraphics (4 ans), Catia (4 ans)","888888",18),this.space(200),this.h2("Divers"),this.space(),this.h3("Langue"),this.text("Français: Lu/Ecrit/Parlé","555555",18),this.text("Anglais: scolaire","555555",18),this.space(1),this.h3("A touts"),this.text("Capacité d'adaptation - Travail en équipe - Dynamique - Permis de conduite type B","555555",18),this.text("Sens du contact et de la communication","555555",18)]}),docx.Packer.toBlob(e).then((function(e){console.log(e),saveAs(e,"Azad_MAMEDOV_CV_Fr.docx"),console.log("Document created successfully")}))}},{key:"h1",value:function(e){return new docx.Paragraph({children:[new docx.TextRun({text:e,bold:!0,size:40,color:this.headColor,font:{name:this.font}})],border:{bottom:{color:"cccddd",value:"single",size:6,space:5}}})}},{key:"h2",value:function(e){return new docx.Paragraph({children:[new docx.TextRun({text:e,bold:!1,size:32,color:this.headColor,font:{name:this.font}})],border:{bottom:{color:"cccddd",value:"single",size:6,space:5}}})}},{key:"h3",value:function(e){return new docx.Paragraph({children:[new docx.TextRun({text:e,bold:!0,size:24,color:this.headColor,font:{name:this.font}})],spacing:{after:this.textSpaceAfter}})}},{key:"h4",value:function(e){return new docx.Paragraph({children:[new docx.TextRun({text:e,bold:!0,size:22,color:this.headColor,font:{name:this.font}})]})}},{key:"text",value:function(e,t,n){return new docx.Paragraph({children:[new docx.TextRun({text:e,bold:!1,size:n,font:{name:this.font},color:t})],spacing:{after:this.textSpaceAfter}})}},{key:"space",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;return new docx.Paragraph({spacing:{after:e}})}},{key:"line",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cccddd",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return new docx.Paragraph({border:{bottom:{color:e,value:"single",size:t}}})}}])&&g(t.prototype,n),r&&g(t,r),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapper=t}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=i("section","section-block",!1,"about");r(e,this.title()),r(e,this.socials()),r(this.wrapper,e)}},{key:"title",value:function(){var e=i("div","about-block-1"),t=i("h1",!1,"Azad MAMEDOV"),n=i("div","position","Frontend Developer"),o=i("div","ava-wrapper"),a=i("img");return a.src=l,a.alt="avatar",r(o,a),r(e,t),r(e,n),r(e,o),e}},{key:"socials",value:function(){var e=i("div","about-block-2"),t=i("div","social-wrap"),n=i("ul"),o=m.Jx;for(var a in o)if(o[a].href&&o[a]["font-awesome"]){var s=i("li"),l=i("a",!1,!1,!1,o[a].href,o[a].title);l.target="_blank";var c=i("i",o[a]["font-awesome"]);r(l,c),r(s,l),r(n,s)}r(t,n),r(e,t),r(e,this.coverLeter());var u=i("div","btn-cv-wrap");return r(u,this.btnCVDownloadEn()),r(u,this.btnCVDownloadFr()),r(e,u),e}},{key:"coverLeter",value:function(){var e=i("div","about-text content-wrapper"),t=i("p",!1,m.jZ);return r(e,t),e}},{key:"btnCVDownloadEn",value:function(){var e=i("button","btn-default","Download CV En","download_pdf");return e.addEventListener("click",(function(e){return new b})),e}},{key:"btnCVDownloadFr",value:function(){var e=i("button","btn-default","Download CV Fr","download_pdf");return e.addEventListener("click",(function(e){return new y})),e}}])&&w(t.prototype,n),o&&w(t,o),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapper=t}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=i("section","section-block",!1,"experience"),t=i("div","content-wrapper"),n=i("h2",!1,"Experience"),o=i("div","experience-wrap"),a=0,s=m.b8;for(var l in s){var c=i("div","experience-block experience-block-".concat(a%2==0?"left":"right")),u=i("h3",!1,s[l].employe),d=i("div","experience-block-text"),p=i("strong",!1,"".concat(s[l].company," ")),f=i("em",!1,"(".concat(s[l].date,")")),h=i("div"),v=i("p",!1,s[l].description),b=i("div","fa fa-circle experience-point");r(h,p),r(h,f),r(h,v),r(d,h),r(c,u),r(c,d),r(c,b),r(o,c),a++}r(t,n),r(t,o),r(e,t),r(this.wrapper,e)}}])&&k(t.prototype,n),o&&k(t,o),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapper=t}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=i("section","section-block",!1,"education"),t=i("div","content-wrapper"),n=i("h2",!1,"Education"),o=i("div","experience-wrap"),a=0,s=m.f3;for(var l in s){var c=i("div","experience-block experience-block-".concat(a%2==0?"left":"right")),u=i("h3",!1,s[l].degree),d=i("div","experience-block-text"),p=i("strong",!1,"".concat(s[l].establishment," ")),f=i("em",!1,"(".concat(s[l].date,")")),h=i("div"),v=i("p",!1,s[l].description),b=i("div","fa fa-circle experience-point");r(h,p),r(h,f),r(h,v),r(d,h),r(c,u),r(c,d),r(c,b),r(o,c),a++}r(t,n),r(t,o),r(e,t),r(this.wrapper,e)}}])&&E(t.prototype,n),o&&E(t,o),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapper=t}var t,o,a;return t=e,(o=[{key:"init",value:function(){var e=i("section","section-block",!1,"portfolios"),t=i("div","content-wrapper"),o=i("h2",!1,"Portfolios"),a=i("div","portfolios-wrap"),s=m.vZ;for(var l in s){var c=i("h3","portfolios-title",l),u=i("div","portfolios-list"),d=s[l],p=function(e){var t={};return e.keys().map((function(n,r){t[n.replace("./","")]=e(n)})),t}(n(2991));for(var f in d)if(d[f].image.length>0){var h=i("div","portfolios-list-item"),v=i("a"),b=i("div","portfolios-list-item-img"),g=i("img"),y=i("div","portfolios-list-item-name"),w=d[f].image;g.src=p[w].default,g.alt=d[f].name,v.href=d[f].link,v.setAttribute("target","_blank"),y.innerHTML=d[f].name,r(b,g),r(v,b),r(v,y),r(h,v),r(u,h)}r(a,c),r(a,u)}r(t,o),r(t,a),r(e,t),r(this.wrapper,e)}}])&&C(t.prototype,o),a&&C(t,a),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapper=t}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=i("section","section-block",!1,"skills"),t=i("div","content-wrapper"),n=i("h2",!1,"Skills"),o=i("div","skills-wrap"),a=m.nb,s=0;for(var l in a){s++;var c=i("div","skills-block skills-block-"+s),u=i("h4",!1,l);r(c,u),r(o,c);var d=a[l];for(var p in d){var f=i("div","skill-progress");f.innerHTML='\n                \t\t\t\t\t<div class="skill-progress-title">\n                \t\t\t\t\t\t<span class="skill-progress-title-percent">'.concat(d[p],'</span>\n                \t\t\t\t\t\t<span class="skill-progress-title-item">').concat(p,'</span>\n                \t\t\t\t\t</div>\n                \t\t\t\t\t<div class="skill-progress-max"></div>\n                \t\t\t\t\t<div class="skill-progress-current" style="width: ').concat(d[p],';">\n                \t\t\t\t\t\t<div class="skill-progress-current-inner"></div>\n                \t\t\t\t\t</div>\n                \t\t\t\t\t'),r(c,f)}}r(t,n),r(t,o),r(e,t),r(this.wrapper,e)}}])&&L(t.prototype,n),o&&L(t,o),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapper=t}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=i("section","section-block",!1,"languages"),t=i("div","content-wrapper"),n=i("h2",!1,"Languages"),o=i("div","language-wrap"),a=i("ul","language-items"),s=m.dK;for(var l in s){var c=i("li"),u=i("span","language-item-name","".concat(this.upFirstLettre(s[l].language),": ")),d=i("span","language-item-value","( ".concat(s[l].level," ").concat(s[l].description," )"));r(c,u),r(c,d),r(a,c)}r(o,a),r(t,n),r(t,o),r(e,t),r(this.wrapper,e)}},{key:"upFirstLettre",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}])&&T(t.prototype,n),o&&T(t,o),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapper=t}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=i("section","section-block",!1,"contact"),t=i("div","content-wrapper"),n=i("h2",!1,"Contact"),o=i("div","contact-wrapper"),a=i("ul","contact-items"),s=m.Jx;for(var c in s){var u=i("li"),d=i("span","contact-item-name","".concat(this.upFirstLettre(c),": ")),p="";s[c].href&&""!==s[c].href?(p=i("a","contact-item-value","".concat(s[c].title))).href=s[c].href:p=i("span","contact-item-value","".concat(s[c].title)),r(u,d),r(u,p),r(a,u)}var f=i("div","contact-photo"),h=i("img");h.src=l,r(f,h),r(o,a),r(o,f),r(t,n),r(t,o),r(e,t),r(this.wrapper,e)}},{key:"upFirstLettre",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}])&&j(t.prototype,n),o&&j(t,o),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapper=t}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=i("div","main-wrapper");new x(e).init(),new S(e).init(),new A(e).init(),new I(e).init(),new P(e).init(),new M(e).init(),new _(e).init(),r(this.wrapper,e)}}])&&O(t.prototype,n),o&&O(t,o),e}();function R(e){return function(e){if(Array.isArray(e))return q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=m.nb,F=m.vZ;function J(){var e=0;for(var t in B)for(var n in e++,skillItemSect=W("div","skills-block skills-block-"+e),skillItemSect.innerHTML="<h4>".concat(t,"</h4>"),document.querySelector(".skills-wrap").appendChild(skillItemSect),sect=B[t],sect)skillItemElm=W("div","skill-progress"),skillItemElm.innerHTML='\n                                        <div class="skill-progress-title">\n                                            <span class="skill-progress-title-percent">'.concat(sect[n],'</span>\n                                            <span class="skill-progress-title-item">').concat(n,'</span>\n                                        </div>\n                                        <div class="skill-progress-max"></div>\n                                        <div class="skill-progress-current" style="width: ').concat(sect[n],';">\n                                            <div class="skill-progress-current-inner"></div>\n                                        </div>\n                                        '),skillItemSect.appendChild(skillItemElm)}function V(){window.pageYOffset>0&&(window.scrollBy(0,-80),setTimeout(V,5))}function W(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=document.createElement(e);return n&&(t=r.classList).add.apply(t,R(n.split(" "))),r}window.onload=function(){var e,t=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=z(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}(document.querySelectorAll("a.scroll-to"));try{var n=function(){var t=e.value;t.addEventListener("click",(function(e){e.preventDefault();var n,r,o,a=t.getAttribute("href");n=document.querySelector(a),r=document.body.getBoundingClientRect().top,o=n.getBoundingClientRect().top-r-40,console.log(o),window.scrollTo({top:o,behavior:"smooth"}),burger_menu_close.click()}))};for(t.s();!(e=t.n()).done;)n()}catch(e){t.e(e)}finally{t.f()}window.addEventListener("scroll",(function(e){elmSkills=document.getElementById("skills"),skillsWrap=elmSkills.querySelector(".skills-wrap"),offset=150,document.documentElement.scrollTop+offset>=elmSkills.offsetTop&&!skillsWrap.childNodes.length&&J()})),document.getElementById("download_pdf").addEventListener("click",(function(){var e;J(),e=document.getElementById("toPrint"),html2pdf().set({margin:1,filename:"Azad_MAMEDOV_CV.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"mm",format:[310,414.5],orientation:"portrait"}}).from(e).save()})),function(){for(var e in portfoliosWrap=document.querySelector(".portfolios-wrapper"),F){for(var t in e.length>0&&(sectionTitle=W("h3","portfolios-title"),sectionTitle.innerHTML=e),portfoliosList=W("div","portfolios-list"),sect=F[e],sect)sect[t].image.length>0&&(portfoliosItem=W("div","portfolios-list-item"),portfoliosItemLink=W("a"),portfoliosItemImgWrap=W("div","portfolios-list-item-img"),portfoliosItemImg=W("img"),portfoliosItemName=W("div","portfolios-list-item-name"),portfoliosItemImg.src=sect[t].image,portfoliosItemImg.alt=sect[t].name,portfoliosItemLink.href=sect[t].link,portfoliosItemLink.setAttribute("target","_blank"),portfoliosItemName.innerHTML=sect[t].name,portfoliosItemImgWrap.appendChild(portfoliosItemImg),portfoliosItemLink.appendChild(portfoliosItemImgWrap),portfoliosItemLink.appendChild(portfoliosItemName),portfoliosItem.appendChild(portfoliosItemLink),portfoliosList.appendChild(portfoliosItem));portfoliosWrap.appendChild(sectionTitle),portfoliosWrap.appendChild(portfoliosList)}}()},document.addEventListener("click",(function(e){switch(e.target.id){case"burger_menu":document.getElementById("burger_menu_overlay").classList.add("overlay-active"),document.querySelector("header nav.mobile").classList.add("mobile-nav-active");break;case"burger_menu_close":document.querySelector("header nav.mobile").classList.remove("mobile-nav-active"),document.getElementById("burger_menu_overlay").classList.remove("overlay-active");break;case"burger_menu_overlay":document.getElementById("burger_menu_close").click(),document.getElementById("burger_menu_overlay").classList.remove("overlay-active");break;case"goTopBtn":V()}})),window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&goTopBtn.classList.add("back_to_top-show"),e<t&&goTopBtn.classList.remove("back_to_top-show")}));var N=document.createDocumentFragment();new p(N).init(),new D(N).init(),new h(N).init(),r(document.body,N),window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&goTopBtn.classList.add("back_to_top-show");e<t&&goTopBtn.classList.remove("back_to_top-show")})),goTopBtn.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-80),setTimeout(e,5))}))},1048:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"dc192a6a6e4eded3f3fe4e4c89d0a13d.png"},4335:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"1e135c6b3ffa7dc77ad439bebcb89609.png"},8104:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"0b5dc269b3bd5c6b2fdde301de0565d3.png"},7109:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"ddcd3833c29d8dcd1e891b04c9b35edb.png"},943:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"0b01f184c4499624f2c344cf508c79bc.png"},2939:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"587ac7cbe687b7dc5705763be8020cd5.png"},2991:(e,t,n)=>{var r={"./calculator.png":1048,"./momentum.png":4335,"./pure-water.png":8104,"./timeline-dashboard.png":7109,"./virtual-keyboard.png":943,"./webdev.png":2939};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=2991}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.x=e=>{},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0},t=[[1202,883],[8477,883]],r=e=>{},o=(o,a)=>{for(var i,s,[l,c,u,d]=a,p=0,f=[];p<l.length;p++)s=l[p],n.o(e,s)&&e[s]&&f.push(e[s][0]),e[s]=0;for(i in c)n.o(c,i)&&(n.m[i]=c[i]);for(u&&u(n),o&&o(a);f.length;)f.shift()();return d&&t.push.apply(t,d),r()},a=self.webpackChunk=self.webpackChunk||[];function i(){for(var r,o=0;o<t.length;o++){for(var a=t[o],i=!0,s=1;s<a.length;s++){var l=a[s];0!==e[l]&&(i=!1)}i&&(t.splice(o--,1),r=n(n.s=a[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),r}a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a));var s=n.x;n.x=()=>(n.x=s||(e=>{}),(r=i)())})(),n.x()})();