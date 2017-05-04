import axios from 'axios';

const API_KEY = '5b8125392abc4970ddf9dd7e309eac74';
const UNITS = 'metric';
const OPEN_WEATER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=${UNITS}`;

module.exports = {
    getTemp: function(location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATER_MAP_URL}&q=${encodedLocation}`;

       return axios.get(requestUrl).then(function(response) {
            if(response.data.cod && response.data.message) {
                throw new Error(response.data.message);
            } else {
                return response.data.main.temp;
            }
        }, function(response) {
            throw new Error(response.data.message);
        });
    }
}