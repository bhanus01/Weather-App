const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

searchBox.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        searchBtn.click();
    }
});
     async function checkWeather(city){
     let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97dba7712c22bf25d52c79b70c5074c5&units=metric`);
     
     if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
     }

     else{
        response = await response.json();


        document.querySelector('.city').innerHTML = response.name;
        document.querySelector('.temp').innerHTML = Math.round(response.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = response.main.humidity + "%";
        document.querySelector('.wind').innerHTML = response.wind.speed +" Km/h";

        if(response.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(response.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(response.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(response.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(response.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector('.error').style.display = "none";
     }
     
    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })