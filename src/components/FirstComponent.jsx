import React from 'react'
import img1 from '../assets/pngeggr.png'
import img2 from '../assets/pngeggg.png'
import img3 from '../assets/pngege.png'
import '../components/cars.scss'
import { useState } from 'react'



export default function FirstComponent() {
  const [cars, useCars] = useState([
    {
      id: 1,
      img : img1,
      name: "Gentra",
      price: "$10000",
      color: "black",
      year: "2023",
      position: "3",
      number: 777
    },
    {
     
      id: 2,
      img : img2,
      name: "Cobalt",
      price: "$8000",
      color: "White",
      year: "2020",
      position: "4",
      number: 333
    },
    {
      id: 3,
      img : img3,
      name: "Nexia",
      price: "$12000",
      color: "Red",
      year: "2015",
      position: "2-Dons",
      number: '080'
    },

  ])
  
  const url = window.location.href.split('/')
    let index = Number(url[4]);
    // const { cars } = this.state
 
    return (
      <div className='container'>
       <div className="row">
        <div className="card1">
        <div><img src={cars[index].img} alt="" /></div>
        <h1 className='name_car'>{cars[index].name}</h1>
        <h1 className='price'>Price:  {cars[index].price}</h1>
        <h1 className='color'>Color:  {cars[index].color}</h1>
        <h1 className='year'>Year:  {cars[index].year}</h1>
        <h1 className='position'>Position:  {cars[index].position}</h1>
        <h1 className='number1'>Number:  {cars[index].number}</h1>
        </div>
       </div>

      </div>
    )
}


