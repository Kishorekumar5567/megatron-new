import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Strengths from './components/Strengths';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Process from './components/Process';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Strengths />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
