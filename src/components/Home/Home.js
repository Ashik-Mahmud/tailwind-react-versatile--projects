import React from 'react'
import Analytics from '../Analytics/Analytics'
import Hero from '../Hero/Hero'
import Pricing from '../Pricing/Pricing'

const Home = ({meals}) => {
    
    const data = []
    meals.forEach(item => {
        data.push({name: item.strMeal, price: item.idMeal})
    });
    

  return (
    <>
        <Hero />
        <Pricing meals={meals} />
        <Analytics data={data} />
    </>
  )
}

export default Home