import WhatsAppButton from '../../domain/contact/WhatsAppButton';
import Header from './Header';
import Hero from './Hero';
import WhyUs from './WhyUs';
import Services from './Services';
import Specials from './Specials';
import HowWeWork from './HowWeWork';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import About from './About';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="page">
      <WhatsAppButton />
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Specials />
        <HowWeWork />
        <Gallery />
        <Testimonials />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
