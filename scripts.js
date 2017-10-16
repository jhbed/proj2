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

	function validate(){

		var validated = false;
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


		//check age exp level
		var choiceExp = $('input[name="experience"]');
		var selectedExp;
		$.each(choiceExp, function(k,v){
			if(this.checked)
				selectedExp = v.value;
		});
		if(selectedExp){
			validated = true;
		}
		else{
			$('#error').text("Please check a box for your experience level");
			validated = false;
			return false;
		}
		//end check exp level

		//check age
		var choiceAge = $('input[name="age-category"]');
		var selectedAge;
		$.each(choiceAge, function(k,v){
			if(this.checked)
				selectedAge = v.value;
		});
		if(selectedAge){
			validated = true;
		}
		else{
			$('#error').text("Please check a box for your age category");
			validated = false;
			return false;
		}
		//end check age

		//check all text categories
		for(var i=0; i<11; i++) {
			if($.trim(handle[i].val()) == ""){
			    $('#error').text(msg[i]);
			    handle[i].focus();
			    return false;
			}
		}

		var phone1 = $.trim($('input[name="phone1"]'));
		var phone2 = $.trim($('input[name="phone2"]'));
		var phone3 = $.trim($('input[name="phone3"]'));




		
		
		return validated;

	}

	/*
	handling check boxes
	<input type="checkbox" name="languages" value="C++" />C++
	<input type="checkbox" name="languages" value="Java" />Java
	<input type="checkbox" name="languages" value="Python" />Python
	*/


	//radio buttons
	// <input type="radio" name="age" value="child" />Child
	// <input type="radio" name="age" value="Adult" />Adult
	$('#agebutton').on('click', function(){
		var choice = $('input[name="age"]');
		var selected;
		$.each(choice, function(k,v){
			if(this.checked)
				selected = v.value;
		});
		if(selected)
			alert(selected);
		else
			alert("no category indicated");
	})

	//dropdown
	/*
	<select id="dropdown" name="student">
		<option value ="bad">---</option>
		<option value="freshman">freshman</option>
		<option value="Sophmore">Sophmore</option>
		<option value="Junior">Junior</option>
		<option value="Senior">Senior</option>
	</select>
	<input type="button" id="levelbutton" value="Show Level" />
	*/
	$('#levelbutton').on('click', function(){
		var selection = $('#dropdown:selected').val(); //would .value work here?, you also can do .text to get the actual stuff in the tags
		if(selection == "bad")
			alert("you didn't select a level");
		else
			alert("you are a " + selection);
	});

});