import Navbar from "./components/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import { SkillsSection } from "./components/Sections/SkillsSection";
import { ThemeProvider } from "./context/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div className="pb-[100vh]">
        <Navbar />
        <HeroSection />
        <SkillsSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
