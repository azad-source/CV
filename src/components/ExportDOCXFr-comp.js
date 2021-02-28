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
                this.h2('Expérience professionnelle'),
                this.space(),
                this.h3('Développeur Web'),
                this.text('Plusmedia - Samara', '888888', 18),
                this.text('janvier 2019 - actuellement', '888888', 18),
                this.text(`Développement, support et promotion de sites sur cms modx, bitrix, simpla, wordperss. Préparation du serveur pour la création ou le déplacement du site (installation des modules nécessaires: nginx, php, mysql, etc., configuration du serveur pour un fonctionnement optimal du site).`, '555555', 18),
                this.text('Optimisation du site par la vitesse.', '555555', 18),
                this.text('Langues: html5, css3, js es5/es6, php7.x, mysql', '555555', 18),
                this.text('Outils: webpack, babel, gulp, git, photoshop, figma, VS Code, Sublime Text, PhpStorm, Intellij IDEA, Eclipse, netbeans', '555555', 18),
                this.text('CMS: Bitrix, MODX REVO/EVO, WordPress, Joomla, Simpla, UMI CMS', '555555', 18),
                this.text('Frameworks / bibliothèques: react js, node js, codeigniter, yii, laravel', '555555', 18),
                this.text('IDE: VS Code, Sublime, PhpStorm, Intellij IDEA, Eclipse, Netbeans', '555555', 18),
                this.text('Autres: Linux, Nginx, Apache', '555555', 18),
                this.space(1),
                this.h3('Ingénieur mecanique'),
                this.text('Safran SMARTEC - Samara', '888888', 18),
                this.text('février 2014 - décembre 2018', '888888', 18),
                this.text('Création du maillage des modèles 2d et 3d. Création des conditions aux limites pour les instants différents. Les calculs mécaniques pour les modèles globales du carter intermédiaire du moteur LEAP-1 (A/B/C). Les calculs mécaniques pour le modèles zoom dans les zones très chargés. Il s’agit des calculs linéaire et non-linéaire. Les calculs modal pour déterminer des fréquences propres. Calculs durée de vie de la carter intermédiaire.', '555555', 18),
                this.text('Logiciel que j’ai utilisés :', '555555', 18),
                this.text('ICEM (pour créer le maillage)', '555555', 18),
                this.text('Patran (pour creer maillage et condition aux limites)', '555555', 18),
                this.text('Ansys Workbench (pour préparation de la géométrie, créer du maillage, condition aux limites et lancer du calcul)', '555555', 18),
                this.text('Samcef (pour créer condition aux limites et lancer du calcul linéaire/non-linéaire(asef/mécano))', '555555', 18),
                this.text('Abaqus (pour créer condition aux limites et lancer du calcul linéaire/non-linéaire)', '555555', 18),

                // Education
                this.space(200),
                this.h2('Formation'),
                this.space(),
                this.h3(`Baccalauréat en Moteur d'avion`),
                this.text(`Aéronautique Université Samara État nommé d'après Académicien SP Korolev - Samara`, '888888', 18),
                this.text('septembre 2008 - juillet 2014', '888888', 18),

                // Skills
                this.space(200),
                this.h2(`Compétences`),
                this.space(),
                this.text(`HTML5 (3 ans), CSS3 (3 ans), JS ES5/ES7 (3 ans), Node JS (0.5 ans), React JS (0.5 ans), Webpack (0.5 ans), php7.x (2 ans), MySQL (1 an), Ansys Workbench (5 ans), Patran (5 ans), Samcef (4 ans), Abaqus (4 ans), ICEM (4 ans), NX Unigraphics (4 ans), Catia (4 ans)`, '888888', 18),

                // Divers
                this.space(200),
                this.h2(`Divers`),
                this.space(),
                this.h3(`Langue`),
                this.text(`Français: Lu/Ecrit/Parlé`, '555555', 18),
                this.text(`Anglais: scolaire`, '555555', 18),
                this.space(1),
                this.h3(`A touts`),
                this.text(`Capacité d'adaptation - Travail en équipe - Dynamique - Permis de conduite type B`, '555555', 18),
                this.text(`Sens du contact et de la communication`, '555555', 18),
            ]
        });

        docx.Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, "Azad_MAMEDOV_CV_Fr.docx");
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