/**
 * CODE FOR WHEN COPYING WEATHER API TO LOCAL OBJECT
 */
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

