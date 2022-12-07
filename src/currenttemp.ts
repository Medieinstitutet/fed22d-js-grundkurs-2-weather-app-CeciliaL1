import { currentTemp } from "./main";
import convertDate from './convertdate';


const dataCurrentTemp = {
    value: [
      {
        "date": 1670436000000,
        "value": "-0.9",
        "quality": "G"
      }
    ],
    parameter: {
      "key": "1",
      "name": "Lufttemperatur",
      "summary": "momentanvärde, 1 gång/tim",
      "unit": "degree celsius"
    },
    station: {
      "key": "52350",
      "name": "Malmö A",
      "owner": "SMHI",
      "ownerCategory": "CLIMATE",
      "measuringStations": "CORE",
      "height": 2
    },
    period: {
      "key": "latest-hour",
      "from": 1670432401000,
      "to": 1670436000000,
      "summary": "Data från senaste timmen",
      "sampling": "Ej angivet"
    },
  }

export default dataCurrentTemp;


/* ************ FETCH FROM WEATHER API
const url = 'https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/52350/period/latest-hour/data.json';
fetch(url)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    currentTemp.innerHTML += `Vädret från stationen ${json.station.name} <br>`;
    currentTemp.innerHTML += `${convertDate(json.value[0].date)} är ${json.value[0].value} grader <br>`;
    console.log(json.value[0].date);
  })
  .catch((err) => {
    console.error(err);
  });
    export default fetch;
*/ 
