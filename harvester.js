// customization - look at your OPAC, what are the labels that appear next 
// to each of the following pieces of data? 
// Look here http://library.seattleu.edu/record=b743647~S2#3 to see an example in
// my OPAC, where the labels match up with these defaults. If you want to edit the
// appearance of the labels in your OPAC, you can make the changes in webpub.def
// the line that makes OCLC numbers, coming from the MARC 001, appear with the label
// "Record #" in my webpub.def is "b|f||-6789|Record #||b|"

var label_ISBN="ISBN";
var label_ISSN="ISSN";
var label_title="Title";
var label_author="Author";
var label_LCCN="LCCN";
var label_OCLC="Record #";

// You can keep the script from parsing every table in your page by telling it here
// the ID of the div that contatains your recordinfo tokens. Set to "0" if you want
// to scan the whole page

var label_tableContainer="fullRecord";

// preset global variables and make them available to other script

var exist_ISBN = "0"; // exist variables will be used to track whether a particular piece of data has been found and harvested
var bib_ISBN="0"; //  bib variable will hold the data

var exist_ISSN = "0"; 
var bib_ISSN="0";

var exist_title="0";
var bib_title="0";
var bib_title_short="0";

var exist_author="0";
var bib_author="0";

var exist_LCCN="0";
var bib_LCCN="0";

var exist_OCLC="0";
var bib_OCLC="0";

var harvest_run="0"; 

//harvest data
function milHarvest(){

	harvest_run="1";
	var container;
	var tr;
	if(label_tableContainer!="0"){
		container= document.getElementById(label_tableContainer); // get the container
		tr = container.getElementsByTagName('TR');		// get the rows for every table in the contatiner
	}
	else{
		tr = document.getElementsByTagName('TR');		// get the rows for every table in the document
	}
	
	for(var i = 0; i < tr.length; i++) {
		var x=tr[i].getElementsByTagName('TD');		// for each row, get all of the cells
	
		if (x.length == 2 && x[0].innerHTML == label_ISBN) {		// if I have 2 cells one with the ISBN
			bib_ISBN = x[1].innerHTML.replace(/(<([^>]+)>)/ig,"");		// get the ISBN and strip all tags
			bib_ISBN = bib_ISBN.replace(/[\n\t\s\-]/ig,"");		// regex cleanup of the text
			bib_ISBN = bib_ISBN.replace(/\(.*\)/ig,"");
			bib_ISBN = bib_ISBN.replace(/:.*$/ig,"");
			exist_ISBN='1';										// flag the variable as populated
		}

		if (x.length == 2 && x[0].innerHTML == label_ISSN) {		// if I have 2 cells one with the ISSN
			bib_ISSN = x[1].innerHTML.replace(/(<([^>]+)>)/ig,"");		// get the ISSN and strip all tags
			// bib_ISSN_long = pre_ISSN + x[1].innerHTML.replace(/(<([^>]+)>)/ig,"");		//  regex cleanup
			bib_ISSN = bib_ISSN.replace(/[\n\t\s]/ig,"");
			bib_ISSN = bib_ISSN.replace(/\(.*\)/ig,"");
			bib_ISSN = bib_ISSN.substr(0, 9);
			exist_ISSN='1';								// flag the variable as populated
		}

		if (x.length == 2 && x[0].innerHTML == label_title) {		// if I have 2 cells one with the title
			bib_title = x[1].innerHTML.replace(/(<([^>]+)>)/ig,"");		// get the title and strip all tags 
			bib_title = bib_title.replace(/[\n\t]/ig,"");
			bib_title = bib_title.replace(/\/.*/ig,"");
			bib_title = bib_title.replace(/:.*$/ig,"");		// strip anything following a ':' - usually a subtitle
			bib_title_short = bib_title;
			bib_title = "Title: " + bib_title;				// and preface it with "Title: "
			exist_title='1';
		}

		if (x.length == 2 && x[0].innerHTML == label_author) {		// if I have 2 cells one with the author
			bib_author = x[1].innerHTML.replace(/(<([^>]+)>)/ig,"");		// get the author and strip all tags
			bib_author = bib_author.replace(/[\n\t]/ig,"");	
			exist_author='1';
		}

		if (x.length == 2 && x[0].innerHTML == label_LCCN) {		// if I have 2 cells one with the LCCN
			bib_LCCN = x[1].innerHTML.replace(/(<([^>]+)>)/ig,"");		// get the LCCN and strip all tags
			bib_LCCN = bib_LCCN.replace(/[\n\t]/ig,"");
			bib_LCCN_long = "LCCN:" + bib_LCCN;			// this is helpful for GoogleBooks API
			exist_LCCN='1';
		}		
		
		if (x.length == 2 && x[0].innerHTML == label_OCLC) {		// if I have 2 cells one with the OCLC #
			bib_OCLC = x[1].innerHTML.replace(/(<([^>]+)>)/ig,"");		// get the OCLC# and strip all tags
			bib_OCLC = bib_OCLC.replace(/[\n\t]/ig,"");
			bib_OCLC = bib_OCLC.replace(/\(.*\)/ig,"");
			bib_OCLC_long = "OCLC:" + bib_OCLC;			// this is helpful for GoogleBooks API
			var OCLCnumTest = /ssj|heb|bks|SSJ|BKS|HEB|ocn/;	// not all my record nubers are OCLC#s, so I search for 
			var OCLCnumExist = bib_OCLC.search(OCLCnumTest); // the prefixes of the ones that are not, and only set the  
			if (OCLCnumExist == -1) {						// exist variable to 1 if the non OCLC prefixes are not present
				exist_OCLC='1';
			}
		}
	}
}
