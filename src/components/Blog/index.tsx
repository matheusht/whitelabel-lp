/* eslint-disable react/no-unescaped-entities */
/* eslint-disable tailwindcss/no-custom-classname */
export function Blog() {
  return (
    <>
      <section className="blog">
        <div className="container mx-auto">
          <h2 className="h2 blog__title mb-[50px] text-center xl:text-left">
            Our Recents Posts
          </h2>

          <div className="mb-[50px] flex flex-col items-center gap-y-6 xl:flex-row xl:justify-between xl:gap-y-0">
            <div className="blog__post group max-w-[420px] cursor-pointer overflow-hidden rounded-[10px] shadow-custom2">
              <div className="relative overflow-hidden">
                <img
                  className="transition-all duration-500 group-hover:scale-110"
                  src="public/assets/img/blog/img-1.png"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 bg-accent-tertiary px-[18px] py-[6px] text-base font-medium uppercase tracking-[2.24px] text-white">
                  Medical
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="mb-4">Jan 2, 2023</div>

                <h4 className="h4 mb-[10px]">
                  10 foods to avoid for your heart health
                </h4>

                <p className="font-light">
                  It's normal to feel anxiety, wory and grief any time you're
                  diagnosed with a condition that's certainly true..
                  <a href="#" className="italic text-[#4c5354] underline">
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="blog__post group max-w-[420px] cursor-pointer overflow-hidden rounded-[10px] shadow-custom2">
              <div className="relative overflow-hidden">
                <img
                  className="transition-all duration-500 group-hover:scale-110"
                  src="public/assets/img/blog/img-2.png"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 bg-accent-tertiary px-[18px] py-[6px] text-base font-medium uppercase tracking-[2.24px] text-white">
                  Medical
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="mb-4">Jan 2, 2023</div>

                <h4 className="h4 mb-[10px]">
                  10 foods to avoid for your heart health
                </h4>

                <p className="font-light">
                  It's normal to feel anxiety,cerrtainly true..
                  <a href="#" className="italic text-[#4c5354] underline">
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="blog__post group max-w-[420px] cursor-pointer overflow-hidden rounded-[10px] shadow-custom2">
              <div className="relative overflow-hidden">
                <img
                  className="transition-all duration-500 group-hover:scale-110"
                  src="public/assets/img/blog/img-3.png"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 bg-accent-tertiary px-[18px] py-[6px] text-base font-medium uppercase tracking-[2.24px] text-white">
                  Medical
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="mb-4">Jan 2, 2023</div>

                <h4 className="h4 mb-[10px]">
                  10 foods to avoid for your heart health
                </h4>

                <p className="font-light">
                  and grief any time you're diagnosed with a condition that's
                  certainly true..
                  <a href="#" className="italic text-[#4c5354] underline">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
