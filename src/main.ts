import './style/style.scss';
import { getWeatherMalmo } from './apiMalmo';
import { getWeatherGbg } from './apiGbg';
import { getWeatherSth } from './apiSth';

/*
// IMPORT FOR WHEN USING LOCAL OBJECTS
import { dataCurrentTempMalmo, windMalmo, rainMalmo, moistMalmo } from './currentMalmo';
import { dataCurrentTempGbg, windGbg, rainGbg, moistGbg } from './currentGbg';
import { dataCurrentTempSth, windSth, rainSth, moistSth } from './currentSth';
*/

/**************************************************
 * DECLARE VARIABLES
 * ************************************************
 */
const cityBtn = document.querySelectorAll('.cityBtn');
const tempInfoDiv = document.querySelector('#tempInfo') as HTMLDivElement;
export const station = document.querySelector('#station') as HTMLElement;
export const currentDate = document.querySelector('#currentDate') as HTMLElement;
export const currentTime = document.querySelector('#currentTime') as HTMLElement;
export const currentTemp = document.querySelector('#currentTemp') as HTMLElement;
export const currentWind = document.querySelector('#currentWind') as HTMLElement;
export const currentRain = document.querySelector('#currentRain') as HTMLElement;
export const currentMoist = document.querySelector('#currentMoist') as HTMLElement;


export const timeNow = document.querySelector('#timeNow') as HTMLElement;
export const tempNow = document.querySelector('#tempNow') as HTMLElement;
export const windNow = document.querySelector('#windNow') as HTMLElement;
export const rainNow = document.querySelector('#rainNow') as HTMLElement;
export const moistNow = document.querySelector('#moistNow') as HTMLElement;

export const foreCastTime = document.querySelector('#foreCastTime') as HTMLElement;
export const foreCastTemp = document.querySelector('#foreCastTemp') as HTMLElement;
export const foreCastWind = document.querySelector('#foreCastWind') as HTMLElement;
export const foreCastRain = document.querySelector('#foreCastRain') as HTMLElement;
export const foreCastMoist = document.querySelector('#foreCastMoist') as HTMLElement;

const main = document.querySelector('main') as HTMLElement;

// DATES
const date = new Date();
const hour: number = date.getHours();


/*********************************************************
 * FUNCTIONS
 * **********************************************************
 */


 /*****************************************************
  * For when fetching from local object
  * ****************************************************
  */

 // IF IT IS THIS WEATHER AT THIS TIME.
