/* eslint-disable react/no-unescaped-entities */

import { RiAddLine, RiSubtractLine } from '@remixicon/react'
import { useState } from 'react'

/* eslint-disable tailwindcss/no-custom-classname */
export function Faq() {
  const [faqButton, setFaqButton] = useState(false)

  function handleClick() {
    setFaqButton((prevState) => !prevState)
    console.log(faqButton)
  }
  return (
    <>
      <section className="faq">
        <div className="container mx-auto">
          <h2 className="faq__title h2 mb-[50px] text-center">
            We've got answers
          </h2>
          <div className="mx-auto h-full max-w-5xl">
            <div
              className={`faq__item h-auto cursor-pointer select-none border-b px-[30px] pb-4 pt-7  `}
              onClick={handleClick}
            >
              <div className="mb-[10px] flex flex-col  justify-between gap-3">
                <div className="flex justify-between">
                  <h4 className="h4">
                    Why to believe in Insove medical healthcare ?
                  </h4>
                  <div className="faq__btn text-accent">
                    <i>
                      {faqButton ? (
                        <RiSubtractLine className="text-2xl" />
                      ) : (
                        <RiAddLine className="text-2xl" />
                      )}
                    </i>
                  </div>
                </div>
                <div
                  className={`faq__answer h-full  ${
                    faqButton ? 'flex' : 'hidden'
                  }`}
                >
                  <p className="h-auto font-light">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi voluptatum asperiores aperiam. Quisquam laudantium
                    vitae eligendi.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`faq__item h-auto cursor-pointer select-none border-b px-[30px] pb-4 pt-7  `}
              onClick={handleClick}
            >
              <div className="mb-[10px] flex flex-col  justify-between gap-3">
                <div className="flex justify-between">
                  <h4 className="h4">
                    Why to believe in Insove medical healthcare ?
                  </h4>
                  <div className="faq__btn text-accent">
                    <i>
                      {faqButton ? (
                        <RiSubtractLine className="text-2xl" />
                      ) : (
                        <RiAddLine className="text-2xl" />
                      )}
                    </i>
                  </div>
                </div>
                <div
                  className={`faq__answer h-full  ${
                    faqButton ? 'flex' : 'hidden'
                  }`}
                >
                  <p className="h-auto font-light">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi voluptatum asperiores aperiam. Quisquam laudantium
                    vitae eligendi.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`faq__item h-auto cursor-pointer select-none border-b px-[30px] pb-4 pt-7  `}
              onClick={handleClick}
            >
              <div className="mb-[10px] flex flex-col  justify-between gap-3">
                <div className="flex justify-between">
                  <h4 className="h4">
                    Why to believe in Insove medical healthcare ?
                  </h4>
                  <div className="faq__btn text-accent">
                    <i>
                      {faqButton ? (
                        <RiSubtractLine className="text-2xl" />
                      ) : (
                        <RiAddLine className="text-2xl" />
                      )}
                    </i>
                  </div>
                </div>
                <div
                  className={`faq__answer h-full  ${
                    faqButton ? 'flex' : 'hidden'
                  }`}
                >
                  <p className="h-auto font-light">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi voluptatum asperiores aperiam. Quisquam laudantium
                    vitae eligendi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-[150px]"></div>
    </>
  )
}
