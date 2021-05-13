var cocktail;
var id;

var choices = document.getElementById('choices')
var results = document.getElementById('results')
var drinkResult;


$(document).on('click', '.liquor', function () {
    id = $(this).attr('id');
    choices.classList.add('hide')
    results.classList.remove('hide')
    APICall();

})


function APICall() {

    var typeSearch = {
        "async": true,
        "crossDomain": true,
        "url": `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`,
        "method": "GET",
    }


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


    }).then(function () {
        $.ajax(cocktail).done(function (response) {
            console.log(response);
            var drinkName = response.drinks[0].strDrink
            var drinkImage = response.drinks[0].strDrinkThumb
            var instructions = response.drinks[0].strInstructions
            $('#drinkName').text(drinkName);
            $('#drinkImage').attr('src', drinkImage);
            console.log(response.drinks[0])

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


