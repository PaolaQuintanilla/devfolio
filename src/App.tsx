import Navbar from "./components/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import { ThemeProvider } from "./context/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
