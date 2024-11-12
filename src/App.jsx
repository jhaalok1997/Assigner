import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import './App.css'
import Herosection from './components/Herosection'
import ResourseCont from './components/ResourseCont'
import EnrollBanner from './components/EnrollBanner'
import Features from './components/Features'

function App() {


  return (
    <>
      <div className="">
        <Topbar />
        <Navbar />
        <Herosection />
        <ResourseCont />
        <EnrollBanner/>
        <Features/>
      </div>
    </>
  )
}

export default App
