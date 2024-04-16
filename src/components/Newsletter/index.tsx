/* eslint-disable tailwindcss/no-custom-classname */
export function Newsletter() {
  return (
    <>
      <section className="newsletter relative flex items-center overflow-hidden bg-accent py-12 md:h-[444px]">
        <div className="absolute bottom-0 left-0">
          <img src="public/assets/img/newsletter/pattern.svg" alt="" />
        </div>
        <div className="newsletter_container container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[58px]">
            <div className="z-10 flex-1 text-center md:text-left">
              <div className="text-base font-medium uppercase tracking-[2.24px] text-white">
                Our newsletter
              </div>
              <h1 className="h1 mb-4 text-white">
                Subscribe to get more updates
              </h1>
            </div>
            <form className="flex-1">
              <div className="relative flex flex-col gap-y-4 md:flex-row">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="h-[66px] w-full rounded-full border-2 border-white bg-transparent pl-[30px] outline-none placeholder:text-white focus:text-white"
                />
                <button className="btn btn-lg btn-white right-0 md:absolute">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
