import axios from "axios";
import WeatherData from "types/WeatherData";

export async function getWeatherData(cities: string[]) {
    try {
        const responses = await Promise.all(
            cities.map(async city => {
                const response = await axios.get('http://localhost:8000/weather', {
                    params: { city: city }
                });

                const data: WeatherData = {
                    city: response.data.name,
                    country: response.data.sys.country,
                    temperature: response.data.main.temp,
                    humidity: response.data.main.humidity,
                    sky: response.data.weather[0].description,
                    main: response.data.weather[0].main,
                    clouds: response.data.clouds.all
                };
    
                return data;
            })
        );

        return responses;
    } catch (error) {
        alert('Ocorreu um erro.');
        console.log(error);
        throw error;
    }
}