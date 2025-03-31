import HeroSection from './components/HeroSection'; 
import SchoolOfCode from './components/SchoolOfCode';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Testimonials from './components/Testimonials';

import Layout from "./components/Layout";

function App() {
    return (
       
            <Layout>
            <HeroSection />
            <SchoolOfCode />
            <Testimonials/>
            <Contact/>
            <Footer/>
            </Layout>
           
    );
  }
  
  export default App;