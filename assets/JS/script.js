// element selectors
var searchBtn = document.getElementById('search-button');
// request URLs

  

// functions
    // recent searches - check localStorage
        // function that displays data on page
    // search function --can be broken up into multiple functions if needed
    
    // function for storing search
        // update/call recent searches function
        // 

function searchCurrent(cityName){     
        // call function that saves recent searches
        var cityName = document.getElementById('search-input').value;
        var geoCode = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=6f32794f43e74f5523608b6bb0478735";

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
            getWeather(lat,lon) 
            getForecast(lat,lon)         
})}

function getWeather(lat, lon) {
    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=6f32794f43e74f5523608b6bb0478735&units=imperial";
    return fetch(currentWeather)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        document.querySelector('.current-weather').innerHTML = ''
        var weatherCard = document.createElement('div')
        weatherCard.setAttribute('class', 'card justify-content-start w-100')
        weatherCard.setAttribute('style', 'width: 18rem')
        var searchName = document.createElement('h3')
        searchName.textContent = data.name 
        var temp = document.createElement('h4')
        temp.textContent = 'Temperature: ' + Math.floor(data.main.temp) + " F";
        var icon = document.createElement('img')
        icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        icon.setAttribute('class', 'current-icon')
        var wind = document.createElement('p')
        wind.textContent = 'Wind Speed: ' + data.wind.speed + ' MPH'
        var humidity = document.createElement('p')
        humidity.textContent = 'Humidity: ' + data.main.humidity + ' %'
        var currentDate = dayjs().format('MMM-D')
        weatherCard.append(currentDate, searchName, temp, icon, wind, humidity);
        document.querySelector('.current-weather').append(weatherCard);
    });    
}

function getForecast(lat, lon) {
    var currentWeather = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=6f32794f43e74f5523608b6bb0478735&units=imperial";
    return fetch(currentWeather)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        document.querySelector('#weather-forecast').innerHTML = ''
        for(var i = 4; i < data.list.length; i+=8){
            console.log(data.list[i])            
            var forecastCard = document.createElement('div')
            forecastCard.setAttribute('class', 'card col')
            forecastCard.setAttribute('style', 'width: 18rem')
            var temp = document.createElement('h5')
            temp.textContent = Math.floor(data.list[i].main.temp) + " F";
            var icon = document.createElement('img')
            icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`)
            icon.setAttribute('class', 'current-icon')
            var forecastDate = data.dt_txt
            forecastCard.append(temp, icon)
            document.getElementById('weather-forecast').append(forecastCard)
        }
    }); 
       
}
   

searchBtn.addEventListener("click", function(){
    searchCurrent();
});

// event.target.addEventListener("click", function(event){
// // console.log(event.target)
// // create variable for search term (text on button)
// // call search function
// })