import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const PORT = 8000;

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
    const API_KEY = process.env.WEATHER_API_KEY;
    const baseWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lang=pt_br&units=metric&appid=${API_KEY}`;
    const city = req.query.city;

    try {
        const response = await axios.get(`${baseWeatherURL}&q=${city}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
    }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));