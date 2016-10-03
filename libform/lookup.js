$(document).ready( function (){
	$("#oldForm").hide();
	$('#error').hide();
	$('#fromxisbn').hide();
	// added for tableToPDF pluign see index.html
//	pdffile= $('#downloadPdf').click(function(){$('#fromxisbn').tableExport({type:'pdf',tableName:'Your requests', escape:'false'});});

	$('#retry').click(function() {	$('#error').hide(); $('#myForm').show()});
	$('#fill').click(function() {	$('#error').hide(); $('#oldForm').show()});
	$( '#myForm' ).submit( function (e){
		e.preventDefault();
		//$(this).hide();
	});

	$('#myButton').click(function(e){
		//$(this).hide();
		isbn = document.getElementById('isbn').value;
		var queryUrl = "http://xisbn.worldcat.org/webservices/xid/isbn/"+isbn+"?method=getMetadata&format=json&fl=*";
	  $.ajax({
	   beforeSend: function() { $('#wait').show(); },
      		url: queryUrl,
	   	dataType: "jsonp",
	   	jsonp : 'callback',
		complete: function() { $('#wait').hide(); },
	    	success: function(data) {
	    		if( data.stat == "ok"){
					// hide some of the elements of the landing page
	    	//	$('#myForm').hide();
					$('#why').hide();
					$('#recentRequests').hide();
					//console.log(data);
	    		title = "" + data.list[0].title;
	    		author = "" + data.list[0].author;
	    		publisher = "" + data.list[0].publisher;
	    		ed = "" + data.list[0].ed;
	    		year = "" + data.list[0].year;
	    		url = "" + data.list[0].url;
	    		lang = "" + data.list[0].lang;
					cover = "" + 'http://covers.openlibrary.org/b/isbn/'+isbn+'-M.jpg';
				//console.log(ed);
					//if (ed == ){return ed = '-NA-';}else{return ed = ed;};
					$('#fromxisbn').show();
	 			//	$("#caption").append("Bibliographic details about the requested book with ISBN: "+isbn+".");
	 		//		$("#headers").append("<tr><th>Cover</th><th>Title</th><th>Author</th><th>Publisher</th><th>Edition</th><th>Year</th><th>Language</th><th>Worldcat version</th></tr>");
	 				$("#results").append("<tr><td><img src='"+cover+"' alt='cover'/></td><td><strong>"+title+"</strong></td><td>"+author+"</td><td>"+publisher+"</td><td>"+ed+"</td><td>"+year+"</td><td>"+lang+"</td><td><a href='"+url+"' target='_blank'> Worldcat Link</a></td></tr>");

				//console.log(cover);
				//for pdfMake to build the pdf file.
					dataForPdf = [];
					dataForPdf = [ title, author, publisher, ed, year, lang ];
				// finalDataForPdf = [dataForPdf.slice()];
			//	finalDataForPdf.push(dataForPdf);
			//	console.log(finalDataForPdf);
				//body.push( dataForPdf);
				//console.log(dataForPdf);
				return dataForPdf;
				//finalDataForPdf.push(dataForPdf);
				}
	    		else
	    		{
	    		$('#myForm').hide();
	    	//	$('#myForm').show();
	    		$('#error').show();
	    		}

					//console.log(data.list[0].author);
	    //var value = data.list[0].title;
		 //jQuery("#results").html(data.results.bindings[0].stat.value); */
		//jQuery("#results").append("<thead><tr><th>""</th></tr></thead><tbody><tr><td>"+value+"</td></tr></tbody>");
		}
		});
	});
		/*	finalDataForPdf = [];
			finalDataForPdf.push(dataForPdf);
			console.log(finalDataForPdf);*/

	});
//});
