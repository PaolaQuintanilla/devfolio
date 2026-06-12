import Navbar from "./components/Navbar";
import { AboutSection } from "./components/Sections/AboutSection";
import ContactSection from "./components/Sections/ContactSection";
import HeroSection from "./components/Sections/HeroSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import { SkillsSection } from "./components/Sections/SkillsSection";
import { ThemeProvider } from "./context/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
