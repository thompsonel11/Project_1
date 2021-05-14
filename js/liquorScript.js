var cocktail;
var id;

var choices = document.getElementById('choices')
var results = document.getElementById('results')
var drinkResult;

// Click event that will hide/show results to user, and grabs the ID from html to query the API
$(document).on('click', '.liquor', function () {
    id = $(this).attr('id');
    $("#choices").fadeOut(500)
    results.classList.remove('hide')
    APICall();
})

// API Call to the cocktail database - this entire function is used on each webpage
function APICall() {
    // This defines the alcohol API which is queried by ID 
    var typeSearch = {
        "async": true,
        "crossDomain": true,
        "url": `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`,
        "method": "GET",
    }

// A randmon ID is generated and an ajax call is made
    $.ajax(typeSearch).done(function (response) {
        console.log(response);
        var randomDrink = Math.floor(Math.random() * response.drinks.length);
        drinkID = response.drinks[randomDrink].idDrink
        console.log('drinkID:', drinkID)
        cocktail = {
            "async": true,
            "crossDomain": true,
            "url": `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`,
            "method": "GET",
        }

// Where the drink name, image, ingrediants, measurements and instructions are all returned 
    }).then(function () {
        $.ajax(cocktail).done(function (response) {
            console.log(response);
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
})
}


