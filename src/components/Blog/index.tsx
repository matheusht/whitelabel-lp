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
            <div className="blog__post max-w[420px] group cursor-pointer overflow-hidden rounded-[10px] shadow-custom2">
              <div className="relative overflow-hidden">
                <img src="public/assets/img/blog/img-1.png" alt="" />
              </div>
            </div>
            <div>post 2</div>
            <div>post 3</div>
          </div>
        </div>
      </section>
    </>
  )
}
