// var input = document.getElementById("#setCity").val();
var citiesArray = [];
var currentWeather = "";
var today = moment();
var labelHonolulu = document.querySelector(".label-honolulu");

$(".btn-honolulu").on("click", function () {
  localStorage.clear();
  var title = "Honolulu";
  var queryHonolulu =
    "https://api.openweathermap.org/geo/1.0/direct?q=honolulu&limit=10&appid=f36a53de48bea522c1d962429f2d35bb";

  $.ajax({
    url: queryHonolulu,
    method: "GET",
  }).then(function (data) {
    console.log("Ajax Reponse \n-------------");
    console.log(data);

    // var title = $("#setCity").val();
    var lat = data[0].lat;
    var lon = data[0].lon;

    localStorage.setItem("title", title);
    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);

    getWeatherAPI();
  });
});

$(".btn-denver").on("click", function () {
  localStorage.clear();
  var title = "Denver";
  var queryDenver =
    "https://api.openweathermap.org/geo/1.0/direct?q=Denver&limit=10&appid=f36a53de48bea522c1d962429f2d35bb";

  $.ajax({
    url: queryDenver,
    method: "GET",
  }).then(function (data) {
    console.log("Ajax Reponse \n-------------");
    console.log(data);

    // var title = $("#setCity").val();
    var lat = data[0].lat;
    var lon = data[0].lon;

    localStorage.setItem("title", title);
    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);

    getWeatherAPI();
  });
});

$(".btn-anchorage").on("click", function () {
  localStorage.clear();
  var title = "Anchorage";
  var queryAnchorage =
    "https://api.openweathermap.org/geo/1.0/direct?q=Anchorage&limit=10&appid=f36a53de48bea522c1d962429f2d35bb";

  $.ajax({
    url: queryAnchorage,
    method: "GET",
  }).then(function (data) {
    console.log("Ajax Reponse \n-------------");
    console.log(data);

    // var title = $("#setCity").val();
    var lat = data[0].lat;
    var lon = data[0].lon;

    localStorage.setItem("title", title);
    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);

    getWeatherAPI();
  });
});

$(".btn-London").on("click", function () {
  localStorage.clear();
  var title = "London";
  var queryLondon =
    "https://api.openweathermap.org/geo/1.0/direct?q=london&limit=10&appid=f36a53de48bea522c1d962429f2d35bb";

  $.ajax({
    url: queryLondon,
    method: "GET",
  }).then(function (data) {
    console.log("Ajax Reponse \n-------------");
    console.log(data);

    // var title = $("#setCity").val();
    var lat = data[0].lat;
    var lon = data[0].lon;

    localStorage.setItem("title", title);
    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);

    getWeatherAPI();
  });
});

$(".btn-rome").on("click", function () {
  localStorage.clear();
  var title = "Rome";
  var queryRome =
    "https://api.openweathermap.org/geo/1.0/direct?q=Rome&limit=10&appid=f36a53de48bea522c1d962429f2d35bb";

  $.ajax({
    url: queryRome,
    method: "GET",
  }).then(function (data) {
    console.log("Ajax Reponse \n-------------");
    console.log(data);

    // var title = $("#setCity").val();
    var lat = data[0].lat;
    var lon = data[0].lon;

    localStorage.setItem("title", title);
    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);

    getWeatherAPI();
  });
});

$(".btn-tokyo").on("click", function () {
  localStorage.clear();
  var title = "Tokyo";
  var queryTokyo =
    "https://api.openweathermap.org/geo/1.0/direct?q=Tokyo&limit=10&appid=f36a53de48bea522c1d962429f2d35bb";

  $.ajax({
    url: queryTokyo,
    method: "GET",
  }).then(function (data) {
    console.log("Ajax Reponse \n-------------");
    console.log(data);

    // var title = $("#setCity").val();
    var lat = data[0].lat;
    var lon = data[0].lon;

    localStorage.setItem("title", title);
    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);

    getWeatherAPI();
  });
});

