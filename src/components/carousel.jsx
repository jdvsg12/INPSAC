import React from "react";
import carousel from "../util/Carousse-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {

    return (
        <Swiper
            // key={carousel.id}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {carousel.map(({ id, image, alt, text }) => {
                return (
                    <SwiperSlide key={id}>
                        <div className="carousel">
                            <img
                                src={image}
                                alt={alt} />

                            <div className="text-carousel">
                                {text}
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper >
    )
}

export default Carousel