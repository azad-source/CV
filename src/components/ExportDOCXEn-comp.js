export default class {
    constructor() {
        this.font = 'Helvetica';
        this.headColor = '555555';
        this.textSpaceAfter = 100;
        this.init();
    }

    init() {
        const doc = new docx.Document({
            background: {
                color: "C45911",
            }
        });

        doc.addSection({
            properties: {},
            children: [
                this.h1('Azad Mamedov'),
                this.space(),

                // Contacts
                this.text('Samara 443058', '555555', 18),
                this.text('azad_63_mamedov@mail.ru', '0366d6', 18),
                this.text('+7 (927) 695 15 62', '555555', 18),
                this.text('https://www.linkedin.com/in/azad-mamedov-0563489a/', '0366d6', 18),

                // Experiences
                this.space(200),
                this.h2('Work Experience'),
                this.space(),
                this.h3('Frontend developer'),
                this.text('SKB Kontur - Samara', '888888', 18),
                this.text('mar 2021 – to Present', '888888', 18),
                this.text(`Develop the SPA in React JS framework, working with Redux architecture using complex Object-Oriented concepts in improving the performance of the websites.`),
                this.text('Languages/Frameworks/Libraries: html5, css3, saas/scss, js es5/6/7, TypeScript, ReactJS, React Component, Redux, NodeJS', '555555', 18),
                this.text('Tools: VS Code, git, webpack, babel, Storybook, photoshop, figma', '555555', 18),
                this.space(1),
                this.h3('Web Developer'),
                this.text('Plusmedia - Samara', '888888', 18),
                this.text('january 2019 – feb 2021', '888888', 18),
                this.text(`Development, support and seo promotion of websites of any complexity on cms modx, bitrix, simpla, wordperss, joomla. Working with API of modx and bitrix. Preparing of environment for the website release, installation of modules (nginx, apache, php, sql etc) and their configuration.`, '555555', 18),
                this.text('Request processing speed optimization on the website.', '555555', 18),
                this.text('Languages: html5, css3, jquery, php7.x, mysql', '555555', 18),
                this.text('Tools: webpack, babel, gulp, git, photoshop, figma, VS Code, Sublime Text, PhpStorm, Intellij IDEA, Eclipse, netbeans', '555555', 18),
                this.text('CMS: Bitrix, MODX REVO/EVO, WordPress, Joomla, Simpla, UMI CMS', '555555', 18),
                this.text('Frameworks / libraries: react js, node js, codeigniter, yii, laravel', '555555', 18),
                this.text('IDE: VS Code, Sublime, PhpStorm, Intellij IDEA, Eclipse, Netbeans', '555555', 18),
                this.text('Other: Linux, Nginx, Apache', '555555', 18),
                this.space(1),
                this.h3('Mechanical engineer'),
                this.text('Safran SMARTEC - Samara', '888888', 18),
                this.text('february 2014 - december 2018', '888888', 18),
                this.text(`Structural linear and nonlinear analysis of the intermediate engine mount for LEAP-1, starting from the creation of finite element model, application of boundary conditions and definition materials property, and ending with the launch of the calculation and post processing of results. Life time calculation and modal analysis to determine natural frequencies.`, '555555', 18),
                this.text('Software I used :', '555555', 18),
                this.text('ICEM (to create finite element model (FEM))', '555555', 18),
                this.text('Patran (to create FEM and for the application of the boundary conditions)', '555555', 18),
                this.text('Ansys Workbench (for geometry preparation, to create FEM, for the application of the boundary conditions and to launch the calculation))', '555555', 18),
                this.text('Samcef (to create of the boundary conditions and to launch of the linear / non-linear calculation (asef / mechanics))', '555555', 18),
                this.text('Abaqus (to create of the boundary conditions and to launch of the linear / non-linear calculation)', '555555', 18),

                // Education
                this.space(200),
                this.h2('Education'),
                this.space(),
                this.h3(`Master’s Degree – Aircraft Engine`),
                this.text(`Samara State Aerospace University`, '888888', 18),
                this.text('september 2008 - july 2014', '888888', 18),

                // Skills
                this.space(200),
                this.h2(`Skills`),
                this.space(),
                this.text(`HTML5 (3 year), CSS3 (3 year), JS ES5/ES7 (3 year), Node JS (0.5 year), React JS (0.5 year), Webpack (0.5 year), php7.x (2 year), MySQL (1 year), Ansys Workbench (5 year), Patran (5 year), Samcef (4 year), Abaqus (4 year), ICEM (4 year), NX Unigraphics (4 year), Catia (4 year)`, '888888', 18),

                // Divers
                this.space(200),
                this.h2(`More`),
                this.space(),
                this.h3(`Languages`),
                this.text(`French: Reading/Writing/Communication`, '555555', 18),
                this.text(`English: Pre-Intermediate`, '555555', 18),
                this.space(1)
            ]
        });

        docx.Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, "Azad_MAMEDOV_CV_En.docx");
            console.log("Document created successfully");
        });

    }

    h1(text) {
        return new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: text,
                    bold: true,
                    size: 40,
                    color: this.headColor,
                    font: {
                        name: this.font
                    }
                })
            ],
            border: {
                bottom: {
                    color: 'cccddd',
                    value: "single",
                    size: 6,
                    space: 5
                }
            }
        })
    }

    h2(text) {
        return new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: text,
                    bold: false,
                    size: 32,
                    color: this.headColor,
                    font: {
                        name: this.font
                    }
                })
            ],
            border: {
                bottom: {
                    color: 'cccddd',
                    value: "single",
                    size: 6,
                    space: 5
                }
            }
        })
    }

    h3(text) {
        return new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: text,
                    bold: true,
                    size: 24,
                    color: this.headColor,
                    font: {
                        name: this.font
                    }
                })
            ],
            spacing: {
                after: this.textSpaceAfter
            }
        })
    }

    h4(text) {
        return new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: text,
                    bold: true,
                    size: 22,
                    color: this.headColor,
                    font: {
                        name: this.font
                    }
                })
            ]
        })
    }

    text(text, color, size) {
        return new docx.Paragraph({
            children: [
                new docx.TextRun({
                    text: text,
                    bold: false,
                    size: size,
                    font: {
                        name: this.font
                    },
                    color: color
                })
            ],
            spacing: {
                after: this.textSpaceAfter
            }
        })
    }

    space(value = 20) {
        return new docx.Paragraph({
            spacing: {
                after: value
            }
        })
    }

    line(color = 'cccddd', size = 6) {
        return new docx.Paragraph({
            border: {
                bottom: {
                    color: color,
                    value: "single",
                    size: size
                }
            }
        })
    }

}