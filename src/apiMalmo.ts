import convertDate from './convertdate';
import { convertTime, convertForeCastTime } from './convertTime';
import { station, currentDate, currentTime, currentTemp, currentWind, currentRain, currentMoist } from './main';
import { timeNow, tempNow, rainNow, windNow, moistNow } from './main';
import { foreCastTime, foreCastTemp, foreCastRain, foreCastWind, foreCastMoist} from './main';
import { conditionalsCurrentTemp } from './main';

// URL MALMO
const urlLatestMalmo = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/52350/period/latest-day/data.json';
const urlWindMalmo = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/4/station/52350/period/latest-day/data.json';
const urlRainMalmo = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/7/station/52350/period/latest-day/data.json';
const urlMoistMalmo = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/6/station/52350/period/latest-day/data.json';
const urlforeCastMalmo = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/13.00073/lat/55.60587/data.json';

export function getWeatherMalmo(){
fetch(urlLatestMalmo)
.then((res) => {
  return res.json();
})
.then((json) => {
  station.innerHTML = `Vädret i ${json.station.name.replace(' A', ' ')} <br>`;
  currentDate.innerHTML += `${convertDate(json.value[20].date)}<br>`;

  for (let i = 20; i < 24; i++){
    currentTime.innerHTML += `${convertTime(json.value[i].date)}<br> `;
    currentTemp.innerHTML += `${json.value[i]?.value} &#8451<br>`
    if (json.value[i]?.value == undefined){
      currentTemp.innerHTML = currentTemp.innerHTML.replace('undefined', 'null');
      console.log('Hittade inte parametern')
    }
  }
})
.catch((err) => {
  console.error(err);
});

fetch(urlRainMalmo)
.then((res) => {
return res.json();
})
.then((json) => {

for (let i = 20; i < 24; i++){
  currentRain.innerHTML += `${json.value[i]?.value}<br>`;
  if (json.value[i]?.value === undefined){
    currentRain.innerHTML = currentRain.innerHTML.replace('undefined', 'null');
    console.log('Hittade inte parametern');
  }
}
})
.catch((err) => {
console.error(err);
});

fetch(urlWindMalmo)
.then((res) => {
return res.json();
})
.then((json) => {
for (let i = 20; i < 24; i++){
  currentWind.innerHTML += `${json.value[i]?.value}<br>`;
  if (json.value[i]?.value === undefined){
    currentWind.innerHTML = currentWind.innerHTML.replace('undefined', 'null');
    console.log('Hittade inte parametern');
  }
}
})
.catch((err) => {
console.error(err);
});
 
fetch(urlMoistMalmo)
.then((res) => {
return res.json();
})
.then((json) => {
for (let i = 20; i < 24; i++){
  currentMoist.innerHTML += `${json.value[i]?.value}<br>`;
  if (json.value[i]?.value === undefined){
    currentMoist.innerHTML = currentMoist.innerHTML.replace('undefined', 'null');
    console.log('Hittade inte parametern');
  }
}
})
.catch((err) => {
console.error(err);
});
fetch(urlforeCastMalmo)
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

for (let i = 1; i < 5; i++){
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

