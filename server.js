import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const PORT = 8000;

const app = express();

app.use(cors());

app.get('/weather', async (req, res) => {
    const API_KEY = process.env.WEATHER_API_KEY;
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?lang=pt_br&units=metric&appid=${API_KEY}`;
    const city = req.query.city;

    if (city) {
        try {
            const response = await axios.get(`${baseURL}&q=${city}`);
            res.json(response.data);
        } catch (error) {
            res.send(error);
            console.error(error);
        }
    }
});

app.get('/image', async (req, res) => {
    const API_KEY = process.env.IMAGE_API_KEY;
    const baseURL = `https://api.unsplash.com/photos/random?content_filter=high&client_id=${API_KEY}`;
    const city = req.query.city;
    const orientation = req.query.orientation;

    if (city) {
        try {
            const response = await axios.get(`${baseURL}&query=${city}&orientation=${orientation}`);
            res.json(response.data);
        } catch (error) {
            res.status(500).send(error);
        }
    }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));