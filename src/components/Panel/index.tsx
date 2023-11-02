import Lottie from "lottie-react";
import { TbDropletFilled } from "react-icons/tb";

import Container from "components/Container";

import rain from 'animations/rain.json';
import styles from './Panel.module.css';

interface PanelProps {
    size: 'normal' | 'mini'
    city: string
    country: string
    temperature: string
    humidity?: number
    sky?: string
}

function Panel({ size, city, country, temperature, humidity, sky }: PanelProps) {
    return (
        <div className={styles.panel}>
            <Container
                padding={size === 'mini' ? 0 : ''}
            >
                <div
                    className={`${styles.content} ${size === 'mini' ? styles.content__mini : ''}`}
                >
                    <div>
                        <h2>{city}</h2>
                        <h4>{country}</h4>
                    </div>

                    <Lottie
                        animationData={rain}
                        loop={true}
                        style={size === 'mini' ? { height: 100 } : { height: 150 }}
                    />

                    <span
                        className={styles.temperature}
                        style={size === 'mini' ? { fontSize: '1.5rem' } : {}}
                    >
                        {temperature}
                    </span>

                    {(humidity && sky) &&
                        <div className={styles.others}>
                            <TbDropletFilled size={20} />
                            <span>{humidity}%</span>
                            <span>{sky}</span>
                        </div>
                    }
                </div>
            </Container>
        </div>
    )
}

export default Panel;