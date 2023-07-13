// element selectors
var searchBtn = document.getElementById('search-button');
// request URLs
var currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=6f32794f43e74f5523608b6bb0478735`;
  

// functions
    // recent searches - check localStorage
        // function that displays data on page
    // search function --can be broken up into multiple functions if needed
    
    // function for storing search
        // update/call recent searches function
        // 

function searchGeo(cityName){     
        // call function that saves recent searches
        var cityName = document.getElementById('search-input').value;
        var geoCode = "https://api.openweathermap.org/geo/1.0/direct?q={" + cityName + "}&appid=6f32794f43e74f5523608b6bb0478735";

        fetch(geoCode)
            .then(function(response){
                return response.json();                
            })
            .then(function(data){
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
            console.log(lat);
            console.log(lon);
            coords(lat,lon);
        })
}
// function coords(lat, lon) {
// // //         // fetch request for coords with API
// // //         // .then - convert to JSON format
// // //         // .then - receive and extract coord data
// // //         var long;
// // //         var lat;
// // //         // call weather function
// }
    // function weather(coords) {
        // use coords from first fetch to fetch weather data from API
        // convert to JSON format
        // extract temp, wind and humidity +5 day forecast from object data
        // call display data function
// }
    // function display data(multiple variables, variable, variable, etc) {
        // display data to page dependant on HTML
// }
    

searchBtn.addEventListener("click", function(){
    searchGeo();
});

// event.target.addEventListener("click", function(event){
// // console.log(event.target)
// // create variable for search term (text on button)
// // call search function
// })