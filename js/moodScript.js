// API FOR MOODS 
var mood = ['sad', 'happy', 'relaxed', 'reckless', 'flirty', 'angry', 'lonely', 'celebrate']

for (let i = 0; i < mood.length; i++) {

    
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://api.giphy.com/v1/gifs/search?api_key=H76z6WrcWkxdfruPUsbzRHEWsM4t19DK&q=${mood[i]}`,
        "method": "GET",
    }

    var randomGifNumber = Math.floor(Math.random() * 50);
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        var moodImg = $(`#${mood[i]}`)
        console.log('mood img ', moodImg)
        moodImg.attr('src', response.data[randomGifNumber].images.original.url)
    });
}
// API FOR LIQUOR TYPE
var liquorType = ['vodka', 'gin', 'whiskey', 'liqueur', 'rum', 'tequila', 'brandy', 'jagermeister']
var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquorType}`,
    "method": "GET",
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });