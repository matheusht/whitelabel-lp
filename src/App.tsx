import { Blog } from 'components/Blog'
import { Faq } from 'components/Faq'
import { Header } from 'components/Header'
import { Services } from 'components/Services'
import { Stats } from 'components/Stats'
import { Team } from 'components/Team'
import { Testimonials } from 'components/Testimonials'
import { register } from 'swiper/element'
import { Footer } from 'components/Footer'
import { Social } from 'components/Social'
import { Location } from 'components/Location'
register()

export function App() {
  return (
    <>
      <Header />
      <Stats />
      <Services />
      <Testimonials />
      <Team />
      <Faq />
      <Blog />
      <Footer />
      <Location />
      <Social />
    </>
  )
}
