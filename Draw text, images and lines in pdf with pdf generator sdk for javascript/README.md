## How to draw text, images and lines in pdf with pdf generator sdk for javascript in Javascript and ByteScout PDF Suite

### Step-by-step tutorial on how to draw text, images and lines in pdf with pdf generator sdk for javascript in Javascript

ByteScout simple and easy to understand tutorials are planned to describe the code for both Javascript beginners and advanced programmers. ByteScout PDF Suite can draw text, images and lines in pdf with pdf generator sdk for javascript. It can be applied from Javascript. ByteScout PDF Suite is the set that includes 6 SDK products to work with PDF from generating rich PDF reports to extracting data from PDF documents and converting them to HTML. This bundle includes PDF (Generator) SDK, PDF Renderer SDK, PDF Extractor SDK, PDF to HTML SDK, PDF Viewer SDK and PDF Generator SDK for Javascript.

Want to save time? You will save a lot of time on writing and testing code as you may just take the Javascript code from ByteScout PDF Suite for draw text, images and lines in pdf with pdf generator sdk for javascript below and use it in your application. Just copy and paste the code into your Javascript application’s code and follow the instructions. This basic programming language sample code for Javascript will do the whole work for you to draw text, images and lines in pdf with pdf generator sdk for javascript.

You can download free trial version of ByteScout PDF Suite from our website to see and try many others source code samples for Javascript.

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
    pdf.propertiesSet("Sample document title", "Sample subject", "keyword1, keyword 2, keyword3", "Document Author Name", "Document Creator Name");

	// set page size
    pdf.pageSetSize(BytescoutPDF.Letter);
    // set page orientation
    pdf.pageSetOrientation(true);

	// add new page
    pdf.pageAdd();

    pdf.fontSetName('Helvetica');
    pdf.fontSetStyle(false, false, false);

    for (var i = 0; i < 5; i++) {
        pdf.fontSetSize(10 + i * 4);
        pdf.textAdd(20 + 70 * i, 20, 'hola');
    }

    pdf.fontSetStyle(false, true, true);
    pdf.textAdd(50, 50, 'hello');
    pdf.fontSetStyle(true, true, true);
    pdf.textAdd(250, 50, 'hello');

    pdf.pageSetOrientation(false);
    pdf.pageAdd();

    pdf.fontSetName('Times-Roman');
    pdf.textAdd(20, 70, 'hello');
    pdf.fontSetStyle(true, false, true);
    pdf.textAdd(100, 70, 'hello');
    pdf.fontSetStyle(false, true, true);
    pdf.textAdd(190, 70, 'hello');
    pdf.fontSetStyle(true, true, true);
    pdf.textAdd(280, 70, 'hello');

    pdf.fontSetName('Courier');
    pdf.textAdd(20, 90, 'hello');
    pdf.fontSetStyle(true, false, false);
    pdf.textAdd(100, 90, 'hello');
    pdf.fontSetStyle(false, true, false);
    pdf.textAdd(190, 90, 'hello');
    pdf.fontSetStyle(true, true, true);
    pdf.textAdd(280, 90, 'hello');

    for (var j = 0; j < 50; j++) {
        pdf.graphicsSetColor(j * 5, 0, 250 - j * 5);
        pdf.graphicsSetLineWidth(1 + j / 25);
        pdf.graphicsDrawLine(20, 120 + j * 4, 120, 120 + j * 4);
    }

    pdf.textAdd(200, 150, 'hello');

    pdf.pageSetOrientation(true);
    pdf.pageAdd();

// we can use images only if we are on IE9 or higher (or non-IE browser)
 if (!IsInternetExplorer8OrLower)
 {

    pdf.imageLoadFromUrl('image1.jpg');
    pdf.imagePlace(20, 40);

    pdf.imageLoadFromUrl('image2.jpg');
    pdf.imagePlace(120, 220);
}
    // return BytescoutPDF object instance
    return pdf;
}


```

<!-- code block end -->