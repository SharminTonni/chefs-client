import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/swiper-bundle.min.css";

// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
const CaouselSection = () => {
  return (
    <div>
      <div className="mt-28 text-center lg:mx-auto" style={{ width: "80vw" }}>
        <h1 className="text-center mb-10 text-5xl font-bold text-amber-500 font-serif">
          Dishes of the Week
        </h1>
      </div>
      <Swiper
        className=""
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            className="mx-auto"
            style={{ width: "70vw", height: "70vh" }}
            src="https://images-gmi-pmc.edge-generalmills.com/a04c1d24-129b-47e7-b52c-22e6d916184c.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="mx-auto"
            style={{ width: "70vw", height: "70vh" }}
            src="https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage108081050-50-Toffee-beauty-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="mx-auto"
            style={{ width: "70vw", height: "70vh" }}
            src="https://www.tastingtable.com/img/gallery/classic-british-fish-and-chips-recipe/intro-1670356962.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="mx-auto"
            style={{ width: "70vw", height: "70vh" }}
            src="https://simply-delicious-food.com/wp-content/uploads/2019/05/lemon-herb-grilled-chicken-breast-3-500x500.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CaouselSection;
