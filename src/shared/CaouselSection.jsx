import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const CaouselSection = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img
          className="mx-auto"
          style={{ width: "50vw", height: "60vh" }}
          src="https://images-gmi-pmc.edge-generalmills.com/a04c1d24-129b-47e7-b52c-22e6d916184c.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto"
          style={{ width: "50vw", height: "60vh" }}
          src="https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage108081050-50-Toffee-beauty-1.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto"
          style={{ width: "50vw", height: "60vh" }}
          src="https://www.nigella.com/assets/uploads/recipes/public-thumbnail/lemon-polenta-cake-563a6559b0fb7.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto"
          style={{ width: "50vw", height: "60vh" }}
          src="https://simply-delicious-food.com/wp-content/uploads/2019/05/lemon-herb-grilled-chicken-breast-3-500x500.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CaouselSection;
