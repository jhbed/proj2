//Jake Bedard
//jadrn007
//Red ID 818121974

var msg = ['Please enter your first name',
		   'Please enter your last name',
		   'Please enter your address',
		   'Please enter your city',
		   'Please enter your state',
		   'Please enter your zip',
		   'Please enter your email',
		   'Please enter your date of birth',
		   'Please enter your full phone number',
		   'Please enter your full phone number',
		   'Please enter your full phone number',];

function isValidState(state) {                                
    var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
    "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
    "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
    "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
    "UT","VA","VT","WA","WI","WV","WY");
    for(var i=0; i < stateList.length; i++){
        if(!stateList[i] == $.trim(state))
            return true;
    }
    return false;
} 

$(document).ready(function(){

	var handle = new Array(6);
	handle[0] = $('input[name="fname"]');	   
	handle[1] = $('input[name="lname"]');
	handle[2] = $('input[name="address1"]');
	handle[3] = $('input[name="city"]');			   
	handle[4] = $('input[name="state"]');
	handle[5] = $('input[name="zip"]');
	handle[6] = $('input[name="email"]');
	handle[7] = $('input[name="dob"]');
	handle[8] = $('input[name="phone1"]');
	handle[9] = $('input[name="phone2"]');
	handle[10] = $('input[name="phone3"]');

	var size = 0;

	$('input[name="user_pic"]').on('change', function(){
		size = this.files[0].size;
	});


	//validate
	$('#submit-button').on('click', function(){
		return validate();
	});

	handle[4].on('keyup', function(){
		handle[4].val(handle[4].val().toUpperCase());
	});

	function validate(){

		//check all text categories
		for(var i=0; i<11; i++) {
			if($.trim(handle[i].val()) == ""){
			    $('#error').text(msg[i]);
			    handle[i].focus();
			    return false;
			}
		}
		/*
		//check states
		if(isValidState(handle[4].val()) == "") { 
            $('#error').text("Please make sure you are using the correct 2 letter state abreviation");
            handle[4].focus();           
            return false;
        }
        */

		//check exp level
		var choiceExp = $('input[name="experience"]');
		var selectedExp;
		$.each(choiceExp, function(k,v){
			if(this.checked)
				selectedExp = v.value;
		});
		if(!selectedExp){
			$('#error').text("Please check a box for your experience level");
			return false;
		}
		//end check exp level

		//check gender
		var choiceGen = $('input[name="gender"]');
		var selectedGen;
		$.each(choiceGen, function(k,v){
			if(this.checked)
				selectedGen = v.value;
		});
		if(!selectedGen){
			$('#error').text("Please check a box for your gender");
			return false;
		}
		//end check gender

		//check picture
		if(size == 0) {
			$('#error').text("Please add a picture");
			return false;
		}
		if(size/1000 > 1000) {
			$('#error').text("File too big, 1MB Max.");
			return false;
		}
		//end check picture

		//check age
		var choiceAge = $('input[name="age-category"]');
		var selectedAge;
		$.each(choiceAge, function(k,v){
			if(this.checked)
				selectedAge = v.value;
		});
		if(!selectedAge){
			$('#error').text("Please check a box for your age category");
			return false;
		}
		//end check age


		return true;
	}
	handle[0].focus();


	//on blur, remove error message if it pertains to a fixed thing
	//tried to make this into one clean function and I can't figure it out!!!
	handle[0].on('blur', function(){
		if($('#error').text() == msg[0] && handle[0].val() != "" ){
			$('#error').text('');
			$('#error').html('&nbsp;');

		}
	});

	handle[1].on('blur', function(){
		if($('#error').text() == msg[1] && handle[1].val() != "" ){
			$('#error').text('');
			$('#error').html('&nbsp;');

		}
	});

	handle[2].on('blur', function(){
		if($('#error').text() == msg[2] && handle[2].val() != "" ){
			$('#error').text('');
			$('#error').html('&nbsp;');

		}
	});

	handle[3].on('blur', function(){
		if($('#error').text() == msg[3] && handle[3].val() != "" ){
			$('#error').text('');
			$('#error').html('&nbsp;');

		}
	});

	handle[4].on('blur', function(){
		if($('#error').text() == msg[4] && handle[4].val() != "" ){
			$('#error').text('');
			$('#error').html('&nbsp;');

		}
	});

	handle[5].on('blur', function(){
		if($('#error').text() == msg[5] && handle[5].val() != "" ){
			$('#error').text('');
			$('#error').html('&nbsp;');

		}
	});

	handle[6].on('blur', function(){
		if($('#error').text() == msg[6] && handle[6].val() != "" ){
			$('#error').text('');
			$('#error').html('&nbsp;');

		}
	});

	handle[7].on('blur', function(){
		if($('#error').text() == msg[7] && handle[7].val() != "" ){
			$('#error').text('');
			$('#error').html('&nbsp;');

		}
	});

	handle[8].on('blur', function(){
		if($('#error').text() == msg[8] && handle[8].val() != "" ){
			$('#error').text('');
			$('#error').html('&nbsp;');

		}
	});

	handle[9].on('blur', function(){
		if($('#error').text() == msg[9] && handle[9].val() != "" ){
			$('#error').text('');
			$('#error').html('&nbsp;');

		}
	});

	handle[10].on('blur', function(){
		if($('#error').text() == msg[10] && handle[10].val() != "" ){
			$('#error').text('');
			$('#error').html('&nbsp;');

		}
	});


});






