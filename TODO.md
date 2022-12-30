# Förbättringar

När vi får ut timestamp från Api;et ifrån cädret bak i tiden så f¨r vi i olika userAgents ut olika strängar vilket gör det svårt att regexa ut allting, akulle behövas mer finlir för att kunna matcha olika strängar på olika devices. just nu regexar den ut på mobil och på desktop men på vissa mobiler får den ut en annan sträng än vad som är regexat på så skulle behövt Skriva nytt regExp för dem olika strängarna.

## pseudo-Kod

Väder för Malmö, göteborg och stockholm ska hämtas.
När användaren trycker på respektive stad ska :
Temperatur för 
        [x]Den senaste timmen visas
        [x]Dem tre senaste timmarna visas
        [x]Nederbörd
        [x]Relativ luftfuktighet
        [x]Vindhastighet

Temperatur för 
       [x] 4 timmar fram i tiden 

Conditionals :
    [x] Om det är ?? på dagen ska denna bild visas
    [x] Om det regnar Ska en bild med regn visas
    [x] Om det är minusgrader Ska en bild med is visas

Övrigt:
    [x] få rätt på innerHTML vid felhantering




## Malmö

Vindhastighet 
https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/4/station/52350/period/latest-day/data.json
Nederbördsmängd:
https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/7/station/52350/period/latest-day/data.json
Luftfuktighet:
https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/6/station/52350/period/latest-day/data.json


## Göteborg
vindhastighet
https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/4/station/71420/period/latest-day/data.json
Nederbörd
https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/7/station/71420/period/latest-day/data.json
luftfuktighet
https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/6/station/71420/period/latest-day/data.json


## Stockholm 
vindhastighet
https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/4/station/97400/period/latest-day/data.json
Nederbörd
https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/7/station/97400/period/latest-day/data.json
luftfuktighet
https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/6/station//period/latest-day/data.json

## Forecast
Malmö

https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/13.00073/lat/55.60587/data.json

Göteborg
https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.974560/lat/57.708870/data.json

Stockholm
https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.063240/lat/59.334591/data.json

Värden :
timeseries

Temperatur : 10
fuktighet : 15
wind : 14
regn : 4