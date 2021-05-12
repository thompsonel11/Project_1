const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-cocktail-db.p.rapidapi.com/random.php",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "eb0118c1d1mshee2be64239a8bccp1b9027jsn78e29b72b859",
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});