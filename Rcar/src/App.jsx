import react from 'react'
import Home from './pages/Home/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CarsPage from './pages/CarsPage/CarsPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CartPage from './pages/CartPage/CartPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">

          <Header />
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/CarsModle' element={<CarsPage />} />
          <Route path='/Cart' element={<CartPage />} />
        </Routes>


        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
