import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [state, setState] = useState({
    name: '',
    age: ''
  })

  //GET
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/getUser')
      .then( res => {
        setData(res.data)
      })
  })

  //POST
  const handleChange = evt => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value
    })
  }

  const save = () => {
    axios 
      .post('http://localhost:3001/api/postUser', {
        ...state
      })
  }

  return (
    <div className="App-header">
     <h1>Simple Post</h1> 

    {/* FORM TO POST */}
     <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name"  onChange={handleChange} className="form-control" value={state.name} id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" name="age" onChange={handleChange} className="form-control" value={state.age} id="age" />
        </div>
        <button onClick={save} className="btn btn-primary">Save</button>
      </form>

      {/* TABLE TO GET */}
      <div className='container mt-2'>
        <table className="table table-hover table-dark table-sm">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Actions</th>
          </tr>
          </thead>
          <tbody>
          {
            data.map( item => {
              return(
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <a href="#">Edit </a> || 
                  <a href="#"> Delete</a>
                </td>
              </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
