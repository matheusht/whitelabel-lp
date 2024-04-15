import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

/* eslint-disable tailwindcss/no-custom-classname */
export function Team() {
  return (
    <>
      <section className="team section">
        <div className="container mx-auto">
          <h2 className="team__title h2 mb-[50px] text-center xl:text-left">
            Our Team
          </h2>

          <div className="team__slider swiper min-h-0-[400px]">
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
                          Sou um profissional que tem boa visão analítica e
                          dinâmica. Decidi cursar engenharia de software pois
                          acredito que a tecnologia e o futuro do mundo estão
                          entrelaçado
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
                          Graduada desde 2019 pela Unicesumar - Maringá/PR em
                          Comunicação Social: Publicidade e Propaganda.
                        </span>
                      </p>
                      <div className="text-[26px] font-semibold text-[#4c5453]">
                        Isabela Theodoro
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
      </section>
    </>
  )
}
