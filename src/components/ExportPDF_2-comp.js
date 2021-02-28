import html2pdf from '../../node_modules/html2pdf.js';

export default class {
    constructor() {
        this.init();
    }

    init() {
        var element = document.querySelector('.main-wrapper');


        var opt = {
            margin: 1,
            filename: 'Azad_MAMEDOV_CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: [2610, 3414.5], orientation: 'portrait' }
        };

        html2pdf().from(element).set(opt).save();
    }
}