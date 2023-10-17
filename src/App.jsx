import Main from './components/pages/Main'
import About from './components/pages/About'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />}></Route>
        <Route exact path='/about' element={<About />}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
