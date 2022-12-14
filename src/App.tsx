import {useState} from 'react';
import './App.scss';
import { HashRouter, Routes, Route, useParams } from "react-router-dom";
import Home from './components/home/home'
import Menu from './components/menu/menu'
import MenuInfo from './components/menu/menu-info/menu-info'
import Navbar from './components/navbar/navbar';
import OrderStatus from './components/order-status/order-status';
import Main from './components/menu/menu-item/main';
import Dessert from './components/menu/menu-item/dessert';
import Appetizer from './components/menu/menu-item/appetizer';
import Drinks from './components/menu/menu-item/drinks';
import Cart from './components/cart/cart';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  const [crumbs, setCrumbs] = useState(['Home']);
  
  const selected = crumb => {
    
    console.log(crumb);
  }
  return (
    <>
    <Navbar crumbs={ crumbs } selected={ selected }  />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/menu/main" element={<Main />}/>
      <Route path="/menu/dessert" element={<Dessert />}/>
      <Route path="/menu/appetizer" element={<Appetizer />}/>
      <Route path="/menu/drinks" element={<Drinks />}/>
      <Route path="/order-status" element={<OrderStatus />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/menu-info/:id" element={<MenuInfo />} />
    </Routes>
    
    </>
  );
}

// export default App;

// function Child() {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }