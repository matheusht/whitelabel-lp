import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailFill,
  RiMapPinFill,
  RiPhoneFill,
  RiTwitterFill
} from '@remixicon/react'

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
              <div className="mb-10 flex flex-col gap-y-3">
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
                  <div>(+123) 456 78910</div>
                </div>
              </div>
              <div className="flex gap-[14px] text-[30px]">
                <div className="cursor-pointer rounded-[10px] p-[10px] text-accent-tertiary shadow-custom2 transition-all hover:text-accent">
                  <i>
                    <RiFacebookCircleFill />
                  </i>
                </div>
                <div className="cursor-pointer rounded-[10px] p-[10px] text-accent-tertiary shadow-custom2 transition-all hover:text-accent">
                  <i>
                    <RiInstagramFill />
                  </i>
                </div>
                <div className="cursor-pointer rounded-[10px] p-[10px] text-accent-tertiary shadow-custom2 transition-all hover:text-accent">
                  <i>
                    <RiLinkedinFill />
                  </i>
                </div>
                <div className="cursor-pointer rounded-[10px] p-[10px] text-accent-tertiary shadow-custom2 transition-all hover:text-accent">
                  <i>
                    <RiTwitterFill />
                  </i>
                </div>
              </div>
            </div>
            <div className="footer__item flex-1">
              <h4 className="h4 mb-5">Quick Links</h4>
              <div className="flex gap-x-5">
                <ul className="flex flex-1 flex-col gap-y-5">
                  <li>
                    <a href="#" className="transition-all hover:text-accent">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-all hover:text-accent">
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-all hover:text-accent">
                      Department
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-all hover:text-accent">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-all hover:text-accent">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-all hover:text-accent">
                      Contact
                    </a>
                  </li>
                </ul>

                <ul className="flex flex-1 flex-col gap-y-5">
                  <li>
                    <a href="#" className="transition-all hover:text-accent">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-all hover:text-accent">
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-all hover:text-accent">
                      Department
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-all hover:text-accent">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-all hover:text-accent">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-all hover:text-accent">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__item flex-1">
              <h4 className="h4 mb-5">Opening Hours</h4>
              <div className="flex flex-col gap-5">
                <div className="flex-1">
                  <div className="flex items-center justify-between border-b pb-[10px]">
                    <div>Monday - Thursday</div>
                    <div className="font-medium text-accent">
                      8:00 A.m - 6:00 P.m
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between border-b pb-[10px]">
                    <div>Friday - Saturday</div>
                    <div className="font-medium text-accent">
                      10:00 A.m - 4:00 P.m
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between border-b pb-[10px]">
                    <div>Sunday</div>
                    <div className="font-medium text-accent">
                      Emergency Only
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between border-b pb-[10px]">
                    <div>Personal</div>
                    <div className="font-medium text-accent">
                      7:00 A.m - 9:00 P.m
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-[30px]">
          <div className="container mx-auto text-center">
            <div className="text-base font-light">
              &copy; 2023 Insove - All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
