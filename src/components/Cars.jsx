import React from 'react'

import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Cars() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [color, setColor] = useState('')
  const [year, setYear] = useState('')
  const [position, setPosition] = useState('')
  const [number, setNumber] = useState('')
  const [search, setSearch] = useState("")



  const changeName = (e) => {
    setName(e.target.value)
  }
  const changePrice = (e) => {
    setPrice(e.target.value)
  }
  const changeColor = (e) => {
    setColor(e.target.value)
  }
  const changeYear = (e) => {
    setYear(e.target.value)
  }
  const changePosition = (e) => {
    setPosition(e.target.value)
  }
  const changeNumber = (e) => {
    setNumber(e.target.value)
  }

  const addCars = () => {
    let payload = {
      name: name,
      price: price,
      color: color,
      year: year,
      position: position,
      number: number,
    }
    setCars([...cars, payload])

  }

  const [carData] = useState([
    {
      id: 1,
      name: "Gentra",
      price: "10000",
      color: "black",
      year: "2023",
      position: "3",
      number: 777
    },
    {
      id: 2,
      name: "Cobalt",
      price: "8000",
      color: "White",
      year: "2020",
      position: "4",
      number: 333
    },
    {
      id: 3,
      name: "Nexia",
      price: "12000",
      color: "Red",
      year: "2015",
      position: "2-Dons",
      number: '080'
    }
  ])


  const [cars, setCars] = useState(carData)


  const remove = (index) => {
    const qoshremove = [...cars];
    qoshremove.splice(index, 1)
    setCars(qoshremove)


  }

  const carsfilter = (e) =>{
    const result = e.target.value
    const filtered = carData.filter(item =>{
      return item.name.toLowerCase().includes(result.toLowerCase());
    })
    setCars(filtered)
  }






  return (
    <div className='container mt-4'>
      <div className="row">
        <div className="col-md-8 offset-1">
        <input type="text" onChange={carsfilter} placeholder='Search'/>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>Price</th>
                <th>Color</th>
                <th>Year</th>
                <th>Position</th>
                <th>Number</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>

              {
                cars.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>{item.color}</td>
                      <td>{item.year}</td>
                      <td>{item.position}</td>
                      <td>{item.number}</td>

                      <td>
                        <Link className='btn btn-info' to={`/home/${index}`}>open</Link>

                      </td>
                      <td><button className='btn btn-danger' onClick={() => remove(index)}>Delete</button></td>

                    </tr>
                  )
                })
              }

            </tbody>
          </table>
          <div className=' col-md-4'>
            <form >
              <input onChange={changeName} type="text" placeholder='Name' className='form-control my-2' required/>
              <input onChange={changePrice} type="number" placeholder='Price' className='form-control my-2' required/>
              <input onChange={changeColor} type="text" placeholder='Color' className='form-control my-2' required/>
              <input onChange={changeYear} type="text" placeholder='Year' className='form-control my-2' required/>
              <input onChange={changePosition} type="text" placeholder='Position' className='form-control my-2' required/>
              <input onChange={changeNumber} type="number" placeholder='Number' className='form-control my-2' required/>
            </form>
            <button type='submit' onClick={addCars} className='btn btn-success'>Add Cars</button>

          </div>

        </div>
      </div>
    </div>
  )

}

