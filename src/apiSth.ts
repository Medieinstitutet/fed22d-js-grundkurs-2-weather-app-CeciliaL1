import convertDate from './convertdate';
import { convertTime, convertForeCastTime } from './convertTime';
import { station, currentDate, currentTime, currentTemp, currentWind, currentRain, currentMoist } from './main';
import { timeNow, tempNow, rainNow, windNow, moistNow } from './main';
import { foreCastTime, foreCastTemp, foreCastRain, foreCastWind, foreCastMoist} from './main';
import { conditionalsCurrentTemp } from './main';



// URL STOCKHOLM
const urlLatestSth = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/97400/period/latest-day/data.json';
const urlWindSth = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/4/station/97400/period/latest-day/data.json';
const urlRainSth = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/7/station/99280/period/latest-day/data.json';
const urlMoistSth = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/6/station/97400/period/latest-day/data.json';
const urlforeCastSth = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.063240/lat/59.334591/data.json';


export function getWeatherSth(){
    fetch(urlLatestSth)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        station.innerHTML = `Vädret i ${json.station.name.replace('-Arlanda Flygplats', '')} <br>`;
        currentDate.innerHTML += `${convertDate(json.value[20].date)}<br>  `;
        for (let i = 20; i < 25; i++){
          currentTime.innerHTML += `${convertTime(json.value[i].date)}<br> `;
          currentTemp.innerHTML += ` ${json.value[i].value} &#8451<br>`;
          if (json.value[i]?.value === undefined){
            currentTemp.innerHTML = currentTemp.innerHTML.replace('undefined', 'hittades ej');
            console.log('Hittade inte parametern');
          }
        }
      })
      .catch((err) => {
        console.error(err);
      })
      fetch(urlRainSth)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          for (let i = 20; i < 25; i++){
            currentRain.innerHTML += `${json.value[i]?.value}<br>`;
            if (json.value[i]?.value === undefined){
              currentRain.innerHTML = currentRain.innerHTML.replace('undefined', 'hittades ej');
              console.log('Hittade inte parametern');
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
      
      fetch(urlWindSth)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          for (let i = 20; i < 25; i++){
            currentWind.innerHTML += `${json.value[i]?.value}<br>`;
            if (json.value[i]?.value === undefined){
              currentWind.innerHTML = currentWind.innerHTML.replace('undefined', 'hittades ej');
              console.log('Hittade inte parametern');
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
           
      fetch(urlMoistSth)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          for (let i = 20; i < 25; i++){
            currentMoist.innerHTML += `${json.value[i]?.value}<br>`;
            if (json.value[i]?.value === undefined){
              currentMoist.innerHTML = currentMoist.innerHTML.replace('undefined', 'hittades ej');
              console.log('Hittade inte parametern');
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });

      fetch(urlforeCastSth)
        .then ((res) => {
          return res.json();
        })
        .then((json) => {
          for (let i = 0; i < 1; i++){
            timeNow.innerHTML += `${convertForeCastTime(json.timeSeries[i].validTime)}<br>`
            tempNow.innerHTML += `${json.timeSeries[i].parameters[10].values[0]}<br>`
            windNow.innerHTML += `${json.timeSeries[i].parameters[14].values[0]}<br>`
            rainNow.innerHTML += `${json.timeSeries[i].parameters[4].values[0]}<br>`
            moistNow.innerHTML += `${json.timeSeries[i].parameters[15].values[0]}<br>`
          }
          for (let i =1; i < 5; i++){
            foreCastTime.innerHTML += `${convertForeCastTime(json.timeSeries[i].validTime)}<br>`
            foreCastTemp.innerHTML += `${json.timeSeries[i].parameters[10].values[0]}<br>`
            foreCastWind.innerHTML += `${json.timeSeries[i].parameters[14].values[0]}<br>`
            foreCastRain.innerHTML += `${json.timeSeries[i].parameters[4].values[0]}<br>`
            foreCastMoist.innerHTML += `${json.timeSeries[i].parameters[15].values[0]}<br>`
          }
          conditionalsCurrentTemp(json);
        })
        .catch((err) =>{
          console.log(err);
        });
}