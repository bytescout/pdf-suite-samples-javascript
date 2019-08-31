//*******************************************************************************************//
//                                                                                           //
// Download Free Evaluation Version From: https://bytescout.com/download/web-installer       //
//                                                                                           //
// Also available as Web API! Get Your Free API Key: https://app.pdf.co/signup               //
//                                                                                           //
// Copyright © 2017-2019 ByteScout, Inc. All rights reserved.                                //
// https://www.bytescout.com                                                                 //
// https://pdf.co                                                                            //
//                                                                                           //
//*******************************************************************************************//


// function that creates BytescoutPDF instance (defined in BytescoutPDF.js script which have to be included into the same page)
// then calls API methods and properties to create PDF document
// and returns created BytescoutPDF object instance
// this CreatePDF() function is called from Sample.html
// IsInternetExplorer8OrLower parameter indicates if we use IE8 or lower so we CAN'T use images (as it requires HTML5 Canvas available in IE9 or higher). Other browsers should be working fine

// IMPORTANT ABOUT IMAGES: 
// When using Firefox or IE, pdf generation may fail because images are not accessible when pdf generation works
// the solution for this issue is to preload images in main HTML document before running PDF generation
// to preload images, put them into hidden div block "pdfreportimages" - you can see it in the sample.html right after <body> opening tag



function CreatePDF(IsInternetExplorer8OrLower) {

    // create BytescoutPDF object instance
    var pdf = new BytescoutPDF();

    // set document properties: Title, subject, keywords, author name and creator name
    pdf.propertiesSet("Sample document title", "Sample subject", "keyword1, keyword 2, keyword3", "Document Author Name", "Document Creator Name");

    // set page size
    pdf.pageSetSize(BytescoutPDF.A4);

    // set page orientation (BytescoutPDF.PORTRAIT = portrait, BytescoutPDF.LANDSCAPE = landscape)
    pdf.pageSetOrientation(BytescoutPDF.PORTRAIT);

    // add new page
    pdf.pageAdd();

    // set font name
    pdf.fontSetName('Times-Roman');
    // set font size
    pdf.fontSetSize(16);

    // set font style with parameters: bold, italic, underline
    pdf.fontSetStyle(true, false, false, true);

    // set font color in RGB format to 25,25,255 - blue color
    pdf.fontSetColor(0, 0, 255);

    // draw text
    pdf.textAdd(20, 20, 'Trying Bold Style');

    // set font style to bold underline
    pdf.fontSetStyle(true, false, true);

    // set font color to red
    pdf.fontSetColor(255, 0, 0);

    // draw text
    pdf.textAdd(20, 40, 'Trying Bold Underline Style and <s>striked</s> text');

    // set font style to underline
    pdf.fontSetStyle(false, false, true);

    // set font color to green
    pdf.fontSetColor(0, 255, 0);

    // draw text
    pdf.textAdd(20, 60, 'Trying Underline Style');

    // return BytescoutPDF object instance
    return pdf;
}

