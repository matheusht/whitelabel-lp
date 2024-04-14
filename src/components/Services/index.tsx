/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
/* eslint-disable tailwindcss/no-custom-classname */
export function Services() {
  return (
    <>
      <section className="services">
        <div className=" bg-services relative -z-10 mx-4 flex h-[368px] max-w-[1466px] items-center rounded-[20px] bg-accent bg-cover bg-no-repeat px-6 xl:mx-auto xl:items-start xl:px-0 xl:pt-[70px]">
          <div className="container mx-auto">
            <div className="services__top flex flex-col items-center xl:mb-[60px] xl:flex-row">
              <h2 className="h2 mb-4 flex-1 text-center text-white xl:mb-0 xl:text-left">
                Our best services for your solution
              </h2>
              <p className="max-w-2xl flex-1 text-center text-white xl:max-w-none xl:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                ipsam laborum dolores repellat dolorum veritatis quas totam
                voluptate eligendi consequatur.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 xl:-mt-[144px]">
          <div className="grid gap-5 px-8 xl:grid-cols-4 xl:px-0">
            <div className="services__item flex min-h-[288px] flex-col items-center rounded-[10px] bg-white p-[30px] text-center shadow-custom2">
              <div className="mb-[15px]">
                <img src="assets/icons/services/icon-1.svg" alt="" />
              </div>
              <h3 className="h3 mb-[10px]">General Practitioners</h3>
              <p className="max-w-[300px] font-light leading-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <div className="services__item flex min-h-[288px] flex-col items-center rounded-[10px] bg-white p-[30px] text-center shadow-custom2">
              <div className="mb-[15px]">
                <img src="assets/icons/services/icon-1.svg" alt="" />
              </div>
              <h3 className="h3 mb-[10px]">General Practitioners</h3>
              <p className="max-w-[300px] font-light leading-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>

            <div className="services__item flex min-h-[288px] flex-col items-center rounded-[10px] bg-white p-[30px] text-center shadow-custom2">
              <div className="mb-[15px]">
                <img src="assets/icons/services/icon-1.svg" alt="" />
              </div>
              <h3 className="h3 mb-[10px]">General Practitioners</h3>
              <p className="max-w-[300px] font-light leading-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>

            <div className="services__item flex min-h-[288px] flex-col items-center rounded-[10px] bg-white p-[30px] text-center shadow-custom2">
              <div className="mb-[15px]">
                <img src="assets/icons/services/icon-1.svg" alt="" />
              </div>
              <h3 className="h3 mb-[10px]">General Practitioners</h3>
              <p className="max-w-[300px] font-light leading-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
