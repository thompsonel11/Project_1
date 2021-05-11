var liquorType = ['vodka', 'whiskey', 'tequila', 'gin', 'liqueur', 'jagermeister', 'prosecco', 'rum']
var typeSearch = {
    "async": true,
    "crossDomain": true,
    "url": `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=jagermeister`,
    "method": "GET",
}

var cocktail = {
    "async": true,
    "crossDomain": true,
    "url": `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`,
    "method": "GET",
}

var choices = document.getElementById('choices')
var results = document.getElementById('results')

$(document).on('click', '.liquor', function () {
    choices.classList.add('hide')
    results.classList.remove('hide')


})

$.ajax(cocktail).done(function (response) {
    console.log(response);
    var drinkName = response.drinks[0].strDrink
    var drinkImage = response.drinks[0].strDrinkThumb
    $('#drinkName').text(drinkName);
    $('#drinkImage').attr('src', drinkImage);
    $('#ingredients').html('<h6><li>' + response.drinks[0].strMeasure1 + response.drinks[0].strIngredient1 + '</li>' +
        '<li>' + response.drinks[0].strMeasure2 + response.drinks[0].strIngredient2 + '</li>' +
        '<li>' + response.drinks[0].strMeasure3 + response.drinks[0].strIngredient3 + '</li></h6>' +
        '<li><p>' + response.drinks[0].strInstructions + '</p></li>')

})

$.ajax(typeSearch).done(function (response) {
    console.log(response);

    // var randomDrink = Math.floor(Math.random() * response.length);
    //  console.log('response.length:', response.length)
    //  console.log('randomDrink:', randomDrink)

})