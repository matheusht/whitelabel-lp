import { RiArrowDownSLine } from '@remixicon/react'

/* eslint-disable tailwindcss/no-custom-classname */
export function Appointment() {
  return (
    <>
      <section className="appointment section">
        <div className="container mx-auto">
          <h2 className="h2 appointment__title mb-5 text-center xl:mb-[50px] xl:text-left">
            Book Appointment or call:{' '}
            <span className="text-accent-tertiary">(+487) 384 9452</span>
          </h2>
          <form className="appointment__form flex flex-col gap-y-5">
            <div>
              <div className="select relative flex items-center bg-pink-200">
                <div className="">
                  <i>
                    <RiArrowDownSLine className="text-[26px]" />
                  </i>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
