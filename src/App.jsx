import Header from './components/Header'
import './App.css'
import '../src/responsiveness/phone.css'
import VehiclesComp from './components/VehiclesComp'
// import Footer from './components/Footer'

function App() {

  return (
    <div className='App'>
    <Header/>
    <VehiclesComp/>
   {/* <Footer/> */}
   

    </div>
  )
}

export default App
