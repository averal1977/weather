
import { weather_data } from './data.js';

let loadDayForecastData = (ciudadSeleccionada) => {
    let arrayCiudad = weather_data.filter(element => element.city === ciudadSeleccionada);
    let [objCiudad] = arrayCiudad;
    //console.log (objCiudad);
    let {city, maxtemperature, mintemperature, cloudiness, wind, rainfall, forecast_today} = objCiudad;
    let [late, night] = forecast_today;
    let {text: textLate, temperature: temperatureLate, forecast: forecastLate, icon: iconLate} = late;
    let {text: textNight, temperature: temperatureNight, forecast: forecastNight, icon: iconNight} = night;

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

   //---------------------------
    let lateIcon = document.getElementById("late_icon");
    lateIcon.innerText = iconLate;
    
    let lateTemperature = document.getElementById("late_temperature");
    lateTemperature.innerText = temperatureLate;

    let lateForecast = document.getElementById("late_forecast");
    lateForecast.innerText = forecastLate;

    let lateText = document.getElementById("late_text");
    lateText.innerText = textLate;

    let nightIcon = document.getElementById("night_icon");
    nightIcon.innerText = iconNight;

    let nightTemperature = document.getElementById("night_temperature");
    nightTemperature.innerText = temperatureNight;

    let nightForecast = document.getElementById("night_forecast");
    nightForecast.innerText = forecastNight;

    let nightText = document.getElementById("night_text");
    nightText.innerText = textNight;

    // console.log(ciudad);
}

let loadWeekForecastData = (ciudadSeleccionada) => {
    let arrayCiudad = weather_data.filter(element => element.city === ciudadSeleccionada);
    let [objCiudad] = arrayCiudad;
    //console.log (objCiudad);
    let {forecast_week} = objCiudad;
    let ListForecastWeek = document.getElementById("forecastweek");
    let contenido = '';
   
    forecast_week.map(element => {
        let {text, date, temperature : {min, max}, icon} = element;	
        contenido += `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <div class="d-flex flex-column">
                    <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
                    <span class="text-xs">${date}</span>
                    </div>
                    <div class="d-flex align-items-center ">
                    <span class="font-weight-bold text-dark mx-2">${max}</span> |  <span class="text-dark mx-2">${min}</span>
                    <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
                    </div>
                </li>`;     
    })
    ListForecastWeek.innerHTML = contenido;
    // console.log(contenido);
}

let loadCiudad = () => {
    let objCiudades = document.getElementById('dropdownMenuButton');
    let ciudades = weather_data.map(element => element.city);
    ciudades.map(element => {
        objCiudades.innerHTML += `<option class="dropdown-item" value="${element}">${element}</option>`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadCiudad();
    loadDayForecastData('Guayaquil');
})

let btnCiudad = document.getElementById("dropdownMenuButton");
btnCiudad.addEventListener('change', (event) => {
    let ciudadSeleccionada = event.target.value;
    document.getElementById("forecastweek").innerHTML = '';
    loadDayForecastData(ciudadSeleccionada);
})

let botonCargar = document.getElementById("loadinfo");
botonCargar.addEventListener('click', (event) => {
    let ciudadSeleccionada = document.getElementById("dropdownMenuButton").value;
    loadWeekForecastData(ciudadSeleccionada);    
});

