/* eslint-disable tailwindcss/no-custom-classname */
export function Stats() {
  return (
    <>
      <section className="stats section">
        <div className="container mx-auto">
          <div className="flex flex-col justify-between gap-y-6 xl:flex-row">
            <div className="stats__item flex flex-1 flex-col items-center xl:border-r">
              <div className="text-4xl font-semibold text-accent-tertiary xl:mb-2 xl:text-[64px]">
                +5120
              </div>
              <div>Happy Patients</div>
            </div>

            <div className="stats__item flex flex-1 flex-col items-center xl:border-r">
              <div className="text-4xl font-semibold text-accent-tertiary xl:mb-2 xl:text-[64px]">
                26
              </div>
              <div>Total branches</div>
            </div>

            <div className="stats__item flex flex-1 flex-col items-center xl:border-r">
              <div className="text-4xl font-semibold text-accent-tertiary xl:mb-2 xl:text-[64px]">
                +53
              </div>
              <div>Senior Doctors</div>
            </div>

            <div className="stats__item flex flex-1 flex-col items-center">
              <div className="text-4xl font-semibold text-accent-tertiary xl:mb-2 xl:text-[64px]">
                +10
              </div>
              <div>Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
