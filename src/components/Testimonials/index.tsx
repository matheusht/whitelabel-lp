/* eslint-disable tailwindcss/no-custom-classname */
import { register } from 'swiper/element'
register()

export function Testimonials() {
  return (
    <>
      <section className="testimonial bg-testimonials bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0">
        <div className="testimonial__container container mx-auto">
          <div>
            <div className="hidden xl:flex">
              <img src="public/assets/img/testimonials/img.png" alt="" />
            </div>
            <div className="max-w-[98%] xl:max-w-[710px]">
              <div className="swiper h-[400px]">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="flex h-full flex-col items-start justify-center ">
                      <div className="mx-auto max-w-[680px] text-center xl:text-left">
                        <p className="before:top-o relative text-center text-[22px] font-light leading-[190%] text-[#4c5354] before:inline-block before:size-10 before:bg-quoteLeft before:bg-contain before:bg-bottom before:bg-no-repeat xl:text-left">
                          <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Repellat maiores a tempora ratione dolorum
                            odio ipsa molestiae officia maxime culpa.
                          </span>
                        </p>
                        <div>James Rodrigo Roque</div>
                        <div>Customer</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
