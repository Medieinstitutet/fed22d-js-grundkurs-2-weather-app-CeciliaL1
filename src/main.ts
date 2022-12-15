import './style/style.scss';

// IMPORT FOR WHEN USING LOCAL OBJECTS
/*
import { dataCurrentTempMalmo, windMalmo, rainMalmo, moistMalmo } from './currentMalmo';
import { dataCurrentTempGbg, windGbg, rainGbg, moistGbg } from './currentGbg';
import { dataCurrentTempSth, windSth, rainSth, moistSth } from './currentSth';
*/
// IMPORTS FOR CONVERTING DATE & TIME
import convertDate from './convertdate';
import { convertTime, convertForeCastTime } from './convertTime';

/**************************************************
 * DECLARE VARIABLES
 * ************************************************
 */
const cityBtn = document.querySelectorAll('.cityBtn');
const tempInfoDiv = document.querySelector('#tempInfo') as HTMLDivElement;
const station = document.querySelector('#station') as HTMLElement;
const currentDate = document.querySelector('#currentDate') as HTMLElement;
const currentTime = document.querySelector('#currentTime') as HTMLElement;
const currentTemp = document.querySelector('#currentTemp') as HTMLElement;
const currentWind = document.querySelector('#currentWind') as HTMLElement;
const currentRain = document.querySelector('#currentRain') as HTMLElement;
const currentMoist = document.querySelector('#currentMoist') as HTMLElement;

const foreCastTime = document.querySelector('#foreCastTime') as HTMLElement;
const foreCastTemp = document.querySelector('#foreCastTemp') as HTMLElement;
const foreCastWind = document.querySelector('#foreCastWind') as HTMLElement;
const foreCastRain = document.querySelector('#foreCastRain') as HTMLElement;
const foreCastMoist = document.querySelector('#foreCastMoist') as HTMLElement;

const main = document.querySelector('main') as HTMLElement;

// DATES
const date = new Date();
const hour: number = date.getHours();

/*********************************************
 * URL WHEN FETCHING FROM REAL API
 * ***********************************************
 */
// URL MALMO
const urlLatestMalmo = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/52350/period/latest-day/data.json';
const urlWindMalmo = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/4/station/52350/period/latest-day/data.json';
const urlRainMalmo = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/7/station/52350/period/latest-day/data.json';
const urlMoistMalmo = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/6/station/52350/period/latest-day/data.json';
const urlforeCastMalmo = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/13.00073/lat/55.60587/data.json';

// URL GOTHENBURG
const urlLatestGbg = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/71420/period/latest-day/data.json';
const urlWindGbg = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/4/station/71420/period/latest-day/data.json';
const urlRainGbg = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/7/station/71420/period/latest-day/data.json';
const urlMoistGbg = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/6/station/71420/period/latest-day/data.json';
const urlforeCastGbg = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.974560/lat/57.708870/data.json';

// URL STOCKHOLM
const urlLatestSth = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/97400/period/latest-day/data.json';
const urlWindSth = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/4/station/97400/period/latest-day/data.json';
const urlRainSth = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/7/station/99280/period/latest-day/data.json';
const urlMoistSth = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/6/station/97400/period/latest-day/data.json';
const urlforeCastSth = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.063240/lat/59.334591/data.json';

/*********************************************************
 * FUNCTIONS
 * **********************************************************
 */

// IF IT IS DAY/DUSK/NIGHT
function conditionals(){
  // klockan 21 -22 Skymning eller klockan 4-5
  if ( hour > 20 && hour < 23 || hour < 6 ){
    main.classList.add('dusk');
  }
  // klockan 23-04 natt
  if ( hour > 22 || hour === 0 || hour < 4){
    main.classList.add('night');
    console.log('natt')
  }
}


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
//API_fetch

