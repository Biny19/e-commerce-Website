import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corrected import statement for 'BrowserRouter' and 'Routes'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart'; // Added missing import statement for 'Cart' component
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div >
      <BrowserRouter> {/* Corrected component name */}
        <Navbar />
        <Routes> {/* Corrected component name */}
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category='women' />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid' />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} /> {/* Added route for 'Cart' component */}
          <Route path='/login' element={<LoginSignup />} />
        </Routes> {/* Corrected component name */}
        <Footer />
      </BrowserRouter> {/* Corrected component name */}
    </div>
  );
}

export default App;
