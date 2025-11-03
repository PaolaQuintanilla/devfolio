import Navbar from "./components/Navbar";
import { AboutSection } from "./components/Sections/AboutSection";
import HeroSection from "./components/Sections/HeroSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import { SkillsSection } from "./components/Sections/SkillsSection";
import { ThemeProvider } from "./context/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div className="pb-[100vh]">
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
