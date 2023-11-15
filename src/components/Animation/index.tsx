import Lottie from "lottie-react";

import sun from 'animations/sun.json';
import cloudsAnimation from 'animations/cloud.json';
import sunClouds from 'animations/sun-cloud.json';
import rain from 'animations/rain.json';

interface AnimationProps {
    height: number
    main: string
    clouds: number
}

function Animation({ height, main, clouds }: AnimationProps) {
    console.log(main, clouds);

    function handleAnimation(main: string, clouds: number) {
        switch (main.toUpperCase()) {
            case 'CLEAR':
                return sun;

            case 'RAIN':
                return rain;

            case 'THUNDERSTORM':
                return rain;

            case 'DRIZZLE':
                return rain;

            case 'CLOUDS':
                if (clouds >= 40) {
                    return cloudsAnimation;
                }

                return sunClouds;

            default:
                if (clouds >= 50) {
                    return cloudsAnimation;
                }

                return sunClouds;
        }
    }

    return (
        <Lottie
            animationData={handleAnimation(main, clouds)}
            loop={true}
            style={{ height: height }}
        />
    )
}

export default Animation;