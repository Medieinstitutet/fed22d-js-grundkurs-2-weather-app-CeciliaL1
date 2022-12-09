import './style/style.scss';
/**
 * IMPORT FOR WHEN USING LOCAL OBJECTS
 */
// import dataCurrentTempMalmo from './currentTempMalmo' 
// import dataCurrentTempGbg from './currentTempGbg'
// import dataCurrentTempSth from './currentTempSth' // for when fetching from local object
import convertDate from './convertdate';
import convertTime from './convertTime';

/**
 * DECLARE VARIABLES
 */
const cityBtn = document.querySelectorAll('.cityBtn');
const tempInfoDiv = document.querySelector('#tempInfo') as HTMLDivElement;
const station = document.querySelector('#station') as HTMLElement;
const currentDate = document.querySelector('#currentDate') as HTMLElement;
const currentTime = document.querySelector('#currentTime') as HTMLElement;
const currentTemp = document.querySelector('#currentTemp') as HTMLElement;

/*
export const currentWind = document.querySelector('#currentWind') as HTMLElement;
export const currentPrecipitation = document.querySelector('#currentPrecipitation') as HTMLElement;
export const currentMoist = document.querySelector('#currentMoist') as HTMLElement;
*/



 /*********************************************************
 * FUNCTIONS
 * **********************************************************
 */


 /*****************************************************
  * For when fetching from local object
  * ****************************************************
  */
/*

 function cityfunction(event: any){
  tempInfoDiv.classList.add('tempinfook');
    const index = event.currentTarget.dataset.id;
   
    const stationNameMalmo = dataCurrentTempMalmo.station.name;
    const _stationNameMalmo = stationNameMalmo.replace(' A', '').toLowerCase();

    const stationNameGbg = dataCurrentTempGbg.station.name;
    const _stationNameGbg = stationNameGbg.replace(' A', '').toLowerCase();

    const stationNameSth = dataCurrentTempSth.station.name;
    const _stationNameSth = stationNameSth.replace('-Arlanda Flygplats', '').toLowerCase();

    if (_stationNameMalmo === index){
      currentDate.innerHTML = '';
      currentTime.innerHTML = '';
      currentTemp.innerHTML = '';
        station.innerHTML = `Vädret i ${stationNameMalmo.replace(' A', ' ')} <br>`;
        currentDate.innerHTML += `${convertDate(dataCurrentTempMalmo.value[0].date)}<br>`;
      for (let i = 20; i < 25; i++){
        currentTime.innerHTML += `${convertTime(dataCurrentTempMalmo.value[i].date)}<br> `;
        currentTemp.innerHTML += ` ${dataCurrentTempMalmo.value[i].value} &#8451<br>`
        }
    }
    else if (_stationNameGbg === index){
      currentDate.innerHTML = '';
      currentTime.innerHTML = '';
      currentTemp.innerHTML = '';
      station.innerHTML = `Vädret i ${stationNameGbg.replace(' A', ' ')} <br>`;
      for (let i = 20; i < 25; i++){
        currentDate.innerHTML += `${convertDate(dataCurrentTempGbg.value[i].date)}<br>`;
        currentTime.innerHTML += `${convertTime(dataCurrentTempGbg.value[i].date)}<br> `;
        currentTemp.innerHTML += ` ${dataCurrentTempGbg.value[i].value} &#8451<br>`
      }
  }
    else if (_stationNameSth === index){
      currentDate.innerHTML = '';
      currentTemp.innerHTML = '';
      currentTime.innerHTML = '';
      station.innerHTML = `Vädret i ${stationNameSth.replace('-Arlanda Flygplats', '')} <br>`;
      for (let i = 20; i < 25; i++){
        currentDate.innerHTML += `${convertDate(dataCurrentTempSth.value[i].date)}<br>  `;
        currentTime.innerHTML += `${convertTime(dataCurrentTempSth.value[i].date)}<br> `;
        currentTemp.innerHTML += ` ${dataCurrentTempSth.value[i].value} &#8451<br>`
      }
 }
}
*/


/***********************************************
 * REAL FETCH FROM API 
 * ***********************************************
 */

 
 function cityfunction(event: any){
  tempInfoDiv.classList.add('tempinfook');
    
    const index = event.currentTarget.dataset.id;

    if (index === 'malmö'){
       currentDate.innerHTML = '';
        const url = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/52350/period/latest-day/data.json';
        fetch(url)
          .then((res) => {
            console.log(res);
            return res.json();
          })
          .then((json) => {
            currentDate.innerHTML = '';
            currentTime.innerHTML = '';
            currentTemp.innerHTML = '';
            station.innerHTML = `Vädret i ${json.station.name.replace(' A', ' ')} <br>`;
            currentDate.innerHTML += `${convertDate(json.value[0].date)}<br>`;

            for (let i = 20; i < 25; i++){
              currentTime.innerHTML += `${convertTime(json.value[i].date)}<br> `;
              currentTemp.innerHTML += ` ${json.value[i].value} &#8451<br>`
            }
          })
          .catch((err) => {
            console.error(err);
          });

        
    }
   else if (index === 'göteborg'){
    currentDate.innerHTML = '';
    const url = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/71420/period/latest-day/data.json';
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        currentDate.innerHTML = '';
        currentTime.innerHTML = '';
        currentTemp.innerHTML = '';
        station.innerHTML = `Vädret i ${json.station.name.replace(' A', ' ')} <br>`;
        currentDate.innerHTML += `${convertDate(json.value[0].date)}<br>`;

         for (let i = 20; i < 25; i++){
            currentTime.innerHTML += `${convertTime(json.value[i].date)}<br> `;
            currentTemp.innerHTML += ` ${json.value[i].value} &#8451<br>`
      }
      })
      .catch((err) => {
        console.error(err);
      });
    }
    else if ( index === 'stockholm'){
      currentDate.innerHTML = ' ';
        const url = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/97400/period/latest-day/data.json';
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        currentDate.innerHTML = '';
        currentTemp.innerHTML = '';
        currentTime.innerHTML = '';
        station.innerHTML = `Vädret i ${json.station.name.replace('-Arlanda Flygplats', '')} <br>`;
        currentDate.innerHTML += `${convertDate(json.value[0].date)}<br>  `;

        for (let i = 20; i < 25; i++){
        currentTime.innerHTML += `${convertTime(json.value[i].date)}<br> `;
        currentTemp.innerHTML += ` ${json.value[i].value} &#8451<br>`
        }
      })
      .catch((err) => {
        console.error(err);
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
    
