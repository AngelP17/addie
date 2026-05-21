import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from './sections/Hero';
import About from './sections/About';
import Competencies from './sections/Competencies';
import EditorialSignal from './sections/EditorialSignal';
import Portfolio from './sections/Portfolio';
import Freelance from './sections/Freelance';
import Contact from './sections/Contact';

const BoliviaArticle = lazy(() => import('./articles/BoliviaArticle'));

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <EditorialSignal />
      <Competencies />
      <Portfolio />
      <Freelance />
      <Contact />
    </>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/bolivia" element={<BoliviaArticle />} />
      </Routes>
    </Suspense>
  );
}
