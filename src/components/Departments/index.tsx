/* eslint-disable tailwindcss/no-custom-classname */
export function Departments() {
  return (
    <>
      <section className="departments section">
        <div className="departments__bg xl:pb=[90px] relative mx-4 flex min-h-[588px] max-w-[1466px] items-center rounded-[20px] bg-departments bg-cover bg-center bg-no-repeat px-6 py-12 xl:mx-auto xl:bg-auto xl:px-0 xl:pt-[80px]">
          <div className="departments__container container mx-auto">
            <div className="flex flex-col gap-x-5 xl:flex-row">
              <div className="mb-[50px] flex flex-col gap-y-[30px] text-center text-base font-medium uppercase text-[#9ab4b7] xl:mb-0 xl:w-[310px] xl:gap-y-[40px] xl:pt-3 xl:text-left xl:text-[17px]">
                <div className="cursor-pointer transition-all hover:text-accent">
                  Laboratory Analysis
                </div>
                <div className="cursor-pointer transition-all hover:text-accent">
                  Laboratory Analysis
                </div>
                <div className="cursor-pointer transition-all hover:text-accent">
                  Laboratory Analysis
                </div>
                <div className="cursor-pointer transition-all hover:text-accent">
                  Laboratory Analysis
                </div>
                <div className="cursor-pointer transition-all hover:text-accent">
                  Laboratory Analysis
                </div>
              </div>
              <div className="xl:w-[640px]">
                <h2 className="h2 mb-[20px] text-center xl:text-left">
                  Cardiology Clinic
                </h2>
                <p className="mb-[30px] text-center font-light xl:text-left ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate necessitatibus pariatur expedita qui ad optio
                  delectus.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  dolore obcaecati cumque quasi repudiandae temporibus iure,
                  atque quo quaerat.
                </p>
                <div className="max-w[555px] mx-auto mb-[50px] flex flex-col items-center xl:mx-0 xl:flex-row xl:justify-between">
                  <div className="border-[#dcdcdc] text-accent xl:border-r xl:pr-6">
                    Neurocritical Care
                  </div>
                  <div className="border-[#dcdcdc] text-accent xl:border-r xl:pr-6">
                    Neuro Oncology
                  </div>
                  <div className="text-accent">Geriatric Care</div>
                </div>
                <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
