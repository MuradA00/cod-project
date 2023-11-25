import Main from './components/pages/Main';
import Product from './components/pages/Product';
import About from './components/pages/About';
import './App.css';
import Checkout from './components/pages/Checkout';
import Header from './components/Website/Header/Header.jsx';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Order from './components/pages/Order';
import Page2 from './components/pages/Page2';
import Page1 from './components/pages/Page1';
import Profile from './components/pages/Profile';
import Details from './components/Website/Details/Details.jsx';
import AdminMain from './components/pages/AdminMain.jsx';
import AdminHeader from './components/AdminPanel/AdminHeader.jsx';
import AdminOrders from './components/pages/AdminOrders.jsx';
import AdminItems from './components/pages/AdminItems.jsx';
import AdminDetails from './components/pages/AdminDetails.jsx';
import Menu from './components/Website/Header/Menu.jsx';
import { useState } from 'react';

const App = () => {

  const [display, setDisplay] = useState(false);
  const handleMenu = () => {
    setDisplay(prev => !prev);
    console.log(display)
  }
  const isAdmin = window.location.href.includes('admin');
  
  return (
    <Router>
      {isAdmin ? <AdminHeader/> : <Header  handleMenu={handleMenu} />}
      {isAdmin ? null : <Menu state={display} handleMenu={handleMenu} />}
      <Routes>
        <Route exact path='/' element={<Main />}></Route>
        <Route exact path='/about' element={<About />}></Route>        
        <Route exact path='/product' element={<Product />}></Route>
        <Route exact path='/order' element={<Order />}></Route>
        <Route exact path='/checkout' element={<Checkout />}></Route>
        <Route exact path='/page2' element={<Page2 />}></Route>
        <Route exact path='/page1' element={<Page1 />}></Route>
        <Route exact path='/profile' element={<Profile />}></Route>
        <Route exact path='/details' element={<Details />}></Route>
        <Route exact path='/admin-main' element={<AdminMain />}></Route>
        <Route exact path='/admin-orders' element={<AdminOrders />}></Route>
        <Route exact path='/admin-items' element={<AdminItems />}></Route>
        <Route exact path='/admin-details' element={<AdminDetails />}></Route>
      </Routes>
      {isAdmin ? '' : <Footer/>}
    </Router>
  )
}

export default App
