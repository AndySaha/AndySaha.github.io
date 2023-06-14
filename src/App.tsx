import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import CarouselComponent from "./components/CarouselComponent";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="homepage">
      <NavBarComponent />
      <CarouselComponent />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

export default App;
