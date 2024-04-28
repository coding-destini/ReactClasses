import React from 'react'
import { Car } from './Car';

export const Garage = () => {
    // const cars = ["BWM","AUDI","FORD"];
    const cars =[
        {id : 1, brand : "BMW"},
        {id : 2, brand : "AUDI"},
        {id : 3, brand : "FORD"}
    ]
  return (
    <div>My Garage
        { 
        cars.map((car)=>   <Car key={car.id} cars={car.brand}/>)
        }
      
    </div>
  )
}
