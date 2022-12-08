import './style/style.scss';
// import dataCurrentTemp from './currentTemp'  // for when fetching from local object
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

 /**
 * FUNCTIONS
 */
/*
// For when fetching from local object
 function cityfunction(event: any){
    const index = event.currentTarget.dataset.id;
    console.log(index)
   
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
*/
// Function call for when fetching from open API
 
 function cityfunction(event: any){
    
    const index = event.currentTarget.dataset.id;
    console.log(index)

    if (index === 'malmö'){
        const url = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/52350/period/latest-day/data.json';
        fetch(url)
          .then((res) => {
            console.log(res);
            return res.json();
          })
          .then((json) => {
            station.innerHTML = `${json.parameter.name} från stationen ${json.station.name.replace(' A', ' ')} <br>`;
            for (let i = 20; i < 25; i++){
            currentDate.innerHTML += `${convertDate(json.value[i].date).replace(/Thu,|2022|GMT|/g,  '',)} ${json.value[i].value} grader. <br>`;
            console.log(json);
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
        station.innerHTML = `${json.parameter.name} från stationen ${json.station.name.replace(' A', ' ')} <br>`;
        for (let i = 20; i < 25; i++){
        currentDate.innerHTML += `${convertDate(json.value[i].date).replace(/Thu,|2022|GMT|/g,  '',)} ${json.value[i].value} grader. <br>`;
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
        station.innerHTML = `${json.parameter.name} från stationen ${json.station.name} <br>`;
        for (let i = 20; i < 25; i++){
        currentDate.innerHTML += `${convertDate(json.value[i].date).replace(/Thu,|2022|GMT|/g,  '',)} ${json.value[i].value} grader. <br>`;
        }
      })
      .catch((err) => {
        console.error(err);
      });
    }
 }

/**
 * LOGIC
 */

cityBtn.forEach((btn) => {
    btn.addEventListener('click', cityfunction);
})
    
