
import './App.css'
import Herosection from './components/Herosection'
import ResourseCont from './components/ResourseCont'
import EnrollBanner from './components/EnrollBanner'
import Features from './components/Features'
import Services from './components/Services'
import Assitadvan from './components/Assitadvan'
import Faq from './components/Faq'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'

function App() {


  return (
    <>

      <Header />

      <Herosection />
      <ResourseCont />
      <EnrollBanner />
      <Features />
      <Services />
      <Assitadvan />
      <Faq />

      <Footer />

    </>
  )
}

export default App
