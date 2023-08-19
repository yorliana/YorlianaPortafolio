import axios from "axios";
import { Navigate, Route, Routes , useLocation } from "react-router-dom";
import { lightTheme } from "./Components/Themes/Themes";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

//Components
import LandingPage from "./Pages/LandingPage/LandingPage";
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import CV from './Components/CV/CV'
import Home from './Pages/Home/Home'
import PowerButton from "./Components/PowerButton/PowerButton";
import MySkills from "./Components/MySkills/MySkills";
import Intro from './Subcomponents/Intro/Intro'
import Blog from "./Components/Blog/Blog";



function App() {
  const location = useLocation();

  return (
    <>
    <ThemeProvider theme={lightTheme}>
    <AnimatePresence >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactme" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/powerbutton" element={<PowerButton />} />
        <Route path="/myskills" element={<MySkills/>} />
        <Route path="/intro" element={<Intro/>} />
        <Route path="/blog" element={<Blog />} />
      
      

      </Routes>
      </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
export default App;
 