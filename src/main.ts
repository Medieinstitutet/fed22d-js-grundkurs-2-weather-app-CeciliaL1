import './style/style.scss';
import dataCurrentTemp from './currentTemp'
import convertDate from './convertdate';


/**
 * DECLARE VARIABLES
 */
export const station = document.querySelector('#station') as HTMLElement;
export const currentDate = document.querySelector('#currentDate') as HTMLElement;
export const currentTemp = document.querySelector('#currentTemp') as HTMLElement;

// Variables for when fetching from local object
station.innerHTML += `Vädret från stationen ${dataCurrentTemp.station.name} <br>`;
currentDate.innerHTML += `${convertDate(dataCurrentTemp.value[0].date)} <br>`;
currentTemp.innerHTML += ` ${dataCurrentTemp.value[0].value} grader`

 /**
 * FUNCTIONS
 */

// Function call for when fetching from open API
// dataCurrentTemp;

/**
 * LOGIC
 */
