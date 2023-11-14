import axios from "axios";

export async function getCitiesWeatherData(cities: string[]) {
    try {
        const responses = await Promise.all(
            cities.map(async city => {
                const response = await axios.get('http://localhost:8000/weather-widget', {
                    params: { city: city }
                });
    
                return {
                    city: response.data.location.name,
                    country: response.data.location.country,
                    temperature: response.data.current.temp_c,
                    humidity: response.data.current.humidity,
                    sky: response.data.current.condition.text
                };
            })
        );

        return responses;
    } catch (error) {
        alert('Ocorreu um erro.');
        console.log(error);
        throw error;
    }
}