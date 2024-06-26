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
            <div className="flex flex-col gap-5 xl:flex-row ">
              <div className="select relative flex w-full items-center rounded-lg border">
                <div className="absolute right-4">
                  <i>
                    <RiArrowDownSLine className="text-[26px] text-primary" />
                  </i>
                </div>
                <select className="size-full appearance-none bg-transparent p-4 outline-none">
                  <option value="1">Select department</option>
                  <option value="2">Deparment 1</option>
                  <option value="3">Deparment 2</option>
                  <option value="4">Deparment 3</option>
                </select>
              </div>

              <div className="select relative flex  w-full items-center rounded-lg border">
                <div className="absolute right-4">
                  <i>
                    <RiArrowDownSLine className="text-[26px] text-primary" />
                  </i>
                </div>
                <select className="size-full appearance-none bg-transparent p-4 outline-none">
                  <option value="1">Select Doctor</option>
                  <option value="2">Dr. Jane Doe</option>
                  <option value="3">Dr. Jhoe Lindsey</option>
                  <option value="4">Dr. Bob Smith</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-5 xl:flex-row">
              <input
                type="text"
                className="input size-full appearance-none rounded-lg border bg-transparent p-4 outline-none"
                placeholder="Full name"
              />
              <input
                type="text"
                className="input size-full appearance-none rounded-lg border bg-transparent p-4 outline-none"
                placeholder="Phone Number"
              />
            </div>

            <div className="flex flex-col gap-5 xl:flex-row">
              <input
                type="date"
                className="input size-full appearance-none rounded-lg border bg-transparent p-4 outline-none"
              />
              <input
                type="time"
                className="input size-full appearance-none rounded-lg border bg-transparent p-4 outline-none"
              />
            </div>

            <button className="btn btn-lg btn-accent self-start" type="submit">
              Book an appointment
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
