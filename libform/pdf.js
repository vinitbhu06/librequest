finalDataForPdf = [[{ text: 'S.No.', bold: true, alignment: 'center', fillColor: '#d3d7db' },{ text: 'Title', bold: true, alignment: 'center', fillColor: '#d3d7db' },{ text: 'Author', bold: true, alignment: 'center', fillColor: '#d3d7db' }, { text: 'Publisher', bold: true, alignment: 'center', fillColor: '#d3d7db' }, { text: 'Edition', bold: true, alignment: 'center', fillColor: '#d3d7db' },{ text: 'Year', bold: true, alignment: 'center', fillColor: '#d3d7db' },{ text: 'ISBN', bold: true, alignment: 'center', fillColor: '#d3d7db' }]]; //Sending the header array for PDF

$(document).on('click', 'a .glyphicon-remove-sign', function () { // <-- for removing the items from the data array as well as html table
    rowID = +$(this).closest('tr').attr('name');
	$(this).closest('tr').remove();
	finalDataForPdf.splice(rowID,1)
	properSerials();
    return false;
 });
 //function for accept
function accept(){
		$('#fromxisbn').show();
		$("#results").append("<tr  id='row' name='"+i+"'><td><a ><span class='glyphicon glyphicon-remove-sign' /* type='button' */></span></a></td><td><img src='"+cover+"' alt='cover'/></td><td><strong>"+title+"</strong></td><td>"+author+"</td><td>"+publisher+"</td><td>"+ed+"</td><td>"+year+"</td><td>"+isbn+"</td><td><a href='"+url+"' target='_blank'> Worldcat Link</a></td></tr>");
		i = i+1;
		finalDataForPdf.push(dataForPdf)
		//console.log(finalDataForPdf);
		//$(".modal-title").html("<h4></h4>");
		//$(".modal-body").html("<h3>Please search again</h3>");
		
		return finalDataForPdf
		};
function properSerials(){
		j= 0; 
		for (j=1; j <= finalDataForPdf.length ; j++){
		text= ""+j+".";
		finalDataForPdf[j][0] = {text}
		};
};
function generatePDF(){
	requesterName = ""+document.getElementById('Name').value;
	requesterEmail = ""+document.getElementById('Email').value;
	var docDefinition = {
	// a string or { width: number, height: number }
	pageSize: 'A4',
	//background: 'simple text',

	// by default we use portrait, you can change it to landscape if you wish
	pageOrientation: 'landscape',

	// [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
	pageMargins: [ 40, 60, 40, 60 ],
	info: {
    title: 'Library Request List',
    author: 'Vinit Kumar',
    subject: 'LibRequest',
    keywords: 'LibRequest',
	},
	header: {text: 'Genrated through LibRequest Service available at: ', fontSize: 8},
	footer: {
    columns: [
	{text: '(Head of Department)', margin: [5, 0, 0, 0]},
      { text: '(Faculty)', alignment: 'right',margin: [0, 10, 0, 0] }
    ]
  },

  content: [{columns: [
		{image: 'sampleImage.jpg',
			width: 50,
			height: 50,
			margin: [0, 0, 0, 10]
		}, 
		{text: 'Central Library, Bundelkhand University, Jhansi', style: 'title'}
  ]}, 
	{text: 'Name of the Faculty member:', style: 'field'}, {text: requesterName}, {text: 'Email-id: ', style: 'field'},{text: requesterEmail},{
	table: {
		headerRows: 1,
        widths: [ 'auto','*', 'auto', 'auto', 'auto','auto','auto' ],

    body: finalDataForPdf
  }
}], styles: {
		field: {
			fontSize: 12,
			alignment: 'Left',
			margin: [0, 0, 0, 10]
		},
		title: {
			fontSize: 18,
			bold: true,
			alignment: 'center'
		}
	}}
    pdfMake.createPdf(docDefinition).download(+requesterName+'_Requests'+Math.floor(Date.now() / 1000)+'.pdf');
	 }; // end function generatePDF
