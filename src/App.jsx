import HeroSection from './components/HeroSection'; 
import Navbar from './components/Navbar';
import SchoolOfCode from './components/SchoolOfCode';
import Footer from './components/Footer';
import Contact from './components/Contact'

function App() {
    return (
        <>
            <Navbar/>
            <HeroSection />
        <SchoolOfCode />
        <Contact/>
            <Footer/>
      </>
    );
  }
  
  export default App;