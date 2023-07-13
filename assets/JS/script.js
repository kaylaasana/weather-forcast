// request URLs
var currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
var geoCode = `http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid={API key}`;   
// store API keys
var apiKey = '6f32794f43e74f5523608b6bb0478735';
// element selectors
var searchBtn = document.getElementById('search-button');
var cityName = document.getElementById('search-input').value;


// functions
    // recent searches - check localStorage
        // function that displays data on page
    // search function --can be broken up into multiple functions if needed
    
    // function for storing search
        // update/call recent searches function
        // 

function searchValue(cityName){     
        // call function that saves recent searches
}
    // function coords(variable) {
        // fetch request for coords with API
        // .then - convert to JSON format
        // .then - receive and extract coord data
        // call weather function
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
    

// searchBtn.addEventListener("click", function(){
// // variable for search input
// // call function - search(variable)
// });

// event.target.addEventListener("click", function(event){
// // console.log(event.target)
// // create variable for search term (text on button)
// // call search function
// })