var queryUrl = "http://publishmydata.com/sparql.json?q=PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0A%0D%0ASELECT+%3Fname+%3Fnorthing+%3Feasting+WHERE+%7B%0D%0A%0D%0A++%3Fschool+%3Chttp%3A%2F%2Feducation.data.gov.uk%2Fdef%2Fschool%2FdistrictAdministrative%3E+%3Chttp%3A%2F%2Fstatistics.data.gov.uk%2Fid%2Flocal-authority-district%2F00BN%3E+.+%0D%0A%0D%0A++%3Fschool+rdfs%3Alabel+%3Fname+.%0D%0A%0D%0A++%3Fschool+%3Chttp%3A%2F%2Feducation.data.gov.uk%2Fdef%2Fschool%2FphaseOfEducation%3E+%3Chttp%3A%2F%2Feducation.data.gov.uk%2Fdef%2Fschool%2FPhaseOfEducation_Secondary%3E+.%0D%0A%0D%0A++%3Fschool+%3Chttp%3A%2F%2Fdata.ordnancesurvey.co.uk%2Fontology%2Fspatialrelations%2Fnorthing%3E+%3Fnorthing+.%0D%0A%0D%0A++%3Fschool+%3Chttp%3A%2F%2Fdata.ordnancesurvey.co.uk%2Fontology%2Fspatialrelations%2Feasting%3E+%3Feasting+.%0D%0A%7D";

	  $.ajax({
	    dataType: "jsonp",
	    url: queryUrl,
	    success: function(data) {    
	      // get the table element
	      var table = $("#results");              

	      // get the sparql variables from the 'head' of the data.
	      var headerVars = data.head.vars; 

	      // using the vars, make some table headers and add them to the table;
	      var trHeaders = getTableHeaders(headerVars);
	      table.append(trHeaders);  

	      // grab the actual results from the data.                                          
	      var bindings = data.results.bindings;

	      // for each result, make a table row and add it to the table.
	      for(rowIdx in bindings){
	        table.append(getTableRow(headerVars, bindings[rowIdx]));
	      } 
		
		function getTableHeaders(headerVars) {
		  var trHeaders = $("<tr></tr>");
		  for(var i in headerVars) {
		    trHeaders.append( $("<th>" + headerVars[i] + "</th>") );
		  }
		  return trHeaders;
		}

		function getTableRow(headerVars, rowData) {
		  var tr = $("<tr></tr>");
		  for(var i in headerVars) {
		    tr.append(getTableCell(headerVars[i], rowData));
		  }
		  return tr;
		}

		function getTableCell(fieldName, rowData) {
		  var td = $("<td id=title></td>");
		  var fieldData = rowData[fieldName];
		  td.html(fieldData["value"]);
		  return td;
		}

	}
	  }); 
