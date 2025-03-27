import HeroSection from './components/HeroSection'; 
import Navbar from './components/Navbar';
import SchoolOfCode from './components/SchoolOfCode';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Testimonials from './components/Testimonials';

function App() {
    return (
        <>
            <Navbar/>
            <HeroSection />
            <SchoolOfCode />
            <Testimonials/>
        <Contact/>
            <Footer/>
      </>
    );
  }
  
  export default App;