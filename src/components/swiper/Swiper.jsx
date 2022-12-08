import React from "react";

import { Navigation, Pagination } from "swiper";

//SWIPER JS
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./Swiper.custom.styles.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/pagination";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="quote">
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
        </div>
        <div className="name">Name Name</div>
        <p className="title">This is a Title</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className="quote">
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
        </div>
        <div className="name">Second Person</div>
        <p className="title">Title</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className="quote">
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
        </div>
        <div className="name">Third Name</div>
        <p className="title">This in another Title</p>
      </SwiperSlide>
    </Swiper>
  );
};
