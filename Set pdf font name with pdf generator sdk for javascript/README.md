## How to set pdf font name with pdf generator sdk for javascript in Javascript with ByteScout PDF Suite

### Learn to code in Javascript to set pdf font name with pdf generator sdk for javascript with this step-by-step tutorial

The documentation is designed for a specific purpose to help you to apply the features on your side. What is ByteScout PDF Suite? It is the set that includes 6 SDK products to work with PDF from generating rich PDF reports to extracting data from PDF documents and converting them to HTML. This bundle includes PDF (Generator) SDK, PDF Renderer SDK, PDF Extractor SDK, PDF to HTML SDK, PDF Viewer SDK and PDF Generator SDK for Javascript. It can help you to set pdf font name with pdf generator sdk for javascript in your Javascript application.

This prolific sample source code in Javascript for ByteScout PDF Suite contains various functions and other necessary options you should do calling the API to set pdf font name with pdf generator sdk for javascript. Follow the instructions from scratch to work and copy the Javascript code. This basic programming language sample code for Javascript will do the whole work for you to set pdf font name with pdf generator sdk for javascript.

If you want to try other source code samples then the free trial version of ByteScout PDF Suite is available for download from our website. Just try other source code samples for Javascript.

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
    pdf.pageSetSize(BytescoutPDF.A4);

    // set page orientation (BytescoutPDF.PORTRAIT = portrait, BytescoutPDF.LANDSCAPE = landscape)
    pdf.pageSetOrientation(BytescoutPDF.PORTRAIT);

    // add new page
    pdf.pageAdd();

    // set font color in RGB format to 0,0,0 - black color
    pdf.fontSetColor(0, 0, 0);

    // set font size
    pdf.fontSetSize(14);

    // BytescoutPDF.js provides support for built-in PDF fonts
    // which are demonstrated in this sample

    // trying Times-Roman
    pdf.fontSetName('Times-Roman');
    // draw text
    pdf.textAdd(20, 20, 'Hello Times Roman!');

    // trying Helvetica
    pdf.fontSetName('Helvetica');
    // draw text
    pdf.textAdd(20, 60, 'Hello Helvetica!');

    // trying Courier-Bold
    pdf.fontSetName('Courier');
    // draw text
    pdf.textAdd(20, 100, 'Hello Courier!');

    // set zapf dingbats built in font to use
    pdf.fontSetName("zapfDingbats");
    pdf.fontSetSize(25);

    // draw symbols, see map of letters to symbols at https://images.google.com/?q=zapf+dingbats+font+symbols
    pdf.textSetBox(10,150,500,300); // define output rectangle
    pdf.textAddToBox("1234567890!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")

    // set symbol font
    pdf.fontSetName("Symbol");
    pdf.fontSetSize(25);

    // draw symbols, see map of letters to symbols at https://images.google.com/?q=zapf+dingbats+font+symbols
    pdf.textSetBox(10,310,500,800); // define output rectangle
    pdf.textAddToBox("1234567890!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")

    

    // return BytescoutPDF object instance
    return pdf;
}


```

<!-- code block end -->