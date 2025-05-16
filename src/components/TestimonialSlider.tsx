import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { slider } from "../data";
import "../App.css";

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {slider.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="rounded-lg p-4 lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A1A]"
        >
          <p className="mb-8 min-h-[100px] text-[15px]">{slide.message}</p>
          <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
            <div className="w-14">
              <img className="mb-3 md:mb-0" src={slide.image} alt="" />
            </div>
            <div>
              <div className="font-medium text-base">{slide.name}</div>
              <div className="font-medium text-rose-600">{slide.email}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
