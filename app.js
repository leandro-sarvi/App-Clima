const body= document.body;
const info= document.getElementById("info");
const card = document.getElementById("cd");
const inputs = document.getElementById("search-bar");
const btn = document.getElementById("btn");
const expReg = /[a-zA-Z ]{2,254}/gm;
const api = {
    key:`d88f68d030e95c37bc116889f03ed49b`,
    url:`https://api.openweathermap.org/data/2.5/weather`
}
const hoy = new Date();
//?q=${city name}&appid=${API key}
window.addEventListener("load",search("buenos aires"));
btn.addEventListener("click",clickBtn);
function clickBtn(){
    if(expReg.test(inputs.value)==true){
        search(inputs.value);
        inputs.value="";
    }
}
async function search(query){
    try {
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
        let data = await response.json();
        console.log(data);
        if(data.cod == 404){ 
         alert("Ciudad no encontrada");
        }else{
            info.innerHTML=`
            <div class="weather">
                    <div class="temp"> 
                    <h1 >${celsius(data.main.temp)}°C</h1>
                    <h3>min: ${celsius(data.main.temp_min)}°/</h3>
                    <h3>max: ${celsius(data.main.temp_max)}°</h3>
                    </div>
                    <h2 class="city">${data.name}, ${data.sys.country}</h2>
                    <div class="flex">
                      <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" class="icon"/>
                      <div class="description">${data.weather[0].description}</div>
                    </div>  
                    
                    <h3>Humedad: ${data.main.humidity}%</h3>
                    <h3>Presión: ${data.main.pressure}hPa</h3>
                    <h3><i class="fas fa-wind"></i>: ${data.wind.speed} km/h</h3>
                    <div class="flex">
                    <h3>Lon: ${data.coord.lon}</h3>
                    <h3>Lat: ${data.coord.lat}</h3>
                    </div>
                </div>
            `;
            tempImg(data.weather[0].icon);
        }
    } catch (error) {
        console.log(error);
    }
}
function celsius(kelvin){
return Math.round(kelvin - 273.15)
}
function tempImg(icon){
    console.log(icon);
    switch (icon) {
        case "01d":
            body.style.backgroundImage="url(./img/01d.jpg)";
            break;
            case "01n":
            body.style.backgroundImage="url(./img/01n.jpg)";
            break;
            case "02d":
                body.style.backgroundImage="url(./img/02d.jpg)";
                break;
                case "02n":
                body.style.backgroundImage="url(./img/02n.jpg)";
                break;
                case "03d":
                    body.style.backgroundImage="url(./img/03d.jpg)";
                    break;
                    case "04d":
                        body.style.backgroundImage="url(./img/04d.jpg)";
                        break;
                         case "09d":
                         body.style.backgroundImage="url(./img/09d.jpg)";
                         break;
                         case "10d":
                         body.style.backgroundImage="url(./img/10d.jpg)";
                         break;
                         case "10n":
                         body.style.backgroundImage="url(./img/10n.gif)";
                         break;
                         case "11d":
                         body.style.backgroundImage="url(./img/11d.jpg)";
                         break;
                         case "11n":
                         body.style.backgroundImage="url(./img/11n.jpg)";
                         break;
                         case "13d":
                         body.style.backgroundImage="url(./img/13d.jpg)";
                         break;
                         case "50d":
                         body.style.backgroundImage="url(./img/50d.jpg)";
                         break;
                         case "50n":
                         body.style.backgroundImage="url(./img/50n.jpg)";
                         break;
    }
}