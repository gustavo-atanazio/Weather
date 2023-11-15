import Container from "components/Container";
import Animation from "components/Animation";

import WeatherData from "types/WeatherData";
import styles from './MiniPanel.module.css';

function MiniPanel({ city, country, temperature, main, clouds }: WeatherData) {
    return (
        <div className={styles.mini_panel}>
            <Container padding={0}>
                <div className={styles.content}>
                    <div>
                        <h2>{city}</h2>
                        <h4>{country}</h4>
                    </div>

                    <Animation
                        height={100}
                        main={main}
                        clouds={clouds}
                    />

                    <span>
                        {Math.round(temperature)}° C
                    </span>
                </div>
            </Container>
        </div>
    )
}

export default MiniPanel;