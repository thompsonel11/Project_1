
var drinkResult;
$("#spinner").fadeIn
var results = document.getElementById('results')

// Click even that fades out the spinner and displays results
$(document).on('click', '.spin', function () {
	setTimeout(function(){
		$("#spinner").fadeOut(500);
    	results.classList.remove('spinnerHide')
	},5500)
})
// This defines the alcohol API which is queried by ID 
	var typeSearch = {
		"async": true,
		"crossDomain": true,
		"url": `https://www.thecocktaildb.com/api/json/v1/1/random.php?`,
		"method": "GET",
	}
	
    // Ajax call to randomly return the drink name, image, ingrediants, measurements and instructions are all returned 
	$.ajax(typeSearch).done(function (response) {
		console.log(response)

		var drinkName = response.drinks[0].strDrink
		var drinkImage = response.drinks[0].strDrinkThumb
		var instructions = response.drinks[0].strInstructions
		$('#drinkName').text(drinkName);
		$('#drinkImage').attr('src', drinkImage);
		console.log(response.drinks[0])

		// 15 is based on maximum amount of ingrediants and measurements as defined in the API
		for (var i = 1; i < 15; i++) {
			var measure = response.drinks[0]['strMeasure' +i]
			if (response.drinks[0]['strIngredient' + i] === null) {
				break;
			} 
			if (measure === null) {
				measure = ''
			} 
			console.log(response.drinks[0]['strIngredient' + i])
			$('#ingredients').append('<li>' + measure + " " + response.drinks[0]['strIngredient' + i] + '</li>')
		}
		$('#instructions').text(instructions)
	})


	//Spinner function
	function myfunction(){


		var x = 1024; //min value
		var y = 9999; // max value
	
		var deg = Math.floor(Math.random() * (x - y)) + y;
	
		document.getElementById('box').style.transform = "rotate("+deg+"deg)";
	
		var element = document.getElementById('mainbox');
		element.classList.remove('animate');
		setTimeout(function(){
			element.classList.add('animate');
		}, 6000); //5000 = 5 second
	}