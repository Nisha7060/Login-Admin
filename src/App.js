/* eslint-disable no-unused-vars */
import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import { cardata } from './cardata';

function App() {
  const [data, setData] = useState([]);
  const [car_name, setCname]=useState([]);
  // eslint-disable-next-line no-unused-vars
  const [manufacturing, setmanufacturing_year]=useState([]);
  const [price, setprice]=useState([]);

   
  useEffect(() => {
    console.log(cardata);  // Add this line
    setData(cardata);
  }, []);

  const handleEdit = (id) => {
    const dt = data.filter(item => item.car_name === car_name);
    if(dt!== undefined){
      setCname(dt[0].car_name);
      setmanufacturing_year(dt[0].car_name);
      setprice(dt[0].car_name);
      


    }
  };

  const handleDelete = (carName) => {
    if (window.confirm("Are you sure to delete this item?")) {
      const dt = data.filter(item => item.car_name !== carName);
      setData(dt);
    }
  };
  const handleSave = () => {

  };
  const handleClear = () => {
    
  };
  
  return (
    <div className="App">
    <div style={{display:'flex',justifyContent:'center',marginTop:"10px",marginBottom:"10px"}}>
    <div>
      <label>car_name:
          <input type='text' placeholder='Enter car__name' onChange={(e) => setCname(e.target.value)}></input>
         </label>
    </div>
    <div>
      <label>manufacturing_year:
          <input type='text' placeholder='Enter manufacturing' onChange={(e) => setmanufacturing_year(e.target.value)}></input>
         </label>
    </div>
    <div>
      <label>price:
          <input type='text' placeholder='Enter price' onChange={(e) => setprice(e.target.value)}></input>
         </label>
    </div>
    <div>
    <button className='btn btn-primary' onClick={() => handleSave()}>Save</button>&nbsp;
    <button className='btn btn-danger' onClick={() => handleClear()}>clear</button>
    </div>
    </div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>Sr.no</td>
            <td>car_name</td>
            <td>manufacturing_year</td>
            <td>Price</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.car_name}</td>
                  <td>{item.manufacturing_year}</td>
                  <td>{item.Price}</td>
                  <td>
                    <button className='btn btn-primary' onClick={() => handleEdit(item.car_name)}>Edit</button>&nbsp;
                    <button className='btn btn-danger' onClick={() => handleDelete(item.car_name)}>Delete</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <Login />
    </div>
  );
}

export default App;
