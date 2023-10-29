import { Swiper, SwiperProps } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

interface SliderProps {
    settings: SwiperProps
    children: React.ReactNode
}

function Slider({ settings, children }: SliderProps) {
    return (
        <Swiper modules={[Autoplay, Pagination, Navigation]} {...settings}>
            {children}
        </Swiper>
    )
}

export default Slider;