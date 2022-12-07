import './style/style.scss';
import dataCurrentTemp from './currentTemp'
import convertDate from './convertdate';

/**
 * DECLARE VARIABLES
 */
export const currentTemp = document.querySelector('#currentTemp') as HTMLElement;
console.log(currentTemp);
console.log(dataCurrentTemp)
/**
 * FUNCTIONS
 */
 currentTemp.innerHTML += `Vädret från stationen ${dataCurrentTemp.station.name} <br>`;
 currentTemp.innerHTML += `${convertDate(dataCurrentTemp.value[0].date)} är ${dataCurrentTemp.value[0].value} grader <br>`;
 


/**
 * LOGIC
 */
