function milManipulate(){
	if (harvest_run=="1"){
	
//		if (exist_ISBN=='1'){
//		var buyIt = document.getElementById("outsideLinks");
//		buyIt.innerHTML = "<div class='clearer'><hr></div> <a href='http://www.amazon.com/s?url=search-alias%3Daps&field-keywords=" + bib_ISBN + "' target='_blank'>Search for this at Amazon</a>";
//		}
// this is a buy it at amazon button, currently disabled

		if (exist_ISSN=='1'){
		var ISSNciteSave = document.getElementById("ISSNcitationLinks");
		ISSNciteSave.innerHTML = "<a href='http://worldcat.org/xissn/titlehistory?issn=" + bib_ISSN + "' target='_blank'>Title history in Worldcat</a>";
	//	ISSNciteSave.innerHTML = ISSNciteSave.innerHTML + "<br><a href='http://tictoclookup.appspot.com/" + bib_ISSN + "?title=Nature" + bib_title + "' target='_blank'>RSS Feed</a>";
		ISSNciteSave.innerHTML = ISSNciteSave.innerHTML + "<div class='clearer'><hr></div>";		
		
	/*	var sURL = "href='http://tictoclookup.appspot.com/" + bib_ISSN;
		var objTransaction = YAHOO.util.Get.script(sURL); 
		var objTransaction = {"lastmod": "Wed Apr 29 05:42:36 2009", 
 "records": [
     {"title": "Nature", "rssfeed": "http:\/\/www.nature.com\/nature\/current_issue\/rss"}
 ], 
 "issn": "00280836"};

		alert(objTransaction.records[0].rssfeed);	*/
		}
		
		if (exist_title=='1'){
		document.title = "SU library - " + bib_title;
		}
		
		if (exist_author=='1'){
		var identitiesLinks = document.getElementById("WorldCatIdentitiesLinks");
		identitiesLinks.innerHTML = "<a href='http://www.worldcat.org/identities/find?fullName=" + bib_author + "' target='_blank'>More about the author</a><div class='clearer'><hr></div>";
		}
		
		if (exist_LCCN=='1'){
		var LCCNlinks = document.getElementById("LCCNpermalink");
		LCCNlinks.innerHTML = "<a href='http://lccn.loc.gov/" +bib_LCCN + "' target='_blank'>View this record at the Library of Congress</a><div class='clearer'><hr></div>";
		}
		
		if (exist_OCLC=='1'){
			var citeSave = document.getElementById("citationLinks");
			citeSave.innerHTML = "<a href='http://summit.worldcat.org/oclc/" +bib_OCLC + "?page=citation' target='_blank'>Cite this</a><br><a href='http://summit.worldcat.org.proxy.seattleu.edu/oclc/" + bib_OCLC + "?page=refworks' target='_blank'>Export to Refworks</a><br><a href='http://worldcat.org/oclc/" + bib_OCLC + "?page=endnote'>Export to a citation file</a><div class='clearer'><hr></div>";
		
			var WorldcatEditions = document.getElementById("otherEditionLinks");
			WorldcatEditions.innerHTML = "<a href='http://summit.worldcat.org/oclc/" + bib_OCLC + "/editions/' target='_blank'>Search Worldcat for other editions of this title</a><div class='clearer'><hr></div>";
			
			var SummitRepeatButton = document.getElementById("suSummitbtn");
			SummitRepeatButton.href = 'http://summit.worldcat.org/oclc/' + bib_OCLC + '/editions/';
		}
	
	}
}

function lawManipulate(){
		
		// open the table
		document.write('<table class="bibDetail" id="TableBibDetailTools" style="margin:0;"><tbody>');

		if (exist_OCLC=='1'){	// Worldcat row

			document.write('<tr class="bibInfoEntry"><td><table cellspacing="3" cellpadding="0" width="100%" style="margin:0;"><tbody><tr><td width="20%" valign="top" class="bibInfoLabel">Citation</td><td class="bibInfoData">');
			document.write('<a href="http://worldcat.org/oclc/');
			document.write(bib_OCLC);
			document.write('?page=citation" target="_blank">Cite this</a>');
			document.write(' | ');
			document.write('<a href="http://worldcat.org/oclc/');
			document.write(bib_OCLC);
			document.write('?page=refworks" target="_blank">Export to Refworks</a>');
			document.write(' | ');
			document.write('<a href="http://worldcat.org/oclc/');
			document.write(bib_OCLC);
			document.write('?page=endnote" target="_blank">Export to Endnote</a>');
			document.write(' | ');
			document.write('<a href="http://summit.worldcat.org/oclc/');
			document.write(bib_OCLC);
			document.write('/editions/" target="_blank">Other Editions</a>');

			if (exist_author=='1') {
				document.write(' | ');
				document.write('<a href="http://worldcat.org/identities/find?fullName=');
				document.write(bib_author);
				document.write('" target="_blank">More about the author</a>');
			}
			
			if (exist_ISSN=='1'){
				document.write(' | ');
				document.write("<a href='http://worldcat.org/xissn/titlehistory?issn=" +bib_ISSN + "' target='_blank'>Title history in Worldcat</a><div class='clearer'><hr></div>");
			}
			
		}	

		// Sharing section			
		document.write('<tr><td width="20%" valign="top" class="bibInfoLabel">Sharing</td><td class="bibInfoData">');
		document.write('Link to: <a href="' + url_full + '">SU Law ' + bib_title + '</a> | ');
		addthis_pub = 'xxx'; // insert your info
		addthis_brand = 'xxx'; //insert your info
		addthis_options = 'email, favorites, delicious, facebook, stumbleupon, more';
		url_full = 'http:\/\/library.seattleu.edu' + url_tail;
		document.write('<a href=\"http:\/\/www.addthis.com\/bookmark.php\" onmouseover=\"return addthis_open(this, \'\', url_full, bib_title)\" onmouseout=\"addthis_close()\" onclick=\"return addthis_sendto()\">Sharing Tools<\/a>');
		document.write('<script type=\"text\/javascript\" src=\"\/\/s7.addthis.com\/js\/152\/addthis_widget.js\"><\/script>');
		document.write('</td></tr></tbody></table></td></tr></tbody></table>');
		var SummitRepeatButton = document.getElementById("suSummitbtn");
		SummitRepeatButton.href = 'http://summit.worldcat.org/oclc/' + bib_OCLC + '/editions/';
		document.write('</td></tr></tbody></table></td></tr></tbody></table>');
		
					
		// Close the table
		document.write('</td></tr></tbody></table></td></tr></tbody></table>');

}


