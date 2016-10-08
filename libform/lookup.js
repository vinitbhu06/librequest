$(document).ready( function (){
	//$('#continue').prop('disabled', true);
	$("#oldForm").hide();
	$('#error').hide();
	$('#fromxisbn').hide();
	$('#myModal').modal({ show: false})
	$('#retry').click(function() {	$('#error').hide(); $('#myForm').show()});
	$('#fill').click(function() {	$('#error').hide(); $('#oldForm').show()});
	$( '#myForm' ).submit( function (e){
		e.preventDefault();
		$('#myButton').click(getdata());
		});
	i= 1;
	var getdata = function(e){
		isbn = document.getElementById('isbn').value;
		var queryUrl = "http://xisbn.worldcat.org/webservices/xid/isbn/"+isbn+"?method=getMetadata&format=json&fl=*";
		$.ajax({
			beforeSend: function() { $('#wait').show(); },
			url: queryUrl,
			dataType: "jsonp",
			jsonp : 'callback',
			complete: function() {  $('#wait').hide(); },
			success: function(data) {
	    		if( data.stat == "ok"){
					// hide some of the elements of the landing page
					//	$('#myForm').hide(); //commented to allow multiple entries
					$('#myModal').modal('show');
					$('#why').hide();
					$('#recentRequests').hide();
					title = "" + data.list[0].title;
					author = "" + data.list[0].author;
					publisher = "" + data.list[0].publisher;
					ed = "" + data.list[0].ed;
					//changeEditor();
					year = "" + data.list[0].year;
					url = "" + data.list[0].url;
					lang = "" + data.list[0].lang;
					cover = "" + 'http://covers.openlibrary.org/b/isbn/'+isbn+'-M.jpg';
					$("#approved").html("<tr><td><img src='"+cover+"' alt='cover'/></td><td><strong>"+title+"</strong></td><td>"+author+"</td><td>"+publisher+"</td><td>"+ed+"</td><td>"+year+"</td><td>"+isbn+"</td></tr>");
					
					//to build the pdf file.
					dataForPdf = [];
					dataForPdf = [ ""+i+".", title, author, publisher, ed, year, isbn ];
					return dataForPdf;
				}
	    		else
	    		{
					$('#myForm').hide();
				//	$('#myForm').show();   //commented to allow multiple entries
					$('#error').show();
	    		}

			}, 
		
		
			});
	};
	/* function changeEditor(){
		if (ed == "undefined"){ return ed = "--"} else {return ed};
	}*/
	}); // end document.ready
	
