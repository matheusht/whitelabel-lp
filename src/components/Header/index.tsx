/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
/* eslint-disable tailwindcss/no-custom-classname */
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiHeartPulseLine,
  RiMapPin2Fill,
  RiPhoneFill,
  RiWhatsappFill
} from '@remixicon/react'
import { useState } from 'react'

export function Header() {
  const [closeButton, setCloseButton] = useState(false)

  function handleClick() {
    setCloseButton((prev) => !prev)
  }

  return (
    <>
      <header className=" py-8 lg:pb-14 lg:pt-6">
        <div className="container mx-auto flex flex-col gap-y-4 lg:relative lg:flex-row lg:justify-between lg:gap-y-0">
          <div className="flex justify-center lg:justify-normal">
            <a href="#">
              <img src="/assets/img/header/logo.svg" alt="" />
            </a>
          </div>

          <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
            <div className="flex items-center justify-center gap-x-2 lg:justify-normal">
              <i>
                <RiMapPin2Fill className="text-2xl text-accent " />
              </i>
              <div className="text-secondary">123 Arling, Miola, NY</div>
            </div>
            <div className="flex items-center justify-center gap-x-2 lg:justify-normal">
              <i>
                <RiPhoneFill className="text-2xl text-accent" />
              </i>
              <div className="text-secondary">(+487) 384 9452</div>
            </div>
            <button
              className="btn btn-sm btn-outline mx-auto
               w-[240px]  gap-x-2 hover:bg-green-500 lg:mx-0 lg:w-auto"
            >
              <RiWhatsappFill className="text-green" />
              Fale Conosco
            </button>
            <nav
              // eslint-disable-next-line tailwindcss/no-custom-classname, tailwindcss/enforces-negative-arbitrary-values
              className={`mnav transiiton-all fixed  top-0 z-20 h-screen
              w-[300px] bg-white shadow-2xl duration-300 lg:hidden ${
                closeButton ? '-left-[300px]' : 'left-0'
              }
            `}
            >
              <div
                className="mnav__close-btn relative -right-full top-8 flex size-8 cursor-pointer items-center justify-center rounded-r-lg bg-primary transition-all "
                onClick={handleClick}
              >
                <i>
                  {closeButton ? (
                    <RiArrowRightSLine className="mnav__close-btn-icon text-2xl text-white" />
                  ) : (
                    <RiArrowLeftSLine className="mnav__close-btn-icon text-2xl text-white" />
                  )}
                </i>
              </div>

              <div className="flex h-full flex-col gap-y-12 px-12">
                <a href="#">
                  <img src="/assets/img/header/logo.svg" alt="" />
                </a>

                <ul className="flex flex-col gap-y-5">
                  <li>
                    <a
                      href="#"
                      className="text-secondary transition-all duration-300 hover:text-accent"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-secondary transition-all duration-300 hover:text-accent"
                    >
                      Doctors
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-secondary transition-all duration-300 hover:text-accent"
                    >
                      Department
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-secondary transition-all duration-300 hover:text-accent"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-secondary transition-all duration-300 hover:text-accent"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-secondary transition-all duration-300 hover:text-accent"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav className="absolute -bottom-[86px] left-0 hidden h-16 w-full rounded-[10px] bg-white shadow-custom1 lg:flex lg:items-center lg:justify-between lg:px-[50px]">
              <ul className="flex gap-x-4">
                <li>
                  <a
                    href="#"
                    className="border-r pr-4 text-secondary transition-all duration-300 hover:text-accent"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="border-r pr-4 text-secondary transition-all duration-300 hover:text-accent"
                  >
                    Doctors
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="border-r pr-4 text-secondary transition-all duration-300 hover:text-accent"
                  >
                    Department
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="border-r pr-4 text-secondary transition-all duration-300 hover:text-accent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border-r pr-4 text-secondary transition-all duration-300 hover:text-accent"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-secondary transition-all duration-300 hover:text-accent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero overflow-hidden bg-grey py-12 xl:pb-0 xl:pt-12">
        <div className="container mx-auto h-full">
          <div className="flex h-full flex-col items-center justify-between xl:flex-row">
            <div className="hero__text text-center xl:w-[48%] xl:text-left">
              <div className="mx-auto mb-[26px] flex w-max items-center gap-x-2 rounded-full bg-white px-[20px] py-[10px] xl:mx-0">
                <i>
                  <RiHeartPulseLine className="text-2xl text-accent" />
                </i>
                <div className="text-base font-medium uppercase tracking-[2.24px] text-[#9ab4b7]">
                  Live your Life
                </div>
              </div>

              <h1 className="h1 mb-6">We care about your health</h1>

              <p className="mb-[42px] md:max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat iure quibusdam dolores, aspernatur libero, quis tenetur
                ipsum ex maxime, pariatur necessitatibus in reprehenderit
                veritatis architecto qui quasi sequi cum numquam.
              </p>

              <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
                Contact us
              </button>
            </div>
            <div className="hero__img hidden max-w-[814px] self-end xl:flex ">
              <img src="/assets/img/hero/img.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
