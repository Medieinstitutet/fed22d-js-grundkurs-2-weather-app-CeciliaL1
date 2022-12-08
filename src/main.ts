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

const cityMBtn = document.querySelector('#cityM') as HTMLButtonElement;
const cityGBtn = document.querySelector('#cityG') as HTMLButtonElement;
const citySBtn = document.querySelector('#cityS') as HTMLButtonElement;

// Variables for when fetching from local object
station.innerHTML += `Vädret från stationen ${dataCurrentTemp.station.name} <br>`;
currentDate.innerHTML += `${convertDate(dataCurrentTemp.value[0].date)} <br>`;
currentTemp.innerHTML += ` ${dataCurrentTemp.value[0].value} grader`

 /**
 * FUNCTIONS
 */

 function cityMfunction(){
    console.log('malmö');
 }
 function cityGfunction(){
    console.log('gbg');
 }
 function citySfunction(){
    console.log('sth');
 }
// Function call for when fetching from open API
// dataCurrentTemp;

/**
 * LOGIC
 */

cityMBtn.addEventListener('click', cityMfunction);
cityGBtn.addEventListener('click', cityGfunction);
citySBtn.addEventListener('click', citySfunction);