$(".btn-tampa").on("click", function () {
  localStorage.clear();
  var title = "Tampa";
  var queryTampa =
    "https://api.openweathermap.org/geo/1.0/direct?q=Tampa&limit=10&appid=f36a53de48bea522c1d962429f2d35bb";

  $.ajax({
    url: queryTampa,
    method: "GET",
  }).then(function (data) {
    console.log("Ajax Reponse \n-------------");
    console.log(data);

    // var title = $("#setCity").val();
    var lat = data[0].lat;
    var lon = data[0].lon;

    localStorage.setItem("title", title);
    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);

    getWeatherAPI();
  });
});

$(".btn-sydney").on("click", function () {
  localStorage.clear();
  var title = "Sydney";
  var querySydney =
    "https://api.openweathermap.org/geo/1.0/direct?q=sydney&limit=10&appid=f36a53de48bea522c1d962429f2d35bb";

  $.ajax({
    url: querySydney,
    method: "GET",
  }).then(function (data) {
    console.log("Ajax Reponse \n-------------");
    console.log(data);

    // var title = $("#setCity").val();
    var lat = data[0].lat;
    var lon = data[0].lon;

    localStorage.setItem("title", title);
    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);

    getWeatherAPI();
  });
});

$(".searchBtn").on("click", function () {
  localStorage.clear();
  var title = $("#setCity").val();
  var startUrl = "https://api.openweathermap.org/geo/1.0/direct?q=";
  var endUrl = "&limit=10&appid=f36a53de48bea522c1d962429f2d35bb";
  var queryCityLatLon = startUrl + title + endUrl;

  $.ajax({
    url: queryCityLatLon,
    method: "GET",
  }).then(function (data) {
    console.log("Ajax Reponse \n-------------");
    console.log(data);

    // var title = $("#setCity").val();
    var lat = data[0].lat;
    var lon = data[0].lon;

    localStorage.setItem("title", title);
    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);

    getWeatherAPI();
  });
});

