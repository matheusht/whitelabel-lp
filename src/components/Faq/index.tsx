/* eslint-disable react/no-unescaped-entities */

import { RiAddLine } from '@remixicon/react'

/* eslint-disable tailwindcss/no-custom-classname */
export function Faq() {
  return (
    <>
      <section className="faq">
        <div className="container mx-auto">
          <h2 className="faq__title h2 mb-[50px] text-center">
            We've got answers
          </h2>
          <div className="mx-auto max-w-5xl">
            <div className="faq__item cursor-pointer select-none border-b px-[30px] pb-4 pt-7">
              <div className="mb-[10px] flex items-center justify-between">
                <h4 className="h4">
                  Why to believe in Insove medical healthcare ?
                </h4>
                <div className="faq__btn text-accent">
                  <i>
                    <RiAddLine className="text-2xl" />
                  </i>
                </div>
              </div>
              <div className="faq__answer h-0 overflow-hidden">
                <p className="h-0 overflow-hidden font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi voluptatum asperiores aperiam. Quisquam laudantium vitae
                  eligendi.
                </p>
              </div>
            </div>

            <div className="faq__item cursor-pointer select-none border-b px-[30px] pb-4 pt-7">
              <div className="mb-[10px] flex items-center justify-between">
                <h4 className="h4">
                  Why to believe in Insove medical healthcare ?
                </h4>
                <div className="faq__btn text-accent">
                  <i>
                    <RiAddLine className="text-2xl" />
                  </i>
                </div>
              </div>
              <div className="faq__answer h-0 overflow-hidden">
                <p className="h-0 overflow-hidden font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi voluptatum asperiores aperiam. Quisquam laudantium vitae
                  eligendi.
                </p>
              </div>
            </div>

            <div className="faq__item cursor-pointer select-none border-b px-[30px] pb-4 pt-7">
              <div className="mb-[10px] flex items-center justify-between">
                <h4 className="h4">Who to Believ ?</h4>
                <div className="faq__btn text-accent">
                  <i>
                    <RiAddLine className="text-2xl" />
                  </i>
                </div>
              </div>
              <div className="faq__answer h-0 overflow-hidden">
                <p className="h-0 overflow-hidden font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi voluptatum asperiores aperiam. Quisquam laudantium vitae
                  eligendi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[400px]"></div>
    </>
  )
}
