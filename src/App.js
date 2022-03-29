import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import BDAddress from './components/About/BDAddress/BDAddress';
import USAAddress from './components/About/USAAddress/USAAddress';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Coins from './components/Coins/Coins';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import MealDetails from './components/MealDetails/MealDetails';
import Meals from './components/Meals/Meals';
import NotFound from './components/NotFound/NotFound';
function App() {
const [meals, setMeals] = useState([])
useEffect(()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then((res)=>{
        setMeals(res.data.meals);
    })
}, [])
  return (
    <>
     <Header />
     <Routes>
         <Route path="/" element={<Home meals={meals} />} />
         <Route path='/about' element={<About />} >
             <Route path='bd-address' element={<BDAddress />} />
             <Route path='usa-address' element={<USAAddress />} />
         </Route>
         <Route path='/meals' element={<Meals meals={meals} setMeals={setMeals} />} />
         <Route path='/meal/:mealId' element={<MealDetails />} />
         <Route path='/coins' element={<Coins />} />
         <Route path='/coin/:coinId' element={<CoinDetails />} />
         <Route path='*' element={<NotFound />} />
     </Routes>
     
    </>
  );
}

export default App;
