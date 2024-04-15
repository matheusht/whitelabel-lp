import { Appointment } from 'components/Appointment'
import { Header } from 'components/Header'
import { Services } from 'components/Services'
import { Stats } from 'components/Stats'
import { Testimonials } from 'components/Testimonials'
import { register } from 'swiper/element'
register()

export function App() {
  return (
    <>
      <Header />
      <Stats />
      <Services />
      <Appointment />
      <Testimonials />
    </>
  )
}
