## How to draw invoice with logo and table with pdf generator sdk for javascript in Javascript using ByteScout PDF Suite

### Step-by-step tutorial on how to draw invoice with logo and table with pdf generator sdk for javascript in Javascript

Sample source code below will display you how to manage a complex task like draw invoice with logo and table with pdf generator sdk for javascript in Javascript. ByteScout PDF Suite is the bundle that provides six different SDK libraries to work with PDF from generating rich PDF reports to extracting data from PDF documents and converting them to HTML. This bundle includes PDF (Generator) SDK, PDF Renderer SDK, PDF Extractor SDK, PDF to HTML SDK, PDF Viewer SDK and PDF Generator SDK for Javascript and you can use it to draw invoice with logo and table with pdf generator sdk for javascript with Javascript.

The SDK samples given below describe how to quickly make your application do draw invoice with logo and table with pdf generator sdk for javascript in Javascript with the help of ByteScout PDF Suite. IF you want to implement the functionality, just copy and paste this code for Javascript below into your code editor with your app, compile and run your application. Check Javascript sample code samples to see if they respond to your needs and requirements for the project.

The trial version of ByteScout PDF Suite can be downloaded for free from our website. It also includes source code samples for Javascript and other programming languages.

## REQUEST FREE TECH SUPPORT

[Click here to get in touch](https://bytescout.zendesk.com/hc/en-us/requests/new?subject=ByteScout%20PDF%20Suite%20Question)

or just send email to [support@bytescout.com](mailto:support@bytescout.com?subject=ByteScout%20PDF%20Suite%20Question) 

## ON-PREMISE OFFLINE SDK 

[Get Your 60 Day Free Trial](https://bytescout.com/download/web-installer?utm_source=github-readme)
[Explore SDK Docs](https://bytescout.com/documentation/index.html?utm_source=github-readme)
[Sign Up For Online Training](https://academy.bytescout.com/)


## ON-DEMAND REST WEB API

[Get your API key](https://pdf.co/documentation/api?utm_source=github-readme)
[Explore Web API Documentation](https://pdf.co/documentation/api?utm_source=github-readme)
[Explore Web API Samples](https://github.com/bytescout/ByteScout-SDK-SourceCode/tree/master/PDF.co%20Web%20API)

## VIDEO REVIEW

[https://www.youtube.com/watch?v=NEwNs2b9YN8](https://www.youtube.com/watch?v=NEwNs2b9YN8)




<!-- code block begin -->

##### ****checkdatauri.js:**
    
```
	// checks if we have datauri support in current browser
        // if we have support for datauri support then we can stream generated PDF right into the browser
        // otherwise we should use Downloadify script to allow user to save PDF file
	function CheckDataURISupport(){

	var result = true;
	var checkDataURISupportImage = new Image();

	checkDataURISupportImage.onload = checkDataURISupportImage.onerror = function(){
		if(this.width != 1 || this.height != 1){
			result = false;
		}
	}
	checkDataURISupportImage.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
	// check if we have datauri support in current browser - end

		return result;
	}


```

<!-- code block end -->    

<!-- code block begin -->

##### ****createpdf.js:**
    
```
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
    pdf.propertiesSet('Sample Invoice', 'Invoice #1234', 'invoice, company, customer', 'Document Author', 'Document Creator');

    // set page size
    pdf.pageSetSize(BytescoutPDF.Letter);

    // set portrait page orientation
    pdf.pageSetOrientation(BytescoutPDF.PORTRAIT);

    // add new page
    pdf.pageAdd();

// we can use images only if we are on IE9 or higher (or non-IE browser)
 if (!IsInternetExplorer8OrLower)
 {
    // add logo
    pdf.imageLoadFromUrl('logo.png');
    pdf.imagePlace(20, 20);
 }

    // set font name
    pdf.fontSetName('Times-Roman');

    // add requisites
    pdf.fontSetStyle(true, false, false);
    pdf.fontSetSize(24);
    pdf.textAdd(450, 55, 'INVOICE');

    pdf.fontSetSize(16);
    pdf.textAdd(200, 20, '(keine Rückerstattung)');
 

    pdf.fontSetSize(12);
    pdf.textAdd(50, 90, 'COMPANY NAME', 0);

    pdf.fontSetSize(11);
    pdf.fontSetStyle(false, false, false);
    pdf.textAdd(50, 120, 'Address', 0);
    pdf.textAdd(50, 140, 'Phone, fax', 0);
    pdf.textAdd(50, 160, 'E-mail', 0);

    pdf.textAdd(400, 120, 'DATE', 0);
    pdf.textAdd(400, 140, 'INVOICE #', 0);
    pdf.textAdd(400, 160, 'FOR', 0);

	pdf.textSetBoxPadding(3, 2, 2, 3);
    
    // draw table header
    pdf.graphicsDrawRectangle(50, 200, 520, 220);
    pdf.graphicsDrawLine(50, 220, 570, 220);
    pdf.textSetAlign(BytescoutPDF.CENTER);
    // add 'Description' column
    pdf.textSetBox(50, 200, 220, 20);
    pdf.textAddToBox('Description');
    pdf.graphicsDrawLine(270, 200, 270, 420);
    // add 'Quantity' column
    pdf.textSetBox(270, 200, 80, 20);
    pdf.textAddToBox('Quantity');
    pdf.graphicsDrawLine(350, 200, 350, 420);
    // add 'Price' column
    pdf.textSetBox(350, 200, 100, 20);
    pdf.textAddToBox('Price');
    pdf.graphicsDrawLine(450, 200, 450, 420);
    // add 'Amount' column
    pdf.textSetBox(450, 200, 120, 20);
    pdf.textAddToBox('Amount');

    pdf.textSetAlign(BytescoutPDF.LEFT);
	        
    // fill table content
    for (var row=0; row < 10; row++) {
        pdf.textSetBox(50, 220 + row * 20, 220, 20);
        pdf.textAddToBox('ITEM ' + row);
        pdf.graphicsDrawLine(50, 240 + row * 20, 570, 240 + row * 20);
    }

    // add signature
    pdf.textAdd(390, 470, 'Signature', 0);
    pdf.graphicsDrawLine(450, 470, 570, 470);

    // return BytescoutPDF object instance
    return pdf;
}


```

<!-- code block end -->