/* function validate() {
if(document.bar.isbn.value.length == 0){
        alert("Please enter ISBN and then press Continue'");

        document.bar.isbn.focus();
        return false;
    }

      var check = /^[0-9]{10,13}$/;

     if (!check.test(document.bar.isbn.value))
      {
        alert("Firstname cannot contain numbers");
        document.myForm.name.focus();
        return false;
     }

return true;
}; */

//	Validate the entered characters
	
$(document).ready(function(){

	$('#myform').validate({
	    rules: {
	     isbn: {
	        minlength: 10,
			maxlength: 13,
	        required: true
	     },
	    },
	    highlight: function(label) {
	    	$(label).closest('.control-group').addClass('error');
	    },
	    success: function(label) {
	    	label
	    		.text('OK!').addClass('valid')
	    		.closest('.control-group').addClass('success');
	    }
	  });
	  
}); // end document.ready
