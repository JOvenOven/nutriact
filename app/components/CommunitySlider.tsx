"use client"; // import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Testimonial } from "../types/data";

interface Props {
  testimonials: Testimonial[];
}

const CommunitySlider: React.FC<Props> = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      // centeredSlides={"true"}
      grabCursor={true}
      modules={[]}
      className="communitySlider"
    >
      {testimonials.map((testimonial, idx) => {
        // destructure testimonial
        const { image, name, message } = testimonial;
        return (
          <SwiperSlide key={idx}>
            <div className="relative">
              {/* image */}
              <div>
                <Image src={image} alt="" />
              </div>
              {/* message & name */}
              <div className="absolute bottom-[30px] p-[20px] text-white text-center">
                <div className="mb-8 italic text-lg font-light">{message}</div>
                <div className="flex items-center justify-center gap-x-[3px]">
                  <span className="text-[30px] text-primary-200 font-bold">
                    ~
                  </span>
                  <div className="text-[20px] font-bold">{name}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunitySlider;
