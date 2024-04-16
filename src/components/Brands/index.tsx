/* eslint-disable tailwindcss/no-custom-classname */
export function Brands() {
  return (
    <>
      <section className="brands section">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between gap-y-12 xl:flex-row xl:gap-y-0">
            <img
              className="brands__logo"
              src="public/assets/img/brands/brand-1.svg"
              alt=""
            />
            <img
              className="brands__logo"
              src="public/assets/img/brands/brand-2.svg"
              alt=""
            />
            <img
              className="brands__logo"
              src="public/assets/img/brands/brand-3.svg"
              alt=""
            />
            <img
              className="brands__logo"
              src="public/assets/img/brands/brand-4.svg"
              alt=""
            />
            <img
              className="brands__logo"
              src="public/assets/img/brands/brand-5.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}
