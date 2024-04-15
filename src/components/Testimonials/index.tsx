/* eslint-disable tailwindcss/no-custom-classname */
import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { register } from 'swiper/element'
register()

export function Testimonials() {
  return (
    <>
      <section className="testimonial bg-testimonials bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0">
        <div className="testimonial__container container mx-auto">
          <div className="flex flex-col items-center gap-x-14 xl:flex-row">
            <div className="hidden xl:flex">
              <img src="public/assets/img/testimonials/img.png" alt="" />
            </div>
            <div className="max-w-[98%] xl:max-w-[710px]">
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="swiper h-[400px]"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="flex h-full flex-col items-start justify-center ">
                      <div className="mx-auto max-w-[680px] text-center xl:text-left">
                        <p
                          className="relative mb-7 text-center text-[22px] font-light leading-[190%] text-[#4c5354] before:top-0 before:inline-block before:size-10 before:bg-quoteLeft before:bg-contain before:bg-bottom before:bg-no-repeat
                        
                          after:top-0 after:inline-block after:size-10 after:bg-quoteRight after:bg-contain after:bg-bottom after:bg-no-repeat xl:text-left"
                        >
                          <span className="mx-2">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Repellat maiores a tempora ratione dolorum
                            odio ipsa molestiae officia maxime culpa.
                          </span>
                        </p>
                        <div className="text-[26px] font-semibold text-[#4c5453]">
                          Ricardo Roque Nogueira
                        </div>
                        <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7]">
                          Customer
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="flex h-full flex-col items-start justify-center ">
                      <div className="mx-auto max-w-[680px] text-center xl:text-left">
                        <p
                          className="relative mb-7 text-center text-[22px] font-light leading-[190%] text-[#4c5354] before:top-0 before:inline-block before:size-10 before:bg-quoteLeft before:bg-contain before:bg-bottom before:bg-no-repeat
                        
                          after:top-0 after:inline-block after:size-10 after:bg-quoteRight after:bg-contain after:bg-bottom after:bg-no-repeat xl:text-left"
                        >
                          <span className="mx-2">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Repellat maiores a tempora ratione dolorum
                            odio ipsa molestiae officia maxime culpa.
                          </span>
                        </p>
                        <div className="text-[26px] font-semibold text-[#4c5453]">
                          Noque Gicardo Reira
                        </div>
                        <div className="font-medium uppercase tracking-[2.24px] text-[#9ab4b7]">
                          Customer
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="swiper-pagination"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
