var msg = ['Please enter your first name',
		   'Please enter your last name',
		   'Please enter your address',
		   'Please enter your city',
		   'Please enter your state',
		   'Please enter your zip',]

$(document).ready(function() {
	var h = new Array(6);
	h[0] = $('input[name="fname"]');
	h[1] = $('input[name="lname"]');
	h[2] = $('input[name="address1"]');
	h[3] = $('input[name="city"]');
	h[4] = $('input[name="state"]');
	h[5] = $('input[name="zip"]');

	h[0].focus();

	$(':submit').on('click', function(){
		return validateForm();
	});

	$(':reset').on('click',function(){
		h[0].focus();
	});

	$('input').on('blur', function(e){
		if($.trim(e.target.value)){
			$('#status').text('');
		}
	})

	function validateForm(){
		for(var i=0; i<6; i++){
			if(!$.trim(h[i].val())){
				$('#status').text(msg[i]);
				h[i].focus();
				return false;
			}
		return true;
		}
	}
});