// import React from 'react'
// import service from '../util/Services-data'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';



// const Carousel = () => {

//     return (

//         service.map(carousel => {
//             return (
//                 <Swiper
//                     key={carousel.id}
//                     modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//                     spaceBetween={50}
//                     slidesPerView={3}
//                     navigation
//                     pagination={{ clickable: true }}
//                     scrollbar={{ draggable: true }}
//                     onSwiper={(swiper) => console.log(swiper)}
//                     onSlideChange={() => console.log('slide change')}
//                 >
//                     <SwiperSlide>
//                         <img
//                             src={carousel.image}
//                             alt="algo"
//                             layout="fill"
//                             objectFit="cover"
//                         />
//                     </SwiperSlide>


//                 </Swiper>
//             )
//         })

//     )
// }

// export default Carousel