
import { weather_data } from './data.js';

let {city_code, city, date, maxtemperature, mintemperature, cloudiness, wind, rainfall, forecast_today, forecast_week} = weather_data[0] 

let loadDayForecastData = () => {
	let ciudad = document.getElementById ('city');
    ciudad.innerHTML = city;

    let fecha = document.getElementById ('date');
    fecha.innerHTML = date;

    let maximot = document.getElementById ('maxtemperature');
    maximot.innerHTML = maxtemperature;

    let minimot = document.getElementById ('mintemperature');
    minimot.innerHTML = mintemperature;

    let nubes = document.getElementById ('cloudiness');
    nubes.innerHTML = cloudiness;

    let viento = document.getElementById ('wind');
    viento.innerHTML = wind;

    let lluvia = document.getElementById ('rainfall');
    lluvia.innerHTML = rainfall;

    // console.log(ciudad);
}

let loadWeekForecastData = () => {
    let {day, text, date, temperature, icon} = forecast_week[0];	
    let {min, max} = temperature;
    let listOfForecast= document.getElementsByClassName('list-group') ;
    let contenido = `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
    <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
    <span class="text-xs">${date}</span>
    </div>
    <div class="d-flex align-items-center ">
    <span class="font-weight-bold text-dark mx-2">${max}</span> |  <span class="text-dark mx-2">${min}</span>
    <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
    </div>
    </li>`;    
    listOfForecast[0].innerHTML = contenido
    // console.log(contenido);
}


loadDayForecastData();
loadWeekForecastData();