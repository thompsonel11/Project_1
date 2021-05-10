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

$.ajax(cocktail).done(function (response) {
    console.log(response);
    var drinkName = response.drinks[0].strDrink
    $('#drinkName').text(drinkName)
    var drinkImage = response.drinks[0].strDrinkThumb
    $('#drinkImage').attr('src', drinkImage)
    console.log('drinkImage:', drinkImage)
})

  $.ajax(typeSearch).done(function (response) {
    console.log(response);

    // var randomDrink = Math.floor(Math.random() * response.length);
    //  console.log('response.length:', response.length)
    //  console.log('randomDrink:', randomDrink)
    
})