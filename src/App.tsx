import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Specials from './components/Specials';
import HowWeWork from './components/HowWeWork';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
