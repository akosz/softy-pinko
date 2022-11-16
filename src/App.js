import './App.css';
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import './assets/css/templatemo-softy-pinko.css'
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Counter } from './components/Counter';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { Pricing } from './components/Pricing';
import { Slider } from './components/Slider';
import { Testimonials } from './components/Testimonials';
import { WorkProcess } from './components/WorkProcess';

function App() {
  return (

    <>
      {/*<div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>*/}
      <Menu />
      <Slider />

      <Features />
      <WorkProcess />
      <Testimonials />
      <Pricing />
      <Counter />
      <Blog />
      <Contact />
      <Footer />
    </>

  );
}

export default App;
