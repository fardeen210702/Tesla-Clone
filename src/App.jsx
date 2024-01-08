import Header from './components/Header'
import './App.css'
import '../src/responsiveness/phone.css'
import VehiclesComp from './components/VehiclesComp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SinglePage from './Pages/SinglePage'

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/singlePage/:id' element={<SinglePage />} />
        </Routes>

          <VehiclesComp />
      </Router>
    </div>
  )
}

export default App