function conditionalsCurrentTemp(json: any){
  const actualTemp = Number(json.value[23].value)
  if (actualTemp < 0){
    main.classList.add('minusdegrees');
  }else{
    main.classList.remove('minusdegrees');
  }
}


 /*****************************************************
  * For when fetching from local object
  * ****************************************************
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

function cityfunction(event: any){
  tempInfoDiv.classList.add('tempinfook');
  currentDate.innerHTML = '';
  currentTime.innerHTML = '';
  currentTemp.innerHTML = '';
  currentWind.innerHTML = '';
  currentRain.innerHTML = '';
  currentMoist.innerHTML = '';

  foreCastTime.innerHTML = ''; 
  foreCastTemp.innerHTML = '';
  foreCastWind.innerHTML = ''; 
  foreCastRain.innerHTML = ''; 
  foreCastMoist.innerHTML = '';

  const index = event.currentTarget.dataset.id;

    if (index === 'malmö'){
        fetch(urlLatestMalmo)
          .then((res) => {
            return res.json();
          })
          .then((json) => {
            station.innerHTML = `Vädret i ${json.station.name.replace(' A', ' ')} <br>`;
            currentDate.innerHTML += `${convertDate(json.value[20].date)}<br>`;

            for (let i = 20; i < 25; i++){
              currentTime.innerHTML += `${convertTime(json.value[i].date)}<br> `;
              currentTemp.innerHTML += `${json.value[i]?.value} &#8451<br>`
              if (json.value[i]?.value == undefined){
                currentTemp.innerHTML = ' ';
                console.log('Hittade inte parametern')
              }
            }
            
            conditionalsCurrentTemp(json);
          })
          .catch((err) => {
            console.error(err);
          });

      fetch(urlRainMalmo)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          
          for (let i = 20; i < 25; i++){
            currentRain.innerHTML += `${json.value[i]?.value}<br>`;
            if (json.value[i]?.value === undefined){
              currentRain.innerHTML += `Värdet hittades ej<br>`;
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
          for (let i = 20; i < 25; i++){
            currentWind.innerHTML += `${json.value[i]?.value}<br>`;
            if (json.value[i]?.value === undefined){
              currentWind.innerHTML += `Värdet hittades ej<br>`;;
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
          for (let i = 20; i < 25; i++){
            currentMoist.innerHTML += `${json.value[i]?.value}<br>`;
            if (json.value[i]?.value === undefined){
              currentMoist.innerHTML += `Värdet hittades ej<br>`;
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
          console.log(json)
          for (let i = 1; i < 5; i++){
            foreCastTime.innerHTML += `${convertForeCastTime(json.timeSeries[i].validTime)}<br>`
            foreCastTemp.innerHTML += `${json.timeSeries[i].parameters[10].values[0]}<br>`
            foreCastWind.innerHTML += `${json.timeSeries[i].parameters[14].values[0]}<br>`
            foreCastRain.innerHTML += `${json.timeSeries[i].parameters[4].values[0]}<br>`
            foreCastMoist.innerHTML += `${json.timeSeries[i].parameters[15].values[0]}<br>`
          }
        })
        .catch((err) =>{
          console.log(err);
        });
    }
   else if (index === 'göteborg'){
    fetch(urlLatestGbg)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        station.innerHTML = `Vädret i ${json.station.name.replace(' A', ' ')} <br>`;
        currentDate.innerHTML += `${convertDate(json.value[20].date)}<br>`;

         for (let i = 20; i < 25; i++){
            currentTime.innerHTML += `${convertTime(json.value[i].date)}<br> `;
            currentTemp.innerHTML += `${json.value[i]?.value} &#8451<br>`;
            if (json.value[i]?.value === undefined){
              currentTemp.innerHTML += `Värdet hittades ej<br>`;
              console.log('Hittade inte parametern');
            }
        }
        conditionalsCurrentTemp(json);
      })
      .catch((err) => {
        console.error(err);
      });

      fetch(urlRainGbg)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          for (let i = 20; i < 25; i++){
            currentRain.innerHTML += `${json.value[i]?.value}<br>`;
            if (json.value[i]?.value === undefined){
              currentRain.innerHTML += `Värdet hittades ej<br>`;
              console.log('Hittade inte parametern');
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
      
      fetch(urlWindGbg)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          for (let i = 20; i < 25; i++){
            currentWind.innerHTML += `${json.value[i]?.value}<br>`;
            if (json.value[i]?.value === undefined){
              currentWind.innerHTML += `Värdet hittades ej<br>`;
              console.log('Hittade inte parametern');
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
           
      fetch(urlMoistGbg)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          for (let i = 20; i < 25; i++){
            currentMoist.innerHTML += `${json.value[i]?.value}<br>`;
            if (json.value[i]?.value === undefined){
              currentMoist.innerHTML += `Värdet hittades ej<br>`;
              console.log('Hittade inte parametern');
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });

      fetch(urlforeCastGbg)
        .then ((res) => {
          return res.json();
        })
        .then((json) => {
          for (let i = 1; i < 5; i++){
            foreCastTime.innerHTML += `${convertForeCastTime(json.timeSeries[i].validTime)}<br>`
            foreCastTemp.innerHTML += `${json.timeSeries[i].parameters[10].values[0]}<br>`
            foreCastWind.innerHTML += `${json.timeSeries[i].parameters[14].values[0]}<br>`
            foreCastRain.innerHTML += `${json.timeSeries[i].parameters[4].values[0]}<br>`
            foreCastMoist.innerHTML += `${json.timeSeries[i].parameters[15].values[0]}<br>`
          }
        })
        .catch((err) =>{
          console.log(err);
        });

    }
    else if ( index === 'stockholm'){
    fetch(urlLatestSth)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        station.innerHTML = `Vädret i ${json.station.name.replace('-Arlanda Flygplats', '')} <br>`;
        currentDate.innerHTML += `${convertDate(json.value[20].date)}<br>  `;
        currentDate.innerHTML += `informationen för regn hämtad från Svenska Högarna`;
        for (let i = 20; i < 25; i++){
          currentTime.innerHTML += `${convertTime(json.value[i].date)}<br> `;
          currentTemp.innerHTML += ` ${json.value[i].value} &#8451<br>`;
          if (json.value[i]?.value === undefined){
            currentTemp.innerHTML += `Värdet hittades ej<br>`;
            console.log('Hittade inte parametern');
          }
        }
        conditionalsCurrentTemp(json);
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
              currentRain.innerHTML += `Värdet hittades ej<br>`;
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
              currentWind.innerHTML += `Värdet hittades ej<br>`;
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
              currentMoist.innerHTML += `Värdet hittades ej<br>`;
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
          console.log(json)
          for (let i = 1; i < 5; i++){
            foreCastTime.innerHTML += `${convertForeCastTime(json.timeSeries[i].validTime)}<br>`
            foreCastTemp.innerHTML += `${json.timeSeries[i].parameters[10].values[0]}<br>`
            foreCastWind.innerHTML += `${json.timeSeries[i].parameters[14].values[0]}<br>`
            foreCastRain.innerHTML += `${json.timeSeries[i].parameters[4].values[0]}<br>`
            foreCastMoist.innerHTML += `${json.timeSeries[i].parameters[15].values[0]}<br>`
          }
        })
        .catch((err) =>{
          console.log(err);
        });
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