function printSignature(){
	linkSig=document.getElementById("link_signature");
	linkSig.innerHTML=linkSig.innerHTML+url_full;
	patronSig=document.getElementById("patron_signature");
	if (window.pName){
		patronSig.innerHTML="Printed for " + pName + "<br>";
	}	
}

function googleBooksCoverStep1(){
	if (harvest_run=="1"){
	 if (document.location.protocol != 'https:')
	 {
		
		if(exist_OCLC=='1'){
			passToGoogle=bib_OCLC_long;
		}
		else{
			passToGoogle=bib_ISBN + "," + bib_LCCN_long;
		}
		
		// Construct URL along with OCLC #, or ISBN # and LCCN #)
		var api_url ="http://books.google.com/books?jscmd=viewapi&bibkeys=" + passToGoogle;
		
		// predefine _GBSBookInfo empty
		var _GBSBookInfo ='';
		
		// Talk to the server synchronously and get _GBSBookInfo object
		document.write(unescape("%3Cscript src=" + api_url + " type='text/javascript'%3E%3C/script%3E"));
	 }
	}
}

function googleBooksCoverStep2(){
	if (harvest_run=="1"){
	 if (document.location.protocol != 'https:')
     {
		
		//get the google div
		var googleLink = document.getElementById("googleImage");
		
		
		// Process response from Google booksearch, use OCLC # info preferentially
		if (exist_OCLC=='1'){
			bookInfo = _GBSBookInfo[bib_OCLC_long];
		}
		else{
				if (exist_ISBN=='1'){
					bookInfo = _GBSBookInfo[bib_ISBN];
				}
				else{
					if (exist_LCCN=='1'){
						bookInfo = _GBSBookInfo[bib_LCCN_long];
					}
				}
		}
		
		
		if (bookInfo) {
			if (bookInfo.preview == "full") {
			googleLink.innerHTML = googleLink.innerHTML + "<img src='" + bookInfo.thumbnail_url + "'><div class='clearer'><hr></div>";
			}
			if (bookInfo.preview == "partial") {
				if (bookInfo.thumbnail_url) {
					googleLink.innerHTML = googleLink.innerHTML + "<img src='" + bookInfo.thumbnail_url + "'><div class='clearer'><hr></div>";
					}
				else {
						googleLink.innerHTML = googleLink.innerHTML + "<div class='clearer'><hr></div>";
					}	
				}
			if (bookInfo.preview == "noview") {
					if (bookInfo.thumbnail_url) {
					googleLink.innerHTML = googleLink.innerHTML + "<img src='" + bookInfo.thumbnail_url + "'><div class='clearer'><hr></div>";
					}
				else {
						googleLink.innerHTML = googleLink.innerHTML + "";
					}
			}
		}
	 }
	}
}

function processTocs(obj){
	try {
		if(obj.records[0] != null){
			feedURL = obj.records[0].rssfeed;
			if(feedURL.indexOf("http")==0){
//				feedURL = feedURL.replace("http://", "feed://");
				document.getElementById("ISSNtocLinks").innerHTML="<a href='" + feedURL + "' target='_blank'>Subscribe to this journal's table of contents (RSS)</a><div class='clearer'><hr></div>";
			}
		}
	}
	catch (e) {}
}

function getTocs(){
	if (harvest_run=="1"){
	 if (document.location.protocol != 'https:')
	 {
		if (exist_ISSN=='1'){
			if (exist_title=='1'){
				bib_title_short = bib_title_short.replace(/\[.*$/ig,"");		// strip anything following a '['
				bib_title_short = bib_title_short.replace(/\..*$/ig,"");		// strip anything following a '.'
				toc_URL = "http://tictoclookup.appspot.com/" + bib_ISSN + "?title=" +bib_title_short;
				YAHOO.util.Get.script(toc_URL + "&jsoncallback=processTocs", {timeout:500});			
			}
			else {
				toc_URL = "http://tictoclookup.appspot.com/" + bib_ISSN;
				YAHOO.util.Get.script(toc_URL + "?jsoncallback=processTocs", {timeout:500});			
			}
		}
	 }
	}
}