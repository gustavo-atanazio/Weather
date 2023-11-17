import axios from "axios";

export async function getImageURL(city: string) {
    const API_KEY = import.meta.env.VITE_IMAGE_API_KEY;
    const baseURL = `https://api.unsplash.com/photos/random?content_filter=high&client_id=${API_KEY}`;
    const imageOrientation = window.screen.width >= 992 ? 'landscape' : 'portrait';

    try {
        const response = await axios.get(`${baseURL}&query=${city}&orientation=${imageOrientation}`);

        if (response.data.urls && response.data.urls.regular) {
            return response.data.urls.regular;
        } else {
            console.error('Resposta inesperada da Unsplash API:', response.data);
            throw new Error('Resposta inesperada da Unsplash API');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}