import Hero from '../components/home/Hero'
import WhyUs from '../components/home/WhyUs'
import FeaturedProjectDetail from '../components/home/FeaturedProjectDetail'
import AboutUs from '../components/home/AboutUs'
import InteractiveMap from '../components/home/InteractiveMap'
import Testimonials from '../components/home/Testimonials'
import LeadForm from '../components/home/LeadForm'

const Home = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <WhyUs />
      <FeaturedProjectDetail />
      <AboutUs />
      <InteractiveMap />
      <Testimonials />
      <LeadForm />
    </div>
  )
}

export default Home
