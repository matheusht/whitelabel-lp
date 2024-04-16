import { RiMailFill, RiMapPinFill, RiPhoneFill } from '@remixicon/react'

/* eslint-disable tailwindcss/no-custom-classname */
export function Footer() {
  return (
    <>
      <footer className="footer pt-12 xl:pt-[150px]">
        <div className="container mx-auto pb-12 xl:pb-[100px]">
          <div className="flex flex-col gap-x-5 gap-y-10 xl:flex-row">
            <div className="footer__item flex-1">
              <a href="#">
                <img
                  src="public/assets/img/header/logo.svg"
                  alt=""
                  className="mb-[30px]"
                />
              </a>
              <p className="mb-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae asperiores optio porro?
              </p>
              <div>
                <div className="flex items-center gap-x-[6px]">
                  <i>
                    <RiMapPinFill className="text-[24px] text-accent" />
                  </i>
                  <div>123 Arling, Miola, NY</div>
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <i>
                    <RiMailFill className="text-[24px] text-accent" />
                  </i>
                  <div>insove@email.com</div>
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <i>
                    <RiPhoneFill className="text-[24px] text-accent" />
                  </i>
                  <div>123 Arling, Miola, NY</div>
                </div>
              </div>
            </div>
            <div className="footer__item flex-1">quick links</div>
            <div className="footer__item flex-1">opening hours</div>
          </div>
        </div>
        <div>copyright</div>
      </footer>
    </>
  )
}
