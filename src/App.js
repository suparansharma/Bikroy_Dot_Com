import './App.css';
import Home from './component/Home';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import About from './component/About/About';
import Error from './component/Error/Error';

function App() {
  return (
    <div >
    <Header/>  
    <Routes>
      <Route path='/' element={ <Shop/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/inventory' element={<Inventory/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </div>
  );
}

export default App;
