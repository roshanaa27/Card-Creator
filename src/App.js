import logo from './logo.svg';
import './App.css';
import React from "react";
import { useState } from "react";
function App() {
  const[inputarr,setInputarr]=useState([])
  const[inputdata,SetInputdata]=useState({
    Name:"",
    Email:"",
    Contact_number:"",
    URL:""
  })
  function changehandle(e){
    SetInputdata({...inputdata,[e.target.name]:e.target.value})
  }
  let Name=inputdata.Name;
  let Email=inputdata.Email;
  let Contact_number=inputdata.Contact_number;
  let URL=inputdata.URL;

  function handleSubmit(e){
    e.preventDefault();
    setInputarr([...inputarr,{Name,Email,Contact_number,URL}])
    SetInputdata({Name:"",Email:"",Contact_number:"",URL:""})
  }
  const handleDelete = (ind)=>{
    var setInputarr1 = inputarr;
    setInputarr1.splice(ind,1)
    setInputarr([...setInputarr1])
  }

  return (
    <div className="App">
      <h1>Card Creator</h1>
      <div className="fix-box">
      <p>Please Enter your Name </p>
      <input type="text" name="Name" value={Name} onChange={changehandle} placeholder="Enter your name" /><br/>
      <p>Please Enter your Email-id </p>
      <input type="email" name="Email" value={inputdata.Email} onChange={changehandle} placeholder="Enter your email" /><br/>
      <p>Enter your Contact Number </p>
      <input type="text" name="Contact_number" value={inputdata.Contact_number} onChange={changehandle} placeholder="Enter your contact number" /><br/>
      <p>Paste your Profile picture URL </p>
      <input type="url" name="URL" value={inputdata.URL} onChange={changehandle} placeholder="Enter your profile url" /><br/>
      <button onClick={handleSubmit} >Create card</button>
      </div>
    {
      inputarr.map((info,ind)=>{
        return(

          <div className="fix-table">
          <div key={ind}>
          <div>
          <img src={info.URL} alt=""/>
          </div>
          <p>Name: {info.Name}</p>
          <p>Email: {info.Email}</p>
          <p>Contact number: {info.Contact_number}</p>
          </div>
          <button className="get" onClick={()=>handleDelete(ind)} >Delete</button>
          </div>  
        )
      })
    }
    </div>
    );
}

export default App;
