
import './App.css';
import About from './components/about/About.js';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import Qualification from './components/qualification/Qualification.js';
import Services from './components/services/Services.js';
import Skills from './components/skills/Skills.js';

import Portfolio from './components/portfolios/Portfolio.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';
import ScrollUp from './components/scrollup/ScrollUp.js';
import Testimonial from './components/testimonial/Testimonial.js';

function App() {
  return (
    <>
      <Header />
      <main className='main'>

        <Home />
        <About />
        <Skills />
        <Services />
        <Testimonial />
        <Qualification />
        {/* <Portfolio /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