// LOCAL OBJECT. -  ONLY ON MALMO!!
/*
function conditionalsCurrentTemp(){
  const actualTempMalmo = Number(dataCurrentTempMalmo.value[24].value);
  if (actualTempMalmo < 0){
    main.classList.add('minusdegrees');
  }
}
*/

 /*
  function cityfunction(event: any){
  tempInfoDiv.classList.add('tempinfook');
  currentDate.innerHTML = '';
  currentTime.innerHTML = '';
  currentTemp.innerHTML = '';
  currentWind.innerHTML = '';
  currentRain.innerHTML = '';
  currentMoist.innerHTML = '';

  const index = event.currentTarget.dataset.id;
  const stationNameMalmo = dataCurrentTempMalmo.station.name;
  const _stationNameMalmo = stationNameMalmo.replace(' A', '').toLowerCase();
  const stationNameGbg = dataCurrentTempGbg.station.name;
  const _stationNameGbg = stationNameGbg.replace(' A', '').toLowerCase();
  const stationNameSth = dataCurrentTempSth.station.name;
  const _stationNameSth = stationNameSth.replace('-Arlanda Flygplats', '').toLowerCase();

    if (_stationNameMalmo === index){
      station.innerHTML = `Vädret i ${stationNameMalmo.replace(' A', ' ')} <br>`;
      currentDate.innerHTML += `${convertDate(dataCurrentTempMalmo.value[20].date)}<br>`;

      for (let i = 20; i < 25; i++){
        currentTime.innerHTML += `${convertTime(dataCurrentTempMalmo.value[i].date)}<br> `;
        currentTemp.innerHTML += ` ${dataCurrentTempMalmo.value[i].value} &#8451<br>`
        currentWind.innerHTML += `${windMalmo.value[i].value}<br>`
        currentRain.innerHTML += `${rainMalmo.value[i].value}<br>`
        currentMoist.innerHTML += `${moistMalmo.value[i].value}<br>`
      }

    }
    else if (_stationNameGbg === index){
      station.innerHTML = `Vädret i ${stationNameGbg.replace(' A', ' ')} <br>`;
      currentDate.innerHTML += `${convertDate(dataCurrentTempGbg.value[20].date)}<br>`;

      for (let i = 20; i < 25; i++){
        currentTime.innerHTML += `${convertTime(dataCurrentTempGbg.value[i].date)}<br> `;
        currentTemp.innerHTML += ` ${dataCurrentTempGbg.value[i].value} &#8451<br>`
        currentWind.innerHTML += `${windGbg.value[i].value}<br>`
        currentRain.innerHTML += `${rainGbg.value[i].value}<br>`
        currentMoist.innerHTML += `${moistGbg.value[i].value}<br>`
      }

  }
    else if (_stationNameSth === index){
      station.innerHTML = `Vädret i ${stationNameSth.replace('-Arlanda Flygplats', '')} <br>`;
      currentDate.innerHTML += `${convertDate(dataCurrentTempSth.value[20].date)}<br>  `;
      currentDate.innerHTML += `Info för regn hämtad från Svenska Högarna`
      
      for (let i = 20; i < 25; i++){
        currentTime.innerHTML += `${convertTime(dataCurrentTempSth.value[i].date)}<br> `;
        currentTemp.innerHTML += ` ${dataCurrentTempSth.value[i].value} &#8451<br>`;
        currentWind.innerHTML += `${windSth.value[i].value}<br>`
        currentRain.innerHTML += `${rainSth.value[i].value}<br>`
        currentMoist.innerHTML += `${moistSth.value[i].value}<br>`
      }

 }
 conditionalsCurrentTemp();
}




*/
/***********************************************
 * REAL FETCH FROM API 
 * ***********************************************
 */

// IF IT IS DAY/DUSK/NIGHT
function conditionals(){
  // if time is 21 -22  or time is 4-5, it's dusk
  if ( hour > 20 && hour < 23 || hour < 6 ){
    main.classList.add('dusk');
  }
  // if time is 23-4 , it's night
  if ( hour > 22 || hour === 0 || hour < 4){
    main.classList.add('night');
  }
}

export function conditionalsCurrentTemp(json: any){
  const actualTemp = Number(json.timeSeries[0].parameters[10].values[0]);
  const actualRain = Number(json.timeSeries[0].parameters[4].values[0]);
  if (actualTemp < 0 && actualRain === 0){
    main.classList.remove('rain')
    main.classList.add('minusdegrees');
  }
  else if(actualRain > 0 && actualTemp > 0){
    main.classList.remove('minusdegrees')
    main.classList.add('rain');
  }
  else{
    main.classList.remove('minusdegrees');
    main.classList.remove('rain');
  }
}

function cityfunction(event: any){
  tempInfoDiv.classList.add('tempinfook');
  currentDate.innerHTML = '';
  currentTime.innerHTML = '';
  currentTemp.innerHTML = '';
  currentWind.innerHTML = '';
  currentRain.innerHTML = '';
  currentMoist.innerHTML = '';

  timeNow.innerHTML = '';
  tempNow.innerHTML = '';
  windNow.innerHTML = '';
  rainNow.innerHTML = '';
  moistNow.innerHTML = '';

  foreCastTime.innerHTML = ''; 
  foreCastTemp.innerHTML = '';
  foreCastWind.innerHTML = ''; 
  foreCastRain.innerHTML = ''; 
  foreCastMoist.innerHTML = '';

  const index = event.currentTarget.dataset.id;

    if (index === 'malmö'){
      getWeatherMalmo();
    }
   else if (index === 'göteborg'){
      getWeatherGbg();

    }
    else if ( index === 'stockholm'){
      getWeatherSth();
    }
 }

/************************************************************
 * LOGIC
 * *******************************************************
 */

cityBtn.forEach((btn) => {
    btn.addEventListener('click', cityfunction);
})
    
conditionals();