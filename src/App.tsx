import { Appointment } from 'components/Appointment'
import { Departments } from 'components/Departments'
import { Faq } from 'components/Faq'
import { Header } from 'components/Header'
import { Services } from 'components/Services'
import { Stats } from 'components/Stats'
import { Team } from 'components/Team'
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
      <Team />
      <Faq />
      <Departments />
    </>
  )
}
