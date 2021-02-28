import data from '@data_folder/data.json';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit'
import NotoSansJPRegular from '../../src/assets/fonts/NotoSansJP-Regular.otf';
import NotoSansJPBold from '../../src/assets/fonts/NotoSansJP-Bold.otf';
import NotoSansJPMedium from '../../src/assets/fonts/NotoSansJP-Medium.otf';
import NotoSansJPThin from '../../src/assets/fonts/NotoSansJP-Thin.otf';

export default class {
    constructor() {
        this.init();
        this.currentPosX = 50;
        this.currentPosY = 20; // top space
        this.fontSize = 12;
        this.fontSizeH1 = 20;
        this.fontSizeH2 = 18;
        this.fontSizeH3 = 16;
        this.fontSizeH4 = 14;
        this.lineHeight = 15;
        this.textColor = rgb(0.1, 0.1, 0.1);
        this.fontUrlRegular = NotoSansJPRegular;
        this.fontUrlBold = NotoSansJPBold;
        this.fontUrlMedium = NotoSansJPMedium;
        this.fontUrlThin = NotoSansJPThin;
    }

    async init() {
        console.log('@fonts_folder/YuseiMagic-Regular.ttf');
        const pdfDoc = await PDFDocument.create();
        pdfDoc.registerFontkit(fontkit);

        const fontBytesRegular = await fetch(this.fontUrlRegular).then((res) => res.arrayBuffer());
        const fontBytesBold = await fetch(this.fontUrlBold).then((res) => res.arrayBuffer());
        const fontBytesMedium = await fetch(this.fontUrlMedium).then((res) => res.arrayBuffer());
        const fontBytesThin = await fetch(this.fontUrlThin).then((res) => res.arrayBuffer());
        this.fontRegular = await pdfDoc.embedFont(fontBytesRegular);
        this.fontBold = await pdfDoc.embedFont(fontBytesBold);
        this.fontMedium = await pdfDoc.embedFont(fontBytesMedium);
        this.fontThin = await pdfDoc.embedFont(fontBytesThin);

        const page = pdfDoc.addPage();
        this.width = page.getSize().width;
        this.height = page.getSize().height;
        page.drawText(data['contacts']['Name']['title'], this.h1());
        page.drawText(data['contacts']['Position']['title'], this.h2());
        page.drawText('_______________________________________________________________', this.line());

        page.drawText('Address:', this.textV1(false, this.currentPosX, this.fontMedium));
        page.drawText(`${data['contacts']['Country']['title']}, ${data['contacts']['Region']['title']}, ${data['contacts']['City']['title']}`, this.textV1(true, 120, this.fontThin));

        page.drawText('E-mail:', this.textV1(false, this.currentPosX, this.fontMedium));
        page.drawText(`${data['contacts']['e-mail']['title']}`, this.textV1(true, 120, this.fontThin));

        page.drawText('Phone:', this.textV1(false, this.currentPosX, this.fontMedium));
        page.drawText(`${data['contacts']['Phone']['title']}`, this.textV1(true, 120, this.fontThin));

        page.drawText('', this.line());
        page.drawText('Education', this.h2());
        let educations = data['education'];
        for (let key in educations) {
            page.drawText(`${key}. ${educations[key]['date']}`, this.textV1(false, this.currentPosX, this.fontRegular));
            page.drawText(`${educations[key]['degree']}`, this.textV1(false, this.currentPosX, this.fontBold));
            page.drawText('', this.line());
        }

        page.drawText('', this.line());
        page.drawText('Experience', this.h2());
        let experiences = data['experience'];

        for (let key in experiences) {
            page.drawText(`${key}. ${experiences[key]['date']}`, this.textV1(false, this.currentPosX, this.fontRegular));
            page.drawText(`${experiences[key]['employe']}`, this.textV1(false, this.currentPosX, this.fontBold));
            page.drawText(`${experiences[key]['company']}`, this.textV1(false, this.currentPosX, this.fontMedium));
            page.drawText(`${experiences[key]['description']}`, this.textV1(false, this.currentPosX, this.fontThin, 500));
            page.drawText('', this.line());
        }


        const pdfBytes = await pdfDoc.save();
        this.saveToFile("CV_Azad_MAMEDOV.pdf", pdfBytes);
    }

    line() {
        this.currentPosY = this.currentPosY + this.fontSize;
        return {
            x: this.currentPosX,
            y: this.height - this.currentPosY,
            size: this.fontSize,
            font: this.fontThin,
            color: this.textColor
        }
    }

    textV1(inline = false, x = this.currentPosX, font, maxWidth) {
        this.currentPosY = (!inline) ? this.currentPosY + this.fontSize + this.lineHeight : this.currentPosY;
        return {
            x: x,
            y: this.height - this.currentPosY,
            size: this.fontSize,
            font: font,
            color: this.textColor,
            maxWidth: maxWidth
        }
    }

    h1() {
        this.currentPosY = this.currentPosY + this.fontSizeH1 + this.lineHeight;
        return {
            x: this.currentPosX,
            y: this.height - this.currentPosY,
            size: this.fontSizeH1,
            font: this.fontBold,
            color: this.textColor
        }
    }

    h2() {
        this.currentPosY = this.currentPosY + this.fontSizeH2 + this.lineHeight;
        return {
            x: this.currentPosX,
            y: this.height - this.currentPosY,
            size: this.fontSizeH2,
            font: this.fontMedium,
            color: this.textColor
        }
    }

    h3() {
        this.currentPosY = this.currentPosY + this.fontSizeH3 + this.lineHeight;
        return {
            x: this.currentPosX,
            y: this.height - this.currentPosY,
            size: this.fontSizeH3,
            font: this.fontMedium,
            color: this.textColor,
        }
    }

    saveToFile(reportName, byte) {
        var blob = new Blob([byte], { type: "application/pdf" });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        var fileName = reportName;
        link.download = fileName;
        link.click();
    };


}