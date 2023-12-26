import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function SecondComponent() {
  const navigate = useNavigate()
  const [anddinput, setAnddinput] = useState()
  const [anddpassword, setPassword] = useState()


  const handleUsername = (event) => {
    const username = event.target.value
    setAnddinput(username)

  }

  const handlePassword = (event) => {
    const password = event.target.value
    setPassword(password)



  }

  const login = () => {
    

    if (anddinput === "admin" && anddpassword === "123") {
      navigate('/cars')




    } else {
      alert('Fail')
    }


  }

  return (
    <div className='container'>
     <div>
      <h1>UserNmae: admin</h1>
      <h1>password:123</h1>
    </div>
      <div className="row mt-4">
        <div className="col-6 offset-3">
          <div className="card">
            <div className="card-header">
              <h1 className='text-center'>Login</h1>
            </div>
            <div className="card-body">
              <input type="text" onChange={handleUsername} placeholder="Username" className='form-control' required />
              <input type="text" onChange={handlePassword} placeholder="Password" className='form-control mt-2' required />
            </div>

            <div className="card-footer d-flex justify-content-center gap-2">


              <button type='submit' className='btn btn-info' onClick={login}>login</button>


            </div>
          </div>


        </div>
      </div>
    </div>

  )
}


