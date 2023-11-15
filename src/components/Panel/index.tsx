import { TbDropletFilled } from "react-icons/tb";

import Container from "components/Container";
import Animation from "components/Animation";

import WeatherData from "types/WeatherData";

import styles from './Panel.module.css';

interface PanelProps {
    data: WeatherData | null
}

function Panel({ data }: PanelProps) {
    const { city, country, temperature, humidity, sky, main, clouds } = data || {};

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

                            <Animation
                                height={150}
                                main={main!}
                                clouds={clouds!}
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