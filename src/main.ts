import './style/style.scss';
import dataCurrentTemp from './currentTemp'
import convertDate from './convertdate';


/**
 * DECLARE VARIABLES
 */
export const station = document.querySelector('#station') as HTMLElement;
export const currentDate = document.querySelector('#currentDate') as HTMLElement;
export const currentTemp = document.querySelector('#currentTemp') as HTMLElement;

export const currentWind = document.querySelector('#currentWind') as HTMLElement;
export const currentPrecipitation = document.querySelector('#currentPrecipitation') as HTMLElement;
export const currentMoist = document.querySelector('#currentMoist') as HTMLElement;

const cityBtn = document.querySelectorAll('.cityBtn');

/*
// Variables for when fetching from local object
station.innerHTML += `Vädret från stationen ${dataCurrentTemp.station.name} <br>`;
currentDate.innerHTML += `${convertDate(dataCurrentTemp.value[0].date)} <br>`;
currentTemp.innerHTML += ` ${dataCurrentTemp.value[0].value} grader`
*/

 /**
 * FUNCTIONS
 */

 function cityfunction(event: any){
    const index = event.currentTarget.dataset.id;
   
    const stationName = dataCurrentTemp.station.name;
    const _stationName = stationName.replace(' A', '').toLowerCase();

    if (_stationName === index){
        station.innerHTML = `Vädret från stationen ${dataCurrentTemp.station.name} <br>`;
        currentDate.innerHTML = `${convertDate(dataCurrentTemp.value[0].date)} <br>`;
        currentTemp.innerHTML = ` ${dataCurrentTemp.value[0].value} grader`
    }
    else if (_stationName === index){
        console.log('gbg');
    }
 }

// Function call for when fetching from open API
// dataCurrentTemp;

/**
 * LOGIC
 */

cityBtn.forEach((btn) => {
    btn.addEventListener('click', cityfunction);
})
    
