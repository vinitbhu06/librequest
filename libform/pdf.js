function myFunction()
    {


     var docDefinition = {
	header: 'Genrated through LibRequest Service',
	footer: {
    columns: [
      '(Head of Department)',
      { text: '(Faculty)', alignment: 'right' }
    ]
  },

  content: [{
	text: 'Request your library Report generated on: Central Library, Bundelkhand University, Jhansi',
	table: {
		// headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 1,
       // widths: [ '*', 'auto', 100, '*' ],

    body: [
			['Title','Author', 'Publisher', 'Edition','Year','Language'],
			dataForPdf,
     // [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4','Val 4','Val 4' ]
    ]
  }
}]}
  /* table: {


    body: [
			['Title','Author', 'Publisher', 'Edition','Year','Language'],
			body,
      [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4','Val 4','Val 4' ]
    ],
	 }} */
    pdfMake.createPdf(docDefinition).download('Report'+Math.floor(Date.now() / 1000)+'.pdf');
	 }
