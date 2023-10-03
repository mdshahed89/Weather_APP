console.log("what the fuck tell me");
const apiKey = "f96bf8180a8b6087920203fc61023b5a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weatherimg");

async function weatherData(cityName){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    if(response.status == 404)
    {
        document.querySelector(".invalid").style.display = "block";
        document.querySelector(".showornot").style.display = "none";
    }
    else
    {
    document.querySelector(".invalid").style.display = "none";
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºc";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".visibility").innerHTML = data.visibility;
    document.querySelector(".sealevel").innerHTML = data.main.sea_level;

    if(data.weather[0].main=="Clouds"){
        weatherImg.src = "imgs/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherImg.src = "imgs/sun1.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherImg.src = "imgs/rain.png";
    }
    else if(data.weather[0].main=="Mist" || data.weather[0].main=="Haze"){
        weatherImg.src = "imgs/mist.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherImg.src = "imgs/drizzle.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherImg.src = "imgs/snow.png";
    }

    document.querySelector(".showornot").style.display = "block";
    }

}
searchBtn.addEventListener("click", ()=>{
    weatherData(searchInput.value);
})

