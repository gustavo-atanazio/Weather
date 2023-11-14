import Lottie from "lottie-react";
import Container from "components/Container";
import WeatherData from "types/WeatherData";
import rain from 'animations/rain.json';
import styles from './MiniPanel.module.css';

function MiniPanel({ city, country, temperature }: WeatherData) {
    return (
        <div className={styles.mini_panel}>
            <Container padding={0}>
                <div className={styles.content}>
                    <div>
                        <h2>{city}</h2>
                        <h4>{country}</h4>
                    </div>

                    <Lottie
                        animationData={rain}
                        loop={true}
                        style={{ height: 100 }}
                    />

                    <span>
                        {temperature && Math.round(temperature)}° C
                    </span>
                </div>
            </Container>
        </div>
    )
}

export default MiniPanel;