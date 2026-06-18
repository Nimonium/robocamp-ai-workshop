import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkshopDetails from './components/WorkshopDetails';
import LearningOutcomes from './components/LearningOutcomes';
import FAQSection from './components/FAQSection';

function App() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <FAQSection />
      </main>
    </>
  );
}

export default App;
