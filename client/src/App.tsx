import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkshopDetails from './components/WorkshopDetails';
import LearningOutcomes from './components/LearningOutcomes';
import FAQSection from './components/FAQSection';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <FAQSection />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
