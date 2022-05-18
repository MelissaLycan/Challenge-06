GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

First I built out the front end so that I had containers to parse my data into. This process helped me visualize the additional divs that were needed.

Secondly I built variables that would allow me to manipulation the data and parse the lon and lat

Third I built a fetch parameter to simply pull data for the lon and lat so it could be used in a second opencall API to pull the actual weather data.

Once I had this I was able to focus on storing the multiple variables for the 6 days of weather the challenge is requiring.

I had to store each item and then fetch each item. If there is a simpler way to achieve this I am all ears but I believe this is the most logical way to build the query.

see the example of the app here ./Screen-Shot.jpg
