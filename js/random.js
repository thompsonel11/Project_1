var random = document.getElementById('random')
var results = document.getElementById('results')
var drinkResult;

$(document).on('click', '.spin', function () {
	random.classList.add('hide')
	results.classList.remove('hide')

})

	var typeSearch = {
		"async": true,
		"crossDomain": true,
		"url": `https://www.thecocktaildb.com/api/json/v1/1/random.php?i=${random}`,
		"method": "GET",
	}
	
	$.ajax(typeSearch).done(function (response) {
		console.log(response)
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
		}, 5000); //5000 = 5 second
	}