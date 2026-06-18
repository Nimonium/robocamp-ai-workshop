import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkshopDetails from './components/WorkshopDetails';
import LearningOutcomes from './components/LearningOutcomes';

function App() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
      </main>
    </>
  );
}

export default App;
