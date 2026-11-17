import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Photography from './components/Photography';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { MotionConfig } from 'framer-motion';
import './components/CreativeEffects.css';

function App() {
  return (
    <MotionConfig reducedMotion="user">
    <main className="relative w-full" style={{ overflowX: 'clip', background: '#0C0C0C' }}>
      <Hero />
      <About />
      <Skills />
      <Photography />
      <Education />
      <Projects />
      <Contact />
    </main>
    </MotionConfig>
  );
}

export default App;
