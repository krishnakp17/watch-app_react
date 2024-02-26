import React, { useState } from 'react'
import WatchNav from './WatchNav'

const AddWatch = () => {
  const [input,setInput]=new useState({"id":"","model":"","brand":"","date":"","type":"","gender":""})
  const inputHandler=(event)=>{
      setInput({...input,[event.target.name]:event.target.value})
  }
  const readValues=()=>{
      console.log(input)
      if (!input.id ||!input.model||!input.brand||!input.date||!input.type||!input.gender) {
          alert("Fill all the fields")
          
      } else {
          alert("Success")
      }
      setInput(
          {"id":"","model":"","brand":"","date":"","type":"","gender":""}
      )
  }
  return (
    <div>
        <WatchNav/>
        <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Watch ID</label>
              <input type="text" className="form-control" name='id' value={input.id} onChange={inputHandler}/>

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Brand</label>
              <input type="text" className="form-control" name='brand' value={input.brand} onChange={inputHandler}/>



              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Model</label>
                <input type="text" className="form-control" name='model' value={input.model} onChange={inputHandler}/>

              
             
              </div>
              
            
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Dial type</label>
              <select className="form-control" name='name' value={input.name} onChange={inputHandler}>
                <option value="Analog">Analog</option>
                <option value="Digital">Digital</option>
              </select>

              
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Strap type</label>
              <select className="form-control" name='type' value={input.type} onChange={inputHandler}>
                <option value="Chain">Chain</option>
                <option value="Leather">Leather</option>
                <option value="Synthetic">Synthetic</option>

              </select>

              
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Gender</label>
              <select className="form-control" name='gender' value={input.gender} onChange={inputHandler}>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Unisex">Unisex</option>

              </select>

              
              </div>

              
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <button className="btn btn-success" onClick={readValues}>Add</button>
              </div>
            </div>

          </div>
        </div>
       </div>
        

    </div>
  )
}

export default AddWatch