function getWeatherAPI() {
  var lat = localStorage.getItem("lat", lat);
  var lon = localStorage.getItem("lon", lon);
  var urlStart = "https://api.openweathermap.org/data/2.5/onecall?lat=";
  var urlEnd =
    "&exclude=minutely,hourly&units=imperial&appid=f36a53de48bea522c1d962429f2d35bb";
  var urlMid = "&lon=";
  var requestUrl = urlStart + lat + urlMid + lon + urlEnd;

  $.ajax({
    url: requestUrl,
    method: "GET",
  }).then(function (data) {
    var temp = data.current.temp;
    var wind = data.current.wind_speed;
    var humidity = data.current.humidity;
    var icon = data.current.weather[0].icon;
    var iconUrlStart = "https://openweathermap.org/img/wn/";
    var iconUrlEnd = "@2x.png";
    var uvi = data.current.uvi;
    var title = data.timezone;

    var temp1 = data.daily[0].temp.day;
    var wind1 = data.daily[0].wind_speed;
    var humidity1 = data.daily[0].humidity;
    var icon1 = data.daily[0].weather[0].icon;

    var temp2 = data.daily[1].temp.day;
    var wind2 = data.daily[1].wind_speed;
    var humidity2 = data.daily[1].humidity;
    var icon2 = data.daily[1].weather[0].icon;

    var temp3 = data.daily[2].temp.day;
    var wind3 = data.daily[2].wind_speed;
    var humidity3 = data.daily[2].humidity;
    var icon3 = data.daily[2].weather[0].icon;

    var temp4 = data.daily[3].temp.day;
    var wind4 = data.daily[3].wind_speed;
    var humidity4 = data.daily[3].humidity;
    var icon4 = data.daily[3].weather[0].icon;

    var temp5 = data.daily[4].temp.day;
    var wind5 = data.daily[4].wind_speed;
    var humidity5 = data.daily[4].humidity;
    var icon5 = data.daily[4].weather[0].icon;
    // for (var i = 0; i < data.length; i++) {

    console.log(data);

    localStorage.setItem("temp", temp);
    localStorage.setItem("wind", wind);
    localStorage.setItem("humidity", humidity);
    localStorage.setItem("icon", icon);
    localStorage.setItem("uvIndex", uvi);

    localStorage.setItem("temp1", temp1);
    localStorage.setItem("wind1", wind1);
    localStorage.setItem("humidity1", humidity1);
    localStorage.setItem("icon1", icon1);

    localStorage.setItem("temp2", temp2);
    localStorage.setItem("wind2", wind2);
    localStorage.setItem("humidity2", humidity2);
    localStorage.setItem("icon2", icon2);

    localStorage.setItem("temp3", temp3);
    localStorage.setItem("wind3", wind3);
    localStorage.setItem("humidity3", humidity3);
    localStorage.setItem("icon3", icon3);

    localStorage.setItem("temp4", temp4);
    localStorage.setItem("wind4", wind4);
    localStorage.setItem("humidity4", humidity4);
    localStorage.setItem("icon4", icon4);

    localStorage.setItem("temp5", temp5);
    localStorage.setItem("wind5", wind5);
    localStorage.setItem("humidity5", humidity5);
    localStorage.setItem("icon5", icon5);

    localStorage.getItem("icon", icon);
    $("#titleToday").text(localStorage.getItem("title", title));
    $("#tempToday").text("Temp: " + localStorage.getItem("temp", temp));
    $("#wind_speed").text("Wind Speed: " + localStorage.getItem("wind", wind));
    $("#humidityToday").text(
      "Humidity: " + localStorage.getItem("humidity", humidity)
    );
    $("#iconToday").attr("src", iconUrlStart + icon + iconUrlEnd);
    $("#uvIndex").text("UV Index: " + localStorage.getItem("uvIndex", uvi));

    $("#temp1").text("Temp: " + localStorage.getItem("temp1", temp1));
    $("#wind1").text("Wind Speed: " + localStorage.getItem("wind1", wind1));
    $("#humidity1").text(
      "Humidity: " + localStorage.getItem("humidity1", humidity1)
    );
    $("#icon1").attr("src", iconUrlStart + icon1 + iconUrlEnd);

    $("#temp2").text("Temp: " + localStorage.getItem("temp2", temp2));
    $("#wind2").text("Wind Speed: " + localStorage.getItem("wind2", wind2));
    $("#humidity2").text(
      "Humidity: " + localStorage.getItem("humidity2", humidity2)
    );
    $("#icon2").attr("src", iconUrlStart + icon2 + iconUrlEnd);

    $("#temp3").text("Temp: " + localStorage.getItem("temp3", temp3));
    $("#wind3").text("Wind Speed: " + localStorage.getItem("wind3", wind3));
    $("#humidity3").text(
      "Humidity: " + localStorage.getItem("humidity3", humidity3)
    );
    $("#icon3").attr("src", iconUrlStart + icon3 + iconUrlEnd);

    $("#temp4").text("Temp: " + localStorage.getItem("temp4", temp4));
    $("#wind4").text("Wind Speed: " + localStorage.getItem("wind4", wind4));
    $("#humidity4").text(
      "Humidity: " + localStorage.getItem("humidity4", humidity4)
    );
    $("#icon4").attr("src", iconUrlStart + icon4 + iconUrlEnd);

    $("#temp5").text("Temp: " + localStorage.getItem("temp5", temp5));
    $("#wind5").text("Wind Speed: " + localStorage.getItem("wind5", wind5));
    $("#humidity5").text(
      "Humidity: " + localStorage.getItem("humidity5", humidity5)
    );
    $("#icon5").attr("src", iconUrlStart + icon5 + iconUrlEnd);

    // var todaysWeather = data[i].current;
    // for (var i = 0; i < data.length; i++) {
    // };
  });
}

$("#today").text(moment().format("MMM Do, YYYY"));
$("#day1").text(moment().add(1, "days").format("MMM Do, YYYY"));
$("#day3").text(moment().add(3, "days").format("MMM Do, YYYY"));
$("#day4").text(moment().add(4, "days").format("MMM Do, YYYY"));
$("#day5").text(moment().add(5, "days").format("MMM Do, YYYY"));
$("#day2").text(moment().add(2, "days").format("MMM Do, YYYY"));
