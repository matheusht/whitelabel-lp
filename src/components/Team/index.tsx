import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiWhatsappFill
} from '@remixicon/react'
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
              breakpoints={{
                768: {
                  //width: 768,
                  slidesPerView: 1
                }
              }}
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="flex flex-col gap-9 md:flex-row">
                    <div className="flex flex-1 flex-col xl:flex-row">
                      <div className="flex flex-col items-center gap-[30px] xl:flex-row">
                        <div className="flex-1">
                          <img
                            src="public/assets/img/team/doctor-1.png"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <h4 className="h4 mb-[10px] ">Dr. Leona Hill</h4>
                          <div className="mb-[20px] font-medium uppercase tracking-[2.24px] text-[#9ab4b7]">
                            Pediatrician
                          </div>
                          <p className="mb-[26px] max-w-[320px] font-light">
                            Hoje foi o início da trilha formativa em AIoT,
                            ministrado pela docente Diana C. González no AIoT
                            Lab Brasil dentro do Mescla.
                          </p>
                          <div className="flex items-center gap-x-5 text-[30px] text-accent-tertiary">
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiLinkedinFill />
                              </i>
                            </a>
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiWhatsappFill />
                              </i>
                            </a>
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiFacebookCircleFill />
                              </i>
                            </a>
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiInstagramFill />
                              </i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col xl:flex-row">
                      <div className="flex flex-col items-center gap-[30px] xl:flex-row">
                        <div className="flex-1">
                          <img
                            src="public/assets/img/team/doctor-2.png"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <h4 className="h4 mb-[10px] ">Dr. Leopard Jonah</h4>
                          <div className="mb-[20px] font-medium uppercase tracking-[2.24px] text-[#9ab4b7]">
                            Urologist
                          </div>
                          <p className="mb-[26px] max-w-[320px] font-light">
                            Hoje foi o dia em que consegui completar 7
                            atendimentos por segundo ao mesmo minuto x 7 na raiz
                            quadrada
                          </p>
                          <div className="flex items-center gap-x-5 text-[30px] text-accent-tertiary">
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiLinkedinFill />
                              </i>
                            </a>
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiWhatsappFill />
                              </i>
                            </a>
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiFacebookCircleFill />
                              </i>
                            </a>
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiInstagramFill />
                              </i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="flex flex-col gap-9 md:flex-row">
                    <div className="flex flex-1 flex-col xl:flex-row">
                      <div className="flex flex-col items-center gap-[30px] xl:flex-row">
                        <div className="flex-1">
                          <img
                            src="public/assets/img/team/doctor-1.png"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <h4 className="h4 mb-[10px] ">Dr. Leona Hill</h4>
                          <div className="mb-[20px] font-medium uppercase tracking-[2.24px] text-[#9ab4b7]">
                            Pediatrician
                          </div>
                          <p className="mb-[26px] max-w-[320px] font-light">
                            Hoje foi o início da trilha formativa em AIoT,
                            ministrado pela docente Diana C. González no AIoT
                            Lab Brasil dentro do Mescla.
                          </p>
                          <div className="flex items-center gap-x-5 text-[30px] text-accent-tertiary">
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiLinkedinFill />
                              </i>
                            </a>
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiWhatsappFill />
                              </i>
                            </a>
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiFacebookCircleFill />
                              </i>
                            </a>
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiInstagramFill />
                              </i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col xl:flex-row">
                      <div className="flex flex-col items-center gap-[30px] xl:flex-row">
                        <div className="flex-1">
                          <img
                            src="public/assets/img/team/doctor-2.png"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <h4 className="h4 mb-[10px] ">Dr. Leopard Jonah</h4>
                          <div className="mb-[20px] font-medium uppercase tracking-[2.24px] text-[#9ab4b7]">
                            Urologist
                          </div>
                          <p className="mb-[26px] max-w-[320px] font-light">
                            Hoje foi o dia em que consegui completar 7
                            atendimentos por segundo ao mesmo minuto x 7 na raiz
                            quadrada
                          </p>
                          <div className="flex items-center gap-x-5 text-[30px] text-accent-tertiary">
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiLinkedinFill />
                              </i>
                            </a>
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiWhatsappFill />
                              </i>
                            </a>
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiFacebookCircleFill />
                              </i>
                            </a>
                            <a
                              href="#"
                              className="cursor-pointer transition-all hover:text-accent"
                            >
                              <i>
                                <RiInstagramFill />
                              </i>
                            </a>
                          </div>
                        </div>
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
