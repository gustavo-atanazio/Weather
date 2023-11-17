import axios from "axios";
import WeatherData from "types/WeatherData";

export async function getWeatherData(cities: string[]) {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?lang=pt_br&units=metric&appid=${API_KEY}`;

    try {
        const responses = await Promise.all(
            cities.map(async city => {
                const response = await axios.get(`${baseURL}&q=${city}`);

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
        console.log(error);
        throw error;
    }
}