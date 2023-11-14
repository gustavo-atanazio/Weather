import Lottie from "lottie-react";
import { TbDropletFilled } from "react-icons/tb";

import Container from "components/Container";

import WeatherData from "types/WeatherData";

import rain from 'animations/rain.json';
import styles from './Panel.module.css';

interface PanelProps {
    data: WeatherData | null
}

function Panel({ data }: PanelProps) {
    const { city, country, temperature, humidity, sky } = data || {};

    return (
        <div className={styles.panel}>
            <Container>
                <div
                    className={styles.content}
                >
                    {data ? (
                        <>
                            <div>
                                <h2>{city}</h2>
                                <h4>{country}</h4>
                            </div>
        
                            <Lottie
                                animationData={rain}
                                loop={true}
                                style={{ height: 150 }}
                            />
        
                            <span className={styles.temperature}>
                                {temperature && Math.round(temperature)}° C
                            </span>
        
                            
                            <div className={styles.others}>
                                <TbDropletFilled size={20} />
                                <span>{humidity}%</span>
                                <span>{sky && sky.charAt(0).toUpperCase() + sky.slice(1)}</span>
                            </div>
                        </>
                    ) : (
                        <p>Sem dados</p>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Panel;