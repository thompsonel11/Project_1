var liquorType = ['vodka', 'whiskey', 'tequila', 'gin', 'liqueur', 'jagermeister', 'prosecco', 'rum']
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
            $('#drinkName').text(drinkName);
            $('#drinkImage').attr('src', drinkImage);
            console.log(response.drinks[0])
            for ( var i = 1; i < 15; i++) {
                // console.log(response.drinks[0]['strIngredient'+i])
               if (response.drinks[0]['strIngredient'+i] === null){
                   break;
               }
               console.log(response.drinks[0]['strIngredient'+i])
                 // $('#ingredients').html('<h6><li>' + response.drinks[0].strMeasure(i) + response.drinks[0].strIngredient(i) + '</li>' )
                
            }

           /*
                '<li>' + response.drinks[0].strMeasure2 + response.drinks[0].strIngredient2 + '</li>' +
                '<li>' + response.drinks[0].strMeasure3 + response.drinks[0].strIngredient3 + '</li></h6>' +
                '<li><p>' + response.drinks[0].strInstructions + '</p></li>')*/
        })
    })
}



// for loop to pull random result based on response.length of ingredient array
// response.drinks[i].idDrink
// use that # to get 2nd array which will populate the webpage

//create for loop to ignore null fields
//nullish coalesing operator
// stop for loop: break: if field = null (break)    

// var liquorImage = $(`#${liquorType[i]}`)
        // console.log('liquorImage:', liquorImage)