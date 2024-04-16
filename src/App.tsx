import { Appointment } from 'components/Appointment'
import { Blog } from 'components/Blog'
import { Brands } from 'components/Brands'
import { Newsletter } from 'components/Newsletter'
import { Departments } from 'components/Departments'
import { Faq } from 'components/Faq'
import { Header } from 'components/Header'
import { Services } from 'components/Services'
import { Stats } from 'components/Stats'
import { Team } from 'components/Team'
import { Testimonials } from 'components/Testimonials'
import { register } from 'swiper/element'
import { Footer } from 'components/Footer'
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
      <Blog />
      <Brands />
      <Newsletter />
      <Footer />
    </>
  )
}
