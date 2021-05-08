// APIs FOR MOODS 

var mood = [sad, happy, relaxed, reckless, flirty, angry, lonely, celebrate]
var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.giphy.com/v1/gifs/search?api_key=H76z6WrcWkxdfruPUsbzRHEWsM4t19DK&q=${mood}`,
    "method": "GET",
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });