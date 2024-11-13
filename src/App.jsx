import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import './App.css'
import Herosection from './components/Herosection'
import ResourseCont from './components/ResourseCont'
import EnrollBanner from './components/EnrollBanner'
import Features from './components/Features'
import Services from './components/Services'
import Assitadvan from './components/Assitadvan'
import Faq from './components/Faq'
import Footer from './Footer'

function App() {


  return (
    <>
      <div className="">
        <Topbar />
        <Navbar />
        <Herosection />
        <ResourseCont />
        <EnrollBanner />
        <Features />
        <Services />
        <Assitadvan />
        <Faq />
        <Footer />
      </div>
    </>
  )
}

export default App
