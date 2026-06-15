import Navbar from './components/suivisio/Navbar';
import Hero from './components/suivisio/Hero';
import TrustStrip from './components/suivisio/TrustStrip';
import Services from './components/suivisio/Services';
import Process from './components/suivisio/Process';
import Stats from './components/suivisio/Stats';
import WhyUs from './components/suivisio/WhyUs';
import Pricing from './components/suivisio/Pricing';
import Guarantees from './components/suivisio/Guarantees';
import Contact from './components/suivisio/Contact';
import Footer from './components/suivisio/Footer';

function App() {
  return (
    <div className="bg-[#020B18] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Process />
      <Stats />
      <WhyUs />
      <Pricing />
      <Guarantees />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
