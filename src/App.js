import './App.css';
import LandingPage from './LandingPage/Index';
import bgImage from './Images/Vector8.png';
import JoiningPage from './JoiningPage';
import Footer from './Footer';
import MobileImageSection from './MobileImageSection';
import FooterMessage from './Footermessage';

function App() {
  return (
    <>
      <div
        className="bg-[#F9E2D5] bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <LandingPage />
      </div>

      <div className='block lg:hidden md:hidden py-5'>
        <MobileImageSection />
      </div>

      <div className=' bg-[#f9e2d5] lg:bg-white'>
        <JoiningPage />
      </div>


      <div className='block lg:hidden bg-white pt-4'>
        <div className='container'>
          <FooterMessage />
        </div>
      </div>

      <div className='bg-[#552E62]'>
        <Footer />

      </div>
    </>
  );
}

export default App;
