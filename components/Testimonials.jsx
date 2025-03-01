import { useState, useCallback } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/modules";

import AnimatedText from "./AnimatedText";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

//sample data
const slides = [
  {
    img: "/assets/testimonial/img-1.png",
    name: "Emma Johnson",
    message:
      "The service was fantastic! Highly recommended it to anyone looking for top notch design.",
  },
  {
    img: "/assets/testimonial/img-2.png",
    name: "Sophia Martinezs",
    message:
      "I couldn't be happier with the results. The website is both beautiful and functional.",
  },
  {
    img: "/assets/testimonial/img-3.png",
    name: "James Smith",
    message:
      "Excellent work! The project was handled professionally from start to finish!",
  },
  {
    img: "/assets/testimonial/img-4.png",
    name: "Olivia Williams",
    message:
      "Everything was delivered on time, and the design exceeded my expectations.",
  },
  {
    img: "/assets/testimonial/img-5.png",
    name: "Isabella Brown",
    message:
      "Amazing attention to detail. My website looks professional and user-friendly.",
  },
  {
    img: "/assets/testimonial/img-6.png",
    name: "Liam Davis",
    message:
      "The team truly understood my needs. My website is faster and looks great!",
  },
];

const Testimonials = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="p-24 overflow-hidden">
      <div className="container mx-auto">
        <AnimatedText
          text="What Clients Say"
          textStyle="h2 mb-[30px] xl:mb-[60px] text-center"
        />
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-max xl:w-[600px] flex flex-col justify-center items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
            <ImQuotesLeft className="text-9xl text-accent/20 leading-none mb-4" />
            <div>
              <h3 className="h3 mb-2">{slides[activeSlide].name}</h3>
              <p className="mb-8 max-w-[360px]">
                {slides[activeSlide].message}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handlePrevious}
                className="text-2xl bg-accent hover:bg-accent-hover text-white w-[48px] h-[48px] flex justify-center items-center rounded-full transition-all duration-300"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="text-2xl bg-accent hover:bg-accent-hover text-white w-[48px] h-[48px] flex justify-center items-center rounded-full transition-all duration-300"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onSwiper={setSwiperRef}
            onSlideChange={swiper => setActiveSlide(swiper.realIndex)}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full h-[400px] xl:h-[500px]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="h-full select-none">
                <div className="w-full h-full flex items-end">
                  <div
                    className={`${
                      activeSlide === index ? "h-full" : "h-[240px]"
                    } flex items-end rounded-2xl overflow-hidden transition-all duration-500 relative w-full`}
                  >
                    <Image
                      src={slide.img}
                      alt=""
                      priority
                      quality={100}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
