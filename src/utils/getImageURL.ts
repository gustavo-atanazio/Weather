import axios from "axios";

export async function getImageURL(city: string) {
    const imageOrientation = window.screen.width >= 992 ? 'landscape' : 'portrait';

    try {
        const response = await axios.get('http://localhost:8000/image', {
            params: { city: city, orientation: imageOrientation }
        